const express = require('express');
const helmet = require('helmet');
const corsMiddleware = require('./middleware/cors');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth');
const userInfoRoutes = require('./routes/userInfo');
const projectRoutes = require('./routes/project');
const messageRoutes = require('./routes/message');
const visitRoutes = require('./routes/visit');
const dashboardRoutes = require('./routes/dashboard');

const app = express();
const port = 8000;

app.use(helmet());
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

// Vercel 部署时不需要 listen，直接导出 app
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () => {
    console.log(`服务器运行在 http://localhost:${port}`);
  });
}

module.exports = app;