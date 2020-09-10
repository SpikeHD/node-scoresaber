const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

class Request {
  /**
   * Assigns ID
   * 
   * @param {Number|String} id 
   */
  constructor(id) {
    if(!id) throw Error('No ID provided in Request() constructor')
    this.request = id
  }

  /**
   * Use ID to get song request data
   */
  async get() {
    let res = await axios.get(default_url + '/api/ranking/request/' + this.request)
    let data = res.data.request
    let info = data.info

    this.songId = info.songId
    this.requestType = info.requestType
    this.description = info.description
    this.approved = info.approved === 0
    this.id = info.id
    this.name = info.name
    this.author = info.levelAuthorName
    this.difficulty = info.difficulty
    this.rankUpvotes = info.rankVotes.upvotes
    this.rankDownvotes = info.rankVotes.downvotes
    this.qatUpvotes = info.qatVotes.upvotes
    this.qatDownvotes = info.qatVotes.downvotes
    this.rankComments = info.rankComments
    this.qatComments = info.qatComments
    this.difficulties = data.difficulties
  }
}

module.exports = Request