const express = require('express');
const corsMiddleware = require('./middleware/cors');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const userInfoRoutes = require('./routes/userInfo');
const projectRoutes = require('./routes/project');
const messageRoutes = require('./routes/message');
const visitRoutes = require('./routes/visit');
const dashboardRoutes = require('./routes/dashboard');

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/auth', authRoutes);
app.use('/api/userInfo', userInfoRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/visit', visitRoutes);
app.use('/api/dashboard', dashboardRoutes);

app.use(errorHandler);

// 健康检查端点
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// 关键：必须使用 process.env.PORT 让 Railway 动态分配端口
const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`App listening on dynamic port: ${PORT}`);
});