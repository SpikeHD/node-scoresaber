const axios = require('axios')
const Base = require('./Base')

/**
 * So far, Scoresaber does not have song support
 * in their new site, which means no API support
 * yet either. This is basically just here as a 
 * skeleton class for now.
 */
class Song extends Base {
  constructor(id) {
    super()

    if(!id) throw Error('No ID provided in Song() constructor')

    this.id = id
  }
}

module.exports = Song