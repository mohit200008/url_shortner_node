const express = require("express")
const { handlegenerateurl, handleGetAnalytics } = require("../controllers/url")
const router = express.Router()


router.post('/', handlegenerateurl)
router.get('/analytics/:shortId', handleGetAnalytics)

module.exports = router