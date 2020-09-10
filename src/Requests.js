const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

class Requests {
  /**
   * Empty constructor because we don't
   * need to do anything.
   */
  constructor() {}

  /**
   * Get list of top ranked requests
   */
  async getTop() {
    let res = await axios.get(default_url + '/api/ranking/requests/top')
    let data = res.data.requests

    this.top = data
  }

  /**
   * Get list of all ranked requests
   */
  async getAll() {
    let res = await axios.get(default_url + '/api/ranking/requests/belowTop')
    let data = res.data.requests

    this.all = data
  }
}

module.exports = Requests