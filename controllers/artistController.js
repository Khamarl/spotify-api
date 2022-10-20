const Artist = require("../model/ArtistModel");

//create function to handle request and response for gathering all artists

const showArtists = (req, res) => {
  //create empty array for to hold artists
  let ids = [];

  if (req.query.ids) {
    // map through queried ids, giving them an integer
    ids = req.query.ids.split(",").map((id) => parseInt(id));
  }
  try {
    const allArtists = Artist.showArtists(ids);

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

const random = (req, res) => {
  try {
    const randomArtist = Artist.showRandom();
    res.send(randomArtist);
  } catch (err) {
    res.status(500).send({ error: "Server error" });
  }
};

module.exports = { showArtists, showById, random };
