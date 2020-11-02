const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("/routes/user");
const saucesRoutes = require("/routes/sauces");
const app = express();
app.use(bodyParser.json());
app.use("/api/auth", userRoutes);
app.use("/api/sauces", saucesRoutes);

mongoose
  .connect("mongodb+srv://Swanndolia:cdecdewsxT1@sopeckoko.gmam2.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion MongoDB ok !"))
  .catch(() => console.log("Connexion MongoDB error !"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

module.exports = app;
