const Player = require('../Classes/Player')

module.exports = async (id) => {
  const player = new Player(id)
  try {
    return await player.get()
  } catch(e) {
    throw new Error('Could not find player. The ID was invalid, or the player does not exist.')
  }
}