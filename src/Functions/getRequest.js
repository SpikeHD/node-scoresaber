const Request = require('../Classes/Request')

/**
 * Get request via ID.
 * 
 * @param {String|Number} id 
 */
module.exports = async (id) => {
  const request = new Request(id)
  try {
    return await request.get()
  } catch(e) {
    throw new Error('Could not find request. The ID was invalid, or the request does not exist.')
  }
}