const express = require("express");
const router = express.Router();

const controller = require("../controllers/controller");
const { postMiddleware } = require("../middlewares/post-middleware");

router.get("/", controller.getHello);
router.post("/", postMiddleware, controller.postHello);
router.put("/", controller.putHello);
router.delete("/", controller.deleteHello);

module.exports = router;
