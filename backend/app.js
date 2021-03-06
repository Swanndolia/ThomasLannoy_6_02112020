const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const saucesRoutes = require("./routes/sauces");
const userRoutes = require("./routes/user");
const helmet = require("helmet"); //for security (protect sql & xms injection disable some headers...)
const session = require("express-session");
require('./middleware/basic-security.js')();

mongoose
  .connect(secureCrypt("zbatbqo+fei://Fjnaaqbyvn:pqrpqrjfkG1@fbcrpxbxb.tznz2.zbatbqo.arg/cvdhnagr?ergelJevgrf=gehr&j=znwbevgl"), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));
const app = express();
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});
app.use(helmet());
app.set("trust proxy", 1);
app.use(
  session({
    secret: "s3Cur3",
    name: "sessionId",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "images")));
app.use("/api/sauces", saucesRoutes);
app.use("/api/auth", userRoutes);

module.exports = app;
