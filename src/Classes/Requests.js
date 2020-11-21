const axios = require('axios')
const Base = require('./Base')

/**
 * Function used in object to get full object.
 */
async function get() {
  return await require('../Functions/getRequest')(this.request)
}

class Requests extends Base {
  /**
   * Get list of top ranked requests
   */
  async getTop() {
    let res = await axios.get(this.default_url + '/api/ranking/requests/top')
    let data = res.data.requests

    data.map((r, i) => {
      data[i].get = get
    })

    this.top = data

    return this.top
  }

  /**
   * Get list of all ranked requests
   */
  async getAll() {
    let res = await axios.get(this.default_url + '/api/ranking/requests/belowTop')
    let data = res.data.requests

    data.map((r, i) => {
      data[i].get = get
    })

    this.all = data

    return this.all
  }
}

module.exports = Requests