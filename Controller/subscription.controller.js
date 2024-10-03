const Subscription = require("../Models/Subscriptions/subscription.model");
const create = async (req, res) => {
  try {
    Subscription.create(req.body).then((data) => {
      res.status(200).json({
        success: true,
        message: "Subscribed",
        data,
      });
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      success: false,
      message: e,
    });
  }
};
const update = async (req, res) => {};
module.exports = {
  create,
  update,
};
