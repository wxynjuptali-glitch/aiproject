const { AIService } = require('../services/aiService');

const aiService = new AIService();

/**
 * @param {object} req
 * @param {object} res
 */
const handleRequest = async (req, res) => {
  try {
    const { input } = req.body;
    const result = await aiService.process(input);
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { handleRequest };
