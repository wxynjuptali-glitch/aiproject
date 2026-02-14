// 引入工具函数
const { formatMessage } = require('../utils/helper');

// AI服务类
class AIService {
  constructor() {
    this.name = 'AI Service';
  }

  /**
   * 处理输入数据
   * @param {string} input - 输入数据
   * @returns {Promise<string>} - 处理后的结果
   */
  async process(input) {
    try {
      // 格式化结果
      const result = `Processed: ${input}`;
      // 输出日志
      console.log(formatMessage(result));
      // 返回结果
      return result;
    } catch (error) {
      // 错误处理
      console.error('AI processing failed:', error);
      throw error;
    }
  }
}

module.exports = { AIService };
