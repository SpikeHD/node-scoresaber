const got = require('got')
const client = got.extend({
  // Might want this in the future don't judge me for having it empty rn
  headers: {}
})

class Base {
  /**
   * Set defualt url, used for all API requests
   * 
   * I'm sure I can do more with this at some point
   */
  constructor() {
    this.default_url = 'https://new.scoresaber.com'
    this.client = client
  }
}

module.exports = Base