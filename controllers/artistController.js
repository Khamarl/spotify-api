const Artist = require("../model/ArtistModel")


//create function to handle request and response for gathering all artists 

const showArtists = (req, res) => {
    try{
        const allArtists = Artist.showArtists()
        res.send(allArtists)
    } catch(err) {
        res.status(500).send({error: "Artist catalogue not found"})
    }
}

module.exports = { showArtists }
