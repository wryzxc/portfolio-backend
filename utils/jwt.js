const jwt = require('jsonwebtoken');

// 密钥
const secretKey = 'your-secret-key';

// 生成JWT令牌
const generateToken = (payload) => {
  return jwt.sign(payload, secretKey, { expiresIn: '24h' });
};

// 验证JWT令牌
const verifyToken = (token) => {
  try {
    return jwt.verify(token, secretKey);
  } catch (error) {
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken
};