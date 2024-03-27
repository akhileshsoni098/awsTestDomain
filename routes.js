const express = require('express');
const { createdata, getdata } = require('./controller');
const router = express.Router();


router.route("/create").post(createdata)
router.route("/getAll").get(getdata)

module.exports = router