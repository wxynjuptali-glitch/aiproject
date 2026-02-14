// 引入AI服务
const { AIService } = require('../../src/services/aiService');

// AI服务测试套件
describe('AIService', () => {
  let aiService;

  // 每个测试前创建新的服务实例
  beforeEach(() => {
    aiService = new AIService();
  });

  // 测试：正确处理输入
  test('should process input correctly', async () => {
    const input = 'test input';
    const result = await aiService.process(input);
    expect(result).toBe(`Processed: ${input}`);
  });

  // 测试：处理空输入
  test('should handle empty input', async () => {
    const result = await aiService.process('');
    expect(result).toBe('Processed: ');
  });
});
