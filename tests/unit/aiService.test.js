const { AIService } = require('../../src/services/aiService');

describe('AIService', () => {
  let aiService;

  beforeEach(() => {
    aiService = new AIService();
  });

  test('should process input correctly', async () => {
    const input = 'test input';
    const result = await aiService.process(input);
    expect(result).toBe(`Processed: ${input}`);
  });

  test('should handle empty input', async () => {
    const result = await aiService.process('');
    expect(result).toBe('Processed: ');
  });
});
