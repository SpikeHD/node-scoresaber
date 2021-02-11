const Player = require('../Classes/Player')
const axios = require('axios')
const default_url = "https://new.scoresaber.com";
/**
 * Get player via Rank.
 * 
 * @param {Number} id 
 */
module.exports = async (rank) => {
    let res = await axios.get(default_url + '/api/players/' + Math.ceil(rank/50))
    let player = res.data.players.filter(x => x.rank==rank)[0];
    
    
    player.history = player.history.split(',');
    player.get = get;
  
    return player
}


async function get() {
    return (this)
}