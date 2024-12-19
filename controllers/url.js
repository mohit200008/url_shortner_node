const shortid = require("shortid")
const URL = require('../model/url')

async function handlegenerateurl(req, res) {
    const body = req.body
    if(!body.url) return res.status(400).json({ error: "url is required" })
    const shortId = shortid();
    await URL.create({
        shortId : shortId,
        redirectURL: body.url,
        visitHistory: []
    })    

    return res.status(201).json({ id: shortId , message: "url created" })
}

async function handleGetAnalytics(req,res) {
    const shortId = req.params.shortId
    const result = await URL.findOne({ shortId })
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    })
}

module.exports = {
    handlegenerateurl,
    handleGetAnalytics
}