const express = require("express");
const router = express.Router();
const Controller = require("../controller/controller.js")

router.get("/", Controller.Home)
router.post("/", Controller.Home)
router.get("/about", Controller.about)

router.get("/order", Controller.buy)
router.post("/order", Controller.buy_take_order)
router.get("/privacy-policy", Controller.privacy)
router.get("/terms", Controller.terms)

module.exports = router;