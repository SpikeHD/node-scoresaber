const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

class Song {
  constructor(id) {
    if(!id) throw Error('No ID provided in Song() constructor')

    this.id = id
  }
}

module.exports = Song