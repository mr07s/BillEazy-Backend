const express = require("express");
const {
  create,
  addSupplierDetails,
  addBuyerDetails,
  addProductDetails,
  addTransportDetails,
  addBankDetails,
  fetchBuyerDetails,
  deleteBuyerDetails,
  fetchProductDetails,
  deleteProductDetails,
  fetchTransportDetails,
  fetchBankDetails,
  fetchSupplierDetails,
  fetchInvoiceDetails,
  fetchProduct_InvoiceDetails,
  // updateProductDetails,
  updateInvoiceDetails,
  fetchInvoicePdf,
} = require("../../Controller/invoice.controller");
const router = express.Router();
router.post("/create", create);
router.post("/get/:id", fetchInvoiceDetails);
router.post("/getpdf/:id", fetchInvoicePdf);
router.post("/invoicedetails/update/:id", updateInvoiceDetails);
router.post(
  "/get/fetchProduct_InvoiceDetails/:id",
  fetchProduct_InvoiceDetails
);
router.post("/supplierdetails/create", addSupplierDetails);
router.post("/supplierdetails/get/:id", fetchSupplierDetails);

router.post("/productdetails/create", addProductDetails);
router.post("/productdetails/get/:id", fetchProductDetails);
router.post("/productdetails/delete/:id", deleteProductDetails);

router.post("/bankdetails/create", addBankDetails);
router.post("/bankdetails/get/:id", fetchBankDetails);

router.post("/buyerdetails/get/:id", fetchBuyerDetails);
router.post("/buyerdetails/delete/:id", deleteBuyerDetails);
router.post("/buyerdetails/create", addBuyerDetails);

router.post("/transportdetails/create", addTransportDetails);
router.post("/transportdetails/get/:id", fetchTransportDetails);
module.exports = router;
