/**
 * @param {string} message
 * @returns {string}
 */
const formatMessage = (message) => {
  return `[${new Date().toISOString()}] ${message}`;
};

module.exports = { formatMessage };
