const { formatMessage } = require('../utils/helper');

class AIService {
  constructor() {
    this.name = 'AI Service';
  }

  /**
   * @param {string} input
   * @returns {Promise<string>}
   */
  async process(input) {
    try {
      const result = `Processed: ${input}`;
      console.log(formatMessage(result));
      return result;
    } catch (error) {
      console.error('AI processing failed:', error);
      throw error;
    }
  }
}

module.exports = { AIService };
