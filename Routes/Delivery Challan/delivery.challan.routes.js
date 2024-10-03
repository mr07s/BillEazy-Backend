const express = require("express");
const {
  create,
  adddeliveryChallanSupplierDetails,
  addDeliveryChallanBuyerDetails,
  addDeliveryChallanProductDetails,
  addDeliveryChallanTransportDetails,
  // addDeliveryChallanBankDetails,
  fetchDeliveryChallanBuyerDetails,
  deleteDeliveryChallanBuyerDetails,
  fetchDeliveryChallanProductDetails,
  deleteDeliveryChallanProductDetails,
  fetchDeliveryChallanTransportDetails,
  // fetchDeliveryChallanBankDetails,
  fetchDeliveryChallanSupplierDetails,
  fetchdeliveryChallanDetails,
} = require("../../Controller/delivery.challan.controller");
const router = express.Router();
router.post("/create", create);
router.post("/get/:id", fetchdeliveryChallanDetails);
router.post(
  "/deliveryChallansupplierdetails/create",
  adddeliveryChallanSupplierDetails
);
router.post(
  "/deliveryChallansupplierdetails/get/:id",
  fetchDeliveryChallanSupplierDetails
);

router.post(
  "/deliveryChallanproductdetails/create",
  addDeliveryChallanProductDetails
);
router.post(
  "/deliveryChallanproductdetails/get/:id",
  fetchDeliveryChallanProductDetails
);
router.post(
  "/deliveryChallanproductdetails/delete/:id",
  deleteDeliveryChallanProductDetails
);

// router.post(
//   "/deliveryChallanbankdetails/create",
//   addDeliveryChallanBankDetails
// );
// router.post(
//   "/deliveryChallanbankdetails/get/:id",
//   fetchDeliveryChallanBankDetails
// );

router.post(
  "/deliveryChallanbuyerdetails/get/:id",
  fetchDeliveryChallanBuyerDetails
);
router.post(
  "/deliveryChallanbuyerdetails/delete/:id",
  deleteDeliveryChallanBuyerDetails
);
router.post(
  "/deliveryChallanbuyerdetails/create",
  addDeliveryChallanBuyerDetails
);

router.post(
  "/deliveryChallantransportdetails/create",
  addDeliveryChallanTransportDetails
);
router.post(
  "/deliveryChallantransportdetails/get/:id",
  fetchDeliveryChallanTransportDetails
);
module.exports = router;
