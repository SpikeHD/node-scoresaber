const axios = require('axios')
const Request = require('./Request')
const default_url = 'https://new.scoresaber.com'

class Requests {
  constructor() {}

  async get() {
    let res = await axios.get(default_url + '/api/ranking/requests/top')
    let data = res.data.requests

    this.top = data
  }
}

module.exports = Requests