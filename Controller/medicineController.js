const medicineModel = require("../Models/MedicineModel");

const medicineController = async (req, res) => {
  try {
    const {
      name,
      mrp,
      rate,
      hsn,
      type,
      pack,
      quantity,
      composition,
      expiry,
      mfg,
      batchno,
      userId,
    } = req.body;
    console.log(req.body);
    // if (!name) {
    //   res.send({ message: "Name is required" });
    // }
    // if (!rate) {
    //   res.send({ message: "price is required" });
    // }
    // if (!mrp) {
    //   res.send({ message: "price is required" });
    // }
    // if (!hsn) {
    //   res.send({ message: "price is required" });
    // }
    // if (!quantity) {
    //   res.send({ message: "quantity is required" });
    // }
    // if (!mfg) {
    //   res.send({ message: "quantity is required" });
    // }
    // if (!batchno) {
    //   res.send({ message: "quantity is required" });
    // }
    // if (!expiry) {
    //   res.send({ message: "expiry is required" });
    // }
    // if (!userId) {
    //   res.send({ message: "userId is required" });
    // }
    console.log(name);
    const newMedicine = await medicineModel.create({
      name,
      quantity,
      rate,
      mrp,
      hsn,
      type,
      pack,
      composition,
      expiry,
      mfg,
      batchno,
      userId,
    });

    res.status(201).send({
      success: true,
      message: "Medicine created successfully",
      newMedicine,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Some thing went wrong while adding medicine",
      error,
    });
  }
};
const getMedicineController = async (req, res) => {
  try {
    const { userId } = req.body;
    console.log(userId);
    const allmedicines = await medicineModel.find({ userId });
    res.status(200).send({
      success: true,
      message: "All medicines",
      allmedicines,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while geeting medicine",
      error,
    });
  }
};

const deleteMedicine = async (req, res) => {
  try {
    await medicineModel.findByIdAndDelete(req.params.id);

    res.status(201).send({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while deleteing product",
      error,
    });
  }
};

const updateProductController = async (req, res) => {
  try {
    const {
      name,
      quantity,
      rate,
      mrp,
      hsn,
      type,
      pack,
      composition,
      expiry,
      mfg,
      batchno,
    } = req.body;
    const medicine = await medicineModel.findByIdAndUpdate(
      req.params.id,
      {
        name,
        quantity,
        rate,
        mrp,
        hsn,
        type,
        pack,
        composition,
        expiry,
        mfg,
        batchno,
      },
      { new: true }
    );
    await medicine.save();
    res.status(201).send({
      success: true,
      message: "Product Updated Successfully",
      medicine,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while updating",
      error,
    });
  }
};
module.exports = {
  medicineController,
  getMedicineController,
  deleteMedicine,
  updateProductController,
};
