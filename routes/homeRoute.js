//import express and router to start creating your route
const express = require("express")
const router = express.Router();
const homeController = require("../controllers/homeController")
const artistController = require("../controllers/artistController")


router.get("/", homeController.index)


module.exports = router 
