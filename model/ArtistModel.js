//model imports data to handle logic in regards to requests made from the controller 
const artists = require("../artists");


class Artist {
    constructor(artist, id) {

        this.id = id,
        this.type = artist.type,
        this.name = artist.name,
        this.genre = artist.genre,
        this.followers = artist.followers
    }

    static showArtists() {
        return artists.map((artist, idx) => new Artist(artist, idx));
    }

}


module.exports = Artist 
