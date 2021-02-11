const Requests = require('../Classes/Requests')

/**
 * Get top ranked requests.
 */
module.exports = async () => {
  const requests = new Requests()
  try {
    return await requests.getTop()
  } catch(e) {
    throw new Error('Got an API error retrieving top requests.')
  }
}