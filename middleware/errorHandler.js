// 错误处理中间件
const errorHandler = (err, req, res, next) => {
  console.error('错误:', err);
  
  res.status(500).json({ message: '服务器内部错误' });
};

module.exports = errorHandler;