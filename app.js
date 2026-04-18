const express = require('express');
const cors = require('cors');  // 直接用标准 cors，不用你自己的文件
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const userInfoRoutes = require('./routes/userInfo');
const projectRoutes = require('./routes/project');
const messageRoutes = require('./routes/message');
const visitRoutes = require('./routes/visit');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

// 🔥 修复跨域（你自己的 cors 中间件可能有问题，直接用官方的）
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/userInfo', userInfoRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/visit', visitRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use(errorHandler);

// 🔥 修复端口：Railway 必须用这个写法
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on port ${PORT}`);
});