/**
 * 格式化消息函数
 * @param {string} message - 要格式化的消息
 * @returns {string} - 格式化后的消息，包含时间戳
 */
const formatMessage = (message) => {
  return `[${new Date().toISOString()}] ${message}`;
};

module.exports = { formatMessage };
