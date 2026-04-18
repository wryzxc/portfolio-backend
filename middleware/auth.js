const { verifyToken } = require('../utils/jwt');

// 鉴权中间件
const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ message: '未提供令牌' });
  }
  
  const decoded = verifyToken(token);
  
  if (!decoded) {
    return res.status(401).json({ message: '无效的令牌' });
  }
  
  req.user = decoded;
  next();
};

module.exports = authMiddleware;