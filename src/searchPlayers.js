const axios = require('axios')
const default_url = 'https://new.scoresaber.com'

/**
 * Like Player.find(), but does not automatically get a player, only retrieves a list
 * with some extra data.
 * 
 * @param {String} name 
 */
module.exports = async (name) => {
  let res = await axios.get(default_url + '/api/players/by-name/' + name)
  let players = res.data.players

  return players
}