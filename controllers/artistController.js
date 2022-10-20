const Artist = require("../model/ArtistModel");

//create function to handle request and response for gathering all artists

const showArtists = (req, res) => {
  try {
    const allArtists = Artist.showArtists();
    res.send(allArtists);
  } catch (err) {
    res.status(500).send({ error: "Artist catalogue not found" });
  }
};

// show artist by id
const showById = (req, res) => {
  const idx = parseInt(req.params.id);
  console.log(idx);

  try {
    const artist = Artist.showById(idx);
    res.send(artist);
  } catch (err) {
    res.status(404).send({ error: "Artist not found" });
  }
};

module.exports = { showArtists, showById };
