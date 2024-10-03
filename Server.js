const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const colors = require("colors");
const MedicineRoutes = require("./Routes/Medicines/MedicineRoute");
const InvoiceRoutes = require("./Routes/Invoice/invoice.routes");
const DeliveryChallanRoutes = require("./Routes/Delivery Challan/delivery.challan.routes");
const ProformaRoutes = require("./Routes/Proforma/proforma.routes");
const AuthRoute = require("./Routes/Auth/AuthRoute");
const SubscriptionRoute = require("./Routes/Account/subscription.routes");
const connectDB = require("./connectDb");
//config env
dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Sherrena Enterprise",
  });
});

//routes
app.use("/v1/api/medicine", MedicineRoutes);
app.use("/v1/api/invoice", InvoiceRoutes);
app.use("/v1/api/deliveryChallan", DeliveryChallanRoutes);
app.use("/v1/api/proforma", ProformaRoutes);
app.use("/v1/api/auth", AuthRoute);
app.use("/v1/api/subscription", SubscriptionRoute);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`.bgMagenta);
});
