const express = require("express");
const {
  create,
  addProformaSupplierDetails,
  addProformaBuyerDetails,
  addProformaProductDetails,
  addProformaTransportDetails,
  addProformaBankDetails,
  fetchProformaBuyerDetails,
  deleteProformaBuyerDetails,
  fetchProformaProductDetails,
  deleteProformaProductDetails,
  fetchProformaTransportDetails,
  fetchProformaBankDetails,
  fetchProformaSupplierDetails,
  fetchProformaDetails,
} = require("../../Controller/proforma.controller");
const router = express.Router();
router.post("/create", create);
router.post("/get/:id", fetchProformaDetails);
router.post("/proformaSupplierdetails/create", addProformaSupplierDetails);
router.post("/proformaSupplierdetails/get/:id", fetchProformaSupplierDetails);

router.post("/proformaProductdetails/create", addProformaProductDetails);
router.post("/proformaProductdetails/get/:id", fetchProformaProductDetails);
router.post("/proformaProductdetails/delete/:id", deleteProformaProductDetails);

router.post("/proformaBankdetails/create", addProformaBankDetails);
router.post("/proformaBankdetails/get/:id", fetchProformaBankDetails);

router.post("/proformaBuyerdetails/get/:id", fetchProformaBuyerDetails);
router.post("/proformaBuyerdetails/delete/:id", deleteProformaBuyerDetails);
router.post("/proformaBuyerdetails/create", addProformaBuyerDetails);

router.post("/proformaTransportdetails/create", addProformaTransportDetails);
router.post("/proformaTransportdetails/get/:id", fetchProformaTransportDetails);
module.exports = router;
