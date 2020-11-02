const express = require("express");
const router = express.Router();

const saucesCtrl = require("../controllers/sauces");
router.get("/", auth, sauceCtrl.getAllSauces);
router.get("/:id", auth, sauceCtrl.getOneSauce);
router.post("/", auth, sauceCtrl.createSauce);
router.put("/:id", auth, sauceCtrl.modifySauce);
router.delete("/:id", auth, sauceCtrl.deleteSauce);
router.post("/:id/like", auth, sauceCtrl.likeOrDislike);

module.exports = router;
