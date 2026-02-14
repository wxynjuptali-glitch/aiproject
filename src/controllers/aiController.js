// 引入AI服务
const { AIService } = require('../services/aiService');

// 创建AI服务实例
const aiService = new AIService();

/**
 * 处理请求的控制器函数
 * @param {object} req - 请求对象
 * @param {object} res - 响应对象
 */
const handleRequest = async (req, res) => {
  try {
    // 从请求体中获取输入数据
    const { input } = req.body;
    // 调用AI服务处理数据
    const result = await aiService.process(input);
    // 返回成功响应
    res.json({ success: true, data: result });
  } catch (error) {
    // 返回错误响应
    res.status(500).json({ success: false, error: error.message });
  }
};

module.exports = { handleRequest };
