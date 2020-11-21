const Requests = require('../Classes/Requests')

/**
 * Get all requests.
 */
module.exports = async () => {
  const requests = new Requests()
  try {
    return await requests.getAll()
  } catch(e) {
    throw new Error('Got an API error retrieving top requests.')
  }
}