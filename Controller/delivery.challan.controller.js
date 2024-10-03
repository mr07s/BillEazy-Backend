const deliveryChallan = require("../Models/Delivery Challan/delivery.challan.model");
const deliveryChallanSupplierDetails = require("../Models/Delivery Challan/delivery.challan.supplier.details.model");
const deliveryChallanBuyerDetails = require("../Models/Delivery Challan/delivery.challan.buyer.details.model");
const deliveryChallanProductDetails = require("../Models/Delivery Challan/delivery.challan.product.details.model");
const deliveryChallanTransportDetails = require("../Models/Delivery Challan/delivery.challan.transport.details.model");
// const deliveryChallanBankDetails = require("../Models/Delivery Challan/");

const create = async (req, res) => {
  try {
    // const {
    //   supplierDetails,
    //   buyerDetails,
    //   product,
    //   deliveryChallantransportDetails,
    //   deliveryChallanBankDetails,
    // } = req.body;
    // console.log(req.body);
    // const supplierData = await SupplierDetails.create(supplierDetails);
    // const buyerData = await BuyerDetails.create(buyerDetails);
    // const productData = await Product.create(product);
    // const deliveryChallanTransportData = await deliveryChallanTransportDetails.create(deliveryChallantransportDetails);
    // const bankData = await deliveryChallanBankDetails.create(deliveryChallanBankDetails);
    // let deliveryChallanData = await deliveryChallan.create({
    //   supplierDetails: supplierData._id,
    //   buyerDetails: buyerData._id,
    //   product: productData._id,
    //   deliveryChallantransportDetails: deliveryChallanTransportData._id,
    //   deliveryChallanBankDetails: bankData._id,
    //   termsAndConditions: req.body.termsAndConditions,
    // });
    // deliveryChallanData = await deliveryChallan.findById(deliveryChallanData?._id)
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
    //     path: "deliveryChallantransportDetails",
    //     // model: "Transport Details",
    //     // select: "supplyType type"
    //   })
    //   .populate({
    //     path: "deliveryChallanBankDetails",
    //     // model: "Bank Details",
    //     // select: "bankName accountNumber ifscCode accountHolderName"
    //   });
    // // .then(() => {
    // res.status(200).json(deliveryChallanData);
    // })

    const {
      deliveryChallanType,
      deliveryChallanPrefix,
      deliveryChallanNo,
      deliveryChallanDate,
      deliveryChallanSupplier_id,
      deliveryChallanBuyer_id,
      deliveryChallanProducts_id,
      deliveryChallanTransport_id,
      deliveryChallanBank_id,
      deliveryChallanUser_id,
    } = req.body;
    console.log(req.body);

    let deliveryChallanData = await deliveryChallan.create({
      deliveryChallanType,
      deliveryChallanPrefix,
      deliveryChallanNo,
      deliveryChallanDate,
      deliveryChallanSupplierDetails: deliveryChallanSupplier_id,
      deliveryChallanBuyerDetails: deliveryChallanBuyer_id,
      deliveryChallandeliveryChallanProductDetails: deliveryChallanProducts_id,
      deliveryChallandeliveryChallanTransportDetails:
        deliveryChallanTransport_id,
      deliveryChallandeliveryChallanBankDetails: deliveryChallanBank_id,
      deliveryChallanUserId: deliveryChallanUser_id,
      // termsAndConditions: req.body.termsAndConditions,
    });

    deliveryChallanData = await deliveryChallan
      .findById(deliveryChallanData?._id)
      .populate({
        path: "deliveryChallanSupplierDetails",
        // model: "Supplier Details",
        // select: "firmName"
      })
      .populate({
        path: "deliveryChallanBuyerDetails",
        // model: "Buyer Details",
        // select: "gstTreatmentType"
      })
      .populate({
        path: "deliveryChallanProductDetails",
        // model: "Product Details",
        // select: "_ gst taxType discountType"
      })
      .populate({
        path: "deliveryChallanTransportDetails",
        // model: "Transport Details",
        // select: "supplyType type"
      })
      .populate({
        path: "deliveryChallanBankDetails",
        // model: "Bank Details",
        // select: "bankName accountNumber ifscCode accountHolderName"
      });
    // .then(() => {
    res.status(200).json(deliveryChallanData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchdeliveryChallanDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const AlldeliveryChallan = await deliveryChallan
      .find({ userId: id })
      .populate({
        path: "deliveryChallanBuyerDetails",
      });
    console.log(AlldeliveryChallan);

    // let buyer = AlldeliveryChallan.map((deliveryChallan) =>
    //   deliveryChallan.populate({
    //     path: "buyerDetails",
    //   })
    // );
    // console.log(buyer);
    res.status(200).send({
      success: true,
      AlldeliveryChallan,
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
const adddeliveryChallanSupplierDetails = async (req, res) => {
  try {
    const deliveryChallanSupplierDetails = req.body;
    const deliveryChallanSupplierData = await SupplierDetails.create(
      deliveryChallanSupplierDetails
    );
    res.status(200).json(deliveryChallanSupplierData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchDeliveryChallanSupplierDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const AllDeliveryChallanSupplier =
      await deliveryChallanSupplierDetails.find({
        userId: id,
      });
    res.status(201).send({
      success: true,
      AllDeliveryChallanSupplier,
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
const addDeliveryChallanBuyerDetails = async (req, res) => {
  try {
    const deliveryChallanBuyerDetails = req.body;
    const deliveryChallanBuyerData = await deliveryChallanBuyerDetails.create(
      deliveryChallanBuyerDetails
    );
    res.status(200).json(deliveryChallanBuyerData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchDeliveryChallanBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllDeliveryChallanBuyer = await deliveryChallanBuyerDetails.find({
      userId: id,
    });
    res.status(201).send({
      success: true,
      totalCount: AllDeliveryChallanBuyer.length,
      AllDeliveryChallanBuyer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while geeting buyer",
    });
  }
};
const deleteDeliveryChallanBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await deliveryChallanBuyerDetails.findByIdAndDelete({ _id: id });
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
const addDeliveryChallanProductDetails = async (req, res) => {
  try {
    const deliveryChallanProductDetails = req.body;
    const deliveryChallanProductData = await Product.create(
      deliveryChallanProductDetails
    );
    res.status(200).json(deliveryChallanProductData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchDeliveryChallanProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllDeliveryChallanProducts = await deliveryChallanProductDetails.find(
      {
        userId: id,
      }
    );
    res.status(201).send({
      success: true,
      totalCount: AllDeliveryChallanProducts.length,
      AllDeliveryChallanProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const deleteDeliveryChallanProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await deliveryChallanProductDetails.findByIdAndDelete({ _id: id });
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

const addDeliveryChallanTransportDetails = async (req, res) => {
  try {
    const deliveryChallanTransportDetails = req.body;
    const deliveryChallanTransportData =
      await deliveryChallanTransportDetails.create(
        deliveryChallanTransportDetails
      );
    res.status(200).json(deliveryChallanTransportData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchDeliveryChallanTransportDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allDeliveryChallanTransportData =
      await deliveryChallanTransportDetails.find({
        userId: id,
      });
    console.log(allDeliveryChallanTransportData);

    res.status(201).send({
      success: true,
      totalCount: allDeliveryChallanTransportData.length,
      allDeliveryChallanTransportData,
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
const addDeliveryChallanBankDetails = async (req, res) => {
  try {
    const deliveryChallanBankDetails = req.body;
    const deliveryChallanBankData = await deliveryChallanBankDetails.create(
      deliveryChallanBankDetails
    );
    res.status(200).json(deliveryChallanBankData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchDeliveryChallanBankDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allDeliveryChallanBankData = await deliveryChallanBankDetails.find({
      userId: id,
    });
    console.log(allDeliveryChallanBankData);

    res.status(201).send({
      success: true,
      totalCount: allDeliveryChallanBankData.length,
      allDeliveryChallanBankData,
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
  fetchdeliveryChallanDetails,

  adddeliveryChallanSupplierDetails,
  fetchDeliveryChallanSupplierDetails,

  addDeliveryChallanBuyerDetails,
  fetchDeliveryChallanBuyerDetails,
  deleteDeliveryChallanBuyerDetails,

  addDeliveryChallanProductDetails,
  fetchDeliveryChallanProductDetails,
  deleteDeliveryChallanProductDetails,

  addDeliveryChallanTransportDetails,
  fetchDeliveryChallanTransportDetails,

  // addDeliveryChallanBankDetails,
  // fetchDeliveryChallanBankDetails,
};
