// 模拟个人信息数据
let mockUserInfo = {
  id: 1,
  name: '张三',
  major: '商务数据分析与应用',
  school: '广东科学技术职业学院',
  email: 'zhangsan@example.com',
  phone: '13800138000',
  bio: '我是一名商务数据分析与应用专业的应届毕业生，具备扎实的数据分析能力和全栈开发基础，擅长使用Python、SQL和数据可视化工具解决业务问题。',
  createdAt: new Date(),
  updatedAt: new Date()
};

// 获取个人信息
const getInfo = async (req, res) => {
  try {
    res.json(mockUserInfo);
  } catch (error) {
    res.status(500).json({ message: '获取个人信息失败' });
  }
};

// 更新个人信息
const updateInfo = async (req, res) => {
  try {
    const { name, major, school, email, phone, bio } = req.body;
    
    // 更新信息
    mockUserInfo = {
      ...mockUserInfo,
      name,
      major,
      school,
      email,
      phone,
      bio,
      updatedAt: new Date()
    };
    
    res.json(mockUserInfo);
  } catch (error) {
    res.status(500).json({ message: '更新个人信息失败' });
  }
};

module.exports = {
  getInfo,
  updateInfo
};