const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

// 访问统计模型
const VisitStat = sequelize.define('VisitStat', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  visits: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  ip: {
    type: DataTypes.STRING
  },
  page: {
    type: DataTypes.STRING
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'visit_stats',
  timestamps: false
});

module.exports = VisitStat;