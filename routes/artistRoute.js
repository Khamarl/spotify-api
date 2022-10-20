const express = require("express")
const router = express.Router();
const artists = require("../controllers/artistController")

router.get("/", artists.showArtists);

module.exports = router;
