var express = require('express')
var router = express.Router()


const { create , readFromActivity } = require("../controllers/activityController")

router.post("/", create)
router.get("/itinerary/:id", readFromActivity)

module.exports = router