const express = require("express");
const {
  medicineController,
  getMedicineController,
  deleteMedicine,
  updateProductController,
} = require("../../Controller/medicineController");

const router = express.Router();

router.post("/addmedicine", medicineController);
router.post("/getmedicine", getMedicineController);
router.delete("/deletemedicine/:id", deleteMedicine);
router.put("/updateMedicine/:id", updateProductController);

module.exports = router;
