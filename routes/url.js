const express = require("express")
const { handlegenerateurl, getallUrl } = require("../controllers/url")
const router = express.Router()


router.post('/', handlegenerateurl)

module.exports = router