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

// 兼容多种部署环境
const startServer = async () => {
  try {
    // Railway/Render 等平台使用 process.env.PORT
    // Vercel serverless 不需要 listen
    if (!process.env.VERCEL) {
      const port = process.env.PORT || 8000;
      app.listen(port, '0.0.0.0', () => {
        console.log(`服务器运行在 http://0.0.0.0:${port}`);
      });
    }
  } catch (error) {
    console.error('启动服务器失败:', error);
  }
};

startServer();

module.exports = app;