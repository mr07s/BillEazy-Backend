const proforma = require("../Models/Proforma/proforma.model");
const proformaSupplierDetails = require("../Models/Proforma/proforma.supplier.details.model");
const proformaBuyerDetails = require("../Models/Proforma/proforma.buyer.details.model");
const proformaProductDetails = require("../Models/Proforma/proforma.product.details.model");
const proformaTransportDetails = require("../Models/Proforma/proforma.transport.details.model");
const proformaBankDetails = require("../Models/Proforma/proforma.bank.details.model");
const proformaProduct = require("../Models/Proforma/proforma.product.details.model");

const create = async (req, res) => {
  try {
    // const {
    //   supplierDetails,
    //   buyerDetails,
    //   product,
    //   proformatransportDetails,
    //   proformaBankDetails,
    // } = req.body;
    // console.log(req.body);
    // const supplierData = await SupplierDetails.create(supplierDetails);
    // const buyerData = await BuyerDetails.create(buyerDetails);
    // const productData = await Product.create(product);
    // const proformaTransportData = await proformaTransportDetails.create(proformatransportDetails);
    // const bankData = await proformaBankDetails.create(proformaBankDetails);
    // let proformaData = await proforma.create({
    //   supplierDetails: supplierData._id,
    //   buyerDetails: buyerData._id,
    //   product: productData._id,
    //   proformatransportDetails: proformaTransportData._id,
    //   proformaBankDetails: bankData._id,
    //   termsAndConditions: req.body.termsAndConditions,
    // });
    // proformaData = await proforma.findById(proformaData?._id)
    //   .populate({
    //     path: "supplierDetails",
    //     // model: "Supplier Details",
    //     // select: "firmName"
    //   })
    //   .populate({
    //     path: "buyerDetails",
    //     // model: "Buyer Details",
    //     // select: "gstTreatmentType"
    //   })
    //   .populate({
    //     path: "product",
    //     // model: "Product Details",
    //     // select: "_ gst taxType discountType"
    //   })
    //   .populate({
    //     path: "proformatransportDetails",
    //     // model: "Transport Details",
    //     // select: "supplyType type"
    //   })
    //   .populate({
    //     path: "proformaBankDetails",
    //     // model: "Bank Details",
    //     // select: "bankName accountNumber ifscCode accountHolderName"
    //   });
    // // .then(() => {
    // res.status(200).json(proformaData);
    // })

    const {
      proformaType,
      proformaPrefix,
      proformaNo,
      proformaDate,
      proformaSupplier_id,
      proformaBuyer_id,
      proformaProducts_id,
      proformaTransport_id,
      proformaBank_id,
      proformaUser_id,
    } = req.body;
    console.log(req.body);

    let proformaData = await proforma.create({
      proformaType,
      proformaPrefix,
      proformaNo,
      proformaDate,
      proformaSupplierDetails: proformaSupplier_id,
      proformaBuyerDetails: proformaBuyer_id,
      proformaproformaProductDetails: proformaProducts_id,
      proformaproformaTransportDetails: proformaTransport_id,
      proformaproformaBankDetails: proformaBank_id,
      proformaUserId: proformaUser_id,
      // termsAndConditions: req.body.termsAndConditions,
    });

    proformaData = await proforma
      .findById(proformaData?._id)
      .populate({
        path: "proformaSupplierDetails",
        // model: "Supplier Details",
        // select: "firmName"
      })
      .populate({
        path: "proformaBuyerDetails",
        // model: "Buyer Details",
        // select: "gstTreatmentType"
      })
      .populate({
        path: "proformaProductDetails",
        // model: "Product Details",
        // select: "_ gst taxType discountType"
      })
      .populate({
        path: "proformaTransportDetails",
        // model: "Transport Details",
        // select: "supplyType type"
      })
      .populate({
        path: "proformaBankDetails",
        // model: "Bank Details",
        // select: "bankName accountNumber ifscCode accountHolderName"
      });
    // .then(() => {
    res.status(200).json(proformaData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchProformaDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const AllProforma = await proforma.find({ userId: id }).populate({
      path: "proformaBuyerDetails",
    });
    console.log(AllProforma);

    // let buyer = Allproforma.map((proforma) =>
    //   proforma.populate({
    //     path: "buyerDetails",
    //   })
    // );
    // console.log(buyer);
    res.status(200).send({
      success: true,
      AllProforma,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error",
      success: false,
    });
  }
};

//*** Supplier Details */
const addProformaSupplierDetails = async (req, res) => {
  try {
    const proformaSupplierDetails = req.body;
    const proformaSupplierData = await SupplierDetails.create(
      proformaSupplierDetails
    );
    res.status(200).json(proformaSupplierData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchProformaSupplierDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const AllProformaSupplier = await proformaSupplierDetails.find({
      userId: id,
    });
    res.status(201).send({
      success: true,
      AllProformaSupplier,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: error,
    });
  }
};

//*** Supplier Details */

//  ***  Buyer Details *** //
const addProformaBuyerDetails = async (req, res) => {
  try {
    const proformaBuyerDetails = req.body;
    const proformaBuyerData = await proformaBuyerDetails.create(
      proformaBuyerDetails
    );
    res.status(200).json(proformaBuyerData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchProformaBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllProformaBuyer = await proformaBuyerDetails.find({ userId: id });
    res.status(201).send({
      success: true,
      totalCount: AllProformaBuyer.length,
      AllProformaBuyer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while geeting buyer",
    });
  }
};
const deleteProformaBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await proformaBuyerDetails.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      message: "Success fully deleted",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleting buyer",
    });
  }
};
//  ***  Buyer Details *** //

//   ***  Product Details *** //
const addProformaProductDetails = async (req, res) => {
  try {
    const proformaProductDetails = req.body;
    const proformaProductData = await proformaProduct.create(
      proformaProductDetails
    );
    res.status(200).json(proformaProductData);
  } catch (e) {
    console.log("error");
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchProformaProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllProformaProducts = await proformaProductDetails.find({
      userId: id,
    });
    res.status(201).send({
      success: true,
      totalCount: AllProformaProducts.length,
      AllProformaProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const deleteProformaProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await proformaProduct.findByIdAndDelete({ _id: id });
    res.status(200).send({
      success: true,
      message: "Success fully deleted",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
//   ***  Product Details *** //

//   ***  Transport Details *** //

const addProformaTransportDetails = async (req, res) => {
  try {
    const proformaTransportDetails = req.body;
    const proformaTransportData = await proformaTransportDetails.create(
      proformaTransportDetails
    );
    res.status(200).json(proformaTransportData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchProformaTransportDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allProformaTransportData = await proformaTransportDetails.find({
      userId: id,
    });
    console.log(allProformaTransportData);

    res.status(201).send({
      success: true,
      totalCount: allProformaTransportData.length,
      allProformaTransportData,
      message: "Successfully fetched",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
//   ***  Transport Details *** //
const addProformaBankDetails = async (req, res) => {
  try {
    const proformaBankDetails = req.body;
    const proformaBankData = await proformaBankDetails.create(
      proformaBankDetails
    );
    res.status(200).json(proformaBankData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchProformaBankDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allProformaBankData = await proformaBankDetails.find({ userId: id });
    console.log(allProformaBankData);

    res.status(201).send({
      success: true,
      totalCount: allProformaBankData.length,
      allProformaBankData,
      message: "Successfully fetched",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
module.exports = {
  create,
  fetchProformaDetails,

  addProformaSupplierDetails,
  fetchProformaSupplierDetails,

  addProformaBuyerDetails,
  fetchProformaBuyerDetails,
  deleteProformaBuyerDetails,

  addProformaProductDetails,
  fetchProformaProductDetails,
  deleteProformaProductDetails,

  addProformaTransportDetails,
  fetchProformaTransportDetails,

  addProformaBankDetails,
  fetchProformaBankDetails,
};
