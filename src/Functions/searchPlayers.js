const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

/**
 * Function used in object to get full object.
 */
async function get() {
  return await require('./getPlayer')(this.playerId)
}

/**
 * Like Player.find(), but does not automatically get a player, only retrieves a list
 * with some extra data.
 * 
 * @param {String} name 
 */
module.exports = async (name) => {
  let res = await axios.get(default_url + '/api/players/by-name/' + name)
  let players = res.data.players

  players.map((p, i) => {
    players[i].history = p.history.split(',')
    players[i].get = get
  })

  return players
}