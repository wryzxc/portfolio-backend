const { generateToken } = require('../utils/jwt');
const { verifyPassword } = require('../utils/password');

// 模拟管理员数据
const mockAdmin = {
  id: 1,
  username: 'admin',
  password: '$2a$10$zJ9u7R3x3y4z5a6b7c8d9e0f1g2h3i4j5k6l7m8n9o0p1q2r3s4t5u6v7w8x9y0z' // 模拟密码: admin123
};

// 登录
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    // 模拟查找管理员
    if (username !== mockAdmin.username) {
      return res.status(401).json({ message: '账号或密码错误' });
    }
    
    // 验证密码
    const isValid = password === 'admin123'; // 简化验证
    
    if (!isValid) {
      return res.status(401).json({ message: '账号或密码错误' });
    }
    
    // 生成令牌
    const token = generateToken({ id: mockAdmin.id, username: mockAdmin.username });
    
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: '登录失败' });
  }
};

// 初始化管理员账号
const initAdmin = async () => {
  console.log('默认管理员账号: admin / admin123');
};

module.exports = {
  login,
  initAdmin
};