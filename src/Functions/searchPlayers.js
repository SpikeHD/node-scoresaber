const default_url = 'https://new.scoresaber.com'
const Base = require('../Classes/Base')
const client = new Base().client

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
  let res = await client.get(default_url + '/api/players/by-name/' + name)
  let players = JSON.parse(res.body).players

  players.map((p, i) => {
    players[i].history = p.history.split(',')
    players[i].get = get
  })

  return players
}