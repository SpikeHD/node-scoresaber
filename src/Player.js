const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

class Player {
  constructor(id) {
    if(!id) throw Error('No ID provided in Player() constructor')
    this.id = id
  }

  /**
   * Get player data and score data
   */
  async get() {
    let res = await axios.get(default_url + '/api/player/' + this.id + '/full')
    let data = res.data.playerInfo

    this.name = data.playerName
    this.avatar_url = default_url + data.avatar
    this.rank = data.rank
    this.countryRank = data.countryRank
    this.country = data.country
    this.pp = data.pp
    this.role = data.role
    this.badges = data.badges
    this.isBanned = data.banned === 1
    this.isInactive = data.inactive === 1
    this.totalScore = res.data.scoreStats.totalScore
    this.totalRankedScore = res.data.scoreStats.totalRankedScore
    this.averageRankedAccuracy = res.data.scoreStats.averageRankedAccuracy
    this.playCount = res.data.scoreStats.totalPlayCount
    this.rankedPlayCount = res.data.scoreStats.rankedPlayCount
  }

  /**
   * Get scores of player based on page number
   * 
   * @param {Number} num 
   */
  async getScores(num = 1) {
    let res = await axios.get(default_url + '/api/player/' + this.id + '/scores/top/' + num)
    let data = res.data

    return data.scores
  }
}

module.exports = Player