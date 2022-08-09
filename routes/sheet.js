const express = require("express");
const getSingleSheet = require("../controllers/sheet");

const router = express.Router();

router.post("/get-sheet-detail", getSingleSheet);

module.exports = router;
