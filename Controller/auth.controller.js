const { hashPassword, comparePassword } = require("../helpers/auth.helper");
const User = require("../Models/Auth/signup.auth.model");
const JWT = require("jsonwebtoken");
const Organisation = require("../Models/Organisation/organisation.model");
const Subscription = require("../Models/Subscriptions/subscription.model");
const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body.user;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "User Already Exists",
      });
    }
    const hashedPassword = await hashPassword(password);
    const user = await new User({
      name,
      email,
      password: hashedPassword,
    }).save();
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    const subscription = await Subscription.create(req.body.subscription);
    let organisation = await Organisation.create(req.body.organisation);
    let newOrganisation = await Organisation.findByIdAndUpdate(
      organisation?._id,
      {
        subscription: subscription?._id,
      },
      { new: true }
    );
    let newUser = await User.findByIdAndUpdate(
      user?._id,
      {
        organisation: newOrganisation?._id,
      },
      { new: true }
    );
    User.findById(newUser?._id)
      .populate({
        path: "organisation",
        model: "Organisations",
        populate: {
          path: "subscription",
          model: "Subscriptions",
        },
      })
      .then((user) => {
        console.log(user);
        res.status(200).send({
          user,
          success: true,
          message: "User Registered Successfully",
          token,
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

const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      return res.status(404).send({
        success: false,
        message: "User does not exists please register",
      });
    }
    const match = await comparePassword(password, existingUser.password);
    // if (!match) {
    //   return res.status(200).send({
    //     success: false,
    //     message: "Invalid Password",
    //   });
    // }
    const token = await JWT.sign(
      { _id: existingUser._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).send({
      success: true,
      message: "Log in successfully",
      existingUser,
      token,
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
  signUp,
  logIn,
};
