//model imports data to handle logic in regards to requests made from the controller
const artists = require("../artists");

class Artist {
  constructor(artist, id) {
    (this.id = id + 1),
      (this.type = artist.type),
      (this.name = artist.name),
      (this.genre = artist.genre),
      (this.followers = artist.followers);
  }

  static showArtists() {
    return artists.map((artist, idx) => new Artist(artist, idx));
  }

  static showById(idx) {
    if (artists.length > idx > 0) {
      return new Artist(artists[idx], idx);
    } else {
      throw "Artist not found";
    }
  }

  static showRandom() {
    const randIdx = Math.floor(Math.random() * artists.length);
    return new Artist(artists[randIdx], randIdx);
  }
}

module.exports = Artist;
