const express = require("express");
const router = express.Router();

const ArController = require("../controller/ArController");
const ArMiddleware = require("../middleware/ArMiddleware");

// Post request
router.post("/savemodel3d", ArController.modelConfig);
// Get Request
router.get("/findarconfigs", ArController.getModelConfig);
router.get("/findidArconfig/:idArconfig", ArController.getIdModelConfig);
// Put Request

// Delete Request

module.exports = router;
