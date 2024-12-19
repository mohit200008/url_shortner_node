const express = require("express")
const { handlegenerateurl } = require("../controllers/url")
const router = express.Router()

router.post('/', handlegenerateurl)

module.exports = router