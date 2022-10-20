const express = require("express");
const router = express.Router();
const artists = require("../controllers/artistController");

router.get("/", artists.showArtists);

router.get("/random", artists.random);

router.get("/:id", artists.showById);

module.exports = router;
