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

const PORT = process.env.PORT || 8000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});