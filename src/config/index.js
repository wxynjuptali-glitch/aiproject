// 应用配置文件
// 导出应用配置对象
module.exports = {
  app: {
    // 服务器端口，从环境变量读取，默认3000
    port: process.env.PORT || 3000,
    // 运行环境，从环境变量读取，默认development
    env: process.env.NODE_ENV || 'development',
  },
};
