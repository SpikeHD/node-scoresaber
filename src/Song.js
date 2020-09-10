const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

/**
 * So far, Scoresaber does not have song support
 * in their new site, which means no API support
 * yet either. This is basically just here as a 
 * skeleton class for now.
 */
class Song {
  constructor(id) {
    if(!id) throw Error('No ID provided in Song() constructor')

    this.id = id
  }
}

module.exports = Song