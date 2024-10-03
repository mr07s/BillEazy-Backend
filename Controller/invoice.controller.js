const Invoice = require("../Models/Invoice/invoice.model");
const SupplierDetails = require("../Models/Invoice/supplier.details.model");
const BuyerDetails = require("../Models/Invoice/buyer.details.model");
const Product = require("../Models/Invoice/product.model");
const TransportDetails = require("../Models/Invoice/transport.details.model");
const BankDetails = require("../Models/Invoice/bank.details.model");

const create = async (req, res) => {
  try {
    // const {
    //   supplierDetails,
    //   buyerDetails,
    //   product,
    //   transportDetails,
    //   bankDetails,
    // } = req.body;
    // console.log(req.body);
    // const supplierData = await SupplierDetails.create(supplierDetails);
    // const buyerData = await BuyerDetails.create(buyerDetails);
    // const productData = await Product.create(product);
    // const transportData = await TransportDetails.create(transportDetails);
    // const bankData = await BankDetails.create(bankDetails);
    // let invoiceData = await Invoice.create({
    //   supplierDetails: supplierData._id,
    //   buyerDetails: buyerData._id,
    //   product: productData._id,
    //   transportDetails: transportData._id,
    //   bankDetails: bankData._id,
    //   termsAndConditions: req.body.termsAndConditions,
    // });
    // invoiceData = await Invoice.findById(invoiceData?._id)
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
    //     path: "transportDetails",
    //     // model: "Transport Details",
    //     // select: "supplyType type"
    //   })
    //   .populate({
    //     path: "bankDetails",
    //     // model: "Bank Details",
    //     // select: "bankName accountNumber ifscCode accountHolderName"
    //   });
    // // .then(() => {
    // res.status(200).json(invoiceData);
    // })

    const {
      invoiceType,
      invoicePrefix,
      invoiceNo,
      invoiceDate,
      Supplier_id,
      Buyer_id,
      // Products_id,
      productId,
      Transport_id,
      Bank_id,
      User_id,
      termsAndConditions,
      totalProductPrice,
      totalTaxAmount,
      paidAmount,
      pendingAmount,
    } = req.body;
    // console.log(req.body);
    console.log("req");
    // console.log(req.body.termsAndCondition);
    console.log(termsAndConditions);

    let invoiceData = await Invoice.create({
      invoiceType,
      invoicePrefix,
      invoiceNo,
      invoiceDate,
      supplierDetails: Supplier_id,
      buyerDetails: Buyer_id,
      product: productId,
      transportDetails: Transport_id,
      bankDetails: Bank_id,
      userId: User_id,
      termsAndConditions,
      totalProductPrice,
      totalTaxAmount,
      paidAmount,
      pendingAmount,
    });

    invoiceData = await Invoice.findById(invoiceData?._id)
      .populate({
        path: "supplierDetails",
        // model: "Supplier Details",
        // select: "firmName"
      })
      .populate({
        path: "buyerDetails",
        // model: "Buyer Details",
        // select: "gstTreatmentType"
      })
      .populate({
        path: "product",
        // model: "Product Details",
        // select: "_ gst taxType discountType"
      })
      .populate({
        path: "transportDetails",
        // model: "Transport Details",
        // select: "supplyType type"
      })
      .populate({
        path: "bankDetails",
        // model: "Bank Details",
        // select: "bankName accountNumber ifscCode accountHolderName"
      });
    // .then(() => {
    res.status(200).json(invoiceData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
//only invoice details and buyer details  are fetched
const fetchInvoiceDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllInvoice = await Invoice.find({ userId: id }).populate({
      path: "buyerDetails",
    });
    console.log(AllInvoice);

    // let buyer = AllInvoice.map((invoice) =>
    //   invoice.populate({
    //     path: "buyerDetails",
    //   })
    // );
    // console.log(buyer);
    res.status(200).send({
      success: true,
      AllInvoice,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "error",
      success: false,
    });
  }
};
const fetchInvoicePdf = async (req, res) => {
  try {
    console.log(req.params);
    console.log("Hii");
    const { id } = req.params;

    const invoicePDfData = await Invoice.findById({ _id: id })
      .populate({
        path: "supplierDetails",
        // model: "Supplier Details",
        // select: "firmName"
      })
      .populate({
        path: "buyerDetails",
        // model: "Buyer Details",
        // select: "gstTreatmentType"
      })
      .populate({
        path: "product",
        // model: "Product Details",
        // select: "_ gst taxType discountType"
      })
      .populate({
        path: "transportDetails",
        // model: "Transport Details",
        // select: "supplyType type"
      })
      .populate({
        path: "bankDetails",
        // model: "Bank Details",
        // select: "bankName accountNumber ifscCode accountHolderName"
      });
    // .then(() => {
    res.status(200).json(invoicePDfData);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
//This is used in Recive_payment page of Invoice.only product details are fetched
const fetchProduct_InvoiceDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const Invoice_Product = await Invoice.findById({ _id: id }).populate({
      path: "product",
    });
    res.status(200).send({
      success: true,
      Invoice_Product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: error,
      success: false,
    });
  }
};

const updateInvoiceDetails = async (req, res) => {
  try {
    console.log(req.params.id);
    // const { Product_Id } = req.params;
    // console.log(Product_Id);
    const { paidAmount, pendingAmount } = req.body;
    // console.log(paid_amount);
    const product = await Invoice.findByIdAndUpdate(
      req.params.id,
      {
        paidAmount: paidAmount,
        pendingAmount: pendingAmount,
      },
      { new: true }
    );
    await product.save();
    res.status(201).send({
      success: true,
      message: "Invoice Updated Successfully",
      product,
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
const addSupplierDetails = async (req, res) => {
  try {
    const supplierDetails = req.body;
    const supplierData = await SupplierDetails.create(supplierDetails);
    res.status(200).json(supplierData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchSupplierDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const AllSupplier = await SupplierDetails.find({ userId: id });
    res.status(201).send({
      success: true,
      AllSupplier,
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
const addBuyerDetails = async (req, res) => {
  try {
    const buyerDetails = req.body;
    const buyerData = await BuyerDetails.create(buyerDetails);
    res.status(200).json(buyerData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const fetchBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const Allbuyer = await BuyerDetails.find({ userId: id });
    res.status(201).send({
      success: true,
      totalCount: Allbuyer.length,
      Allbuyer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while geeting buyer",
    });
  }
};
const deleteBuyerDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await BuyerDetails.findByIdAndDelete({ _id: id });
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
const addProductDetails = async (req, res) => {
  try {
    const productDetails = req.body;
    const productData = await Product.create(productDetails);
    res.status(200).json(productData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const AllProducts = await Product.find({ userId: id });
    res.status(201).send({
      success: true,
      totalCount: AllProducts.length,
      AllProducts,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};

const deleteProductDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    await Product.findByIdAndDelete({ _id: id });
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

const addTransportDetails = async (req, res) => {
  try {
    const transportDetails = req.body;
    const transportData = await TransportDetails.create(transportDetails);
    res.status(200).json(transportData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchTransportDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allTransportData = await TransportDetails.find({ userId: id });
    console.log(allTransportData);

    res.status(201).send({
      success: true,
      totalCount: allTransportData.length,
      allTransportData,
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
const addBankDetails = async (req, res) => {
  try {
    const bankDetails = req.body;
    const bankData = await BankDetails.create(bankDetails);
    res.status(200).json(bankData);
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const fetchBankDetails = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const allBankData = await BankDetails.find({ userId: id });
    console.log(allBankData);

    res.status(201).send({
      success: true,
      totalCount: allBankData.length,
      allBankData,
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
  fetchInvoiceDetails,
  fetchProduct_InvoiceDetails,
  updateInvoiceDetails,
  fetchInvoicePdf,

  addSupplierDetails,
  fetchSupplierDetails,

  addBuyerDetails,
  fetchBuyerDetails,
  deleteBuyerDetails,

  addProductDetails,
  fetchProductDetails,
  deleteProductDetails,

  addTransportDetails,
  fetchTransportDetails,

  addBankDetails,
  fetchBankDetails,
};
