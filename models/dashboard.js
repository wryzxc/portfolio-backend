const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Dashboard = sequelize.define('Dashboard', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  totalSales: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false
  },
  salesChange: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  orderCount: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  orderChange: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  avgOrderValue: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  avgOrderValueChange: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  repurchaseRate: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  repurchaseRateChange: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false
  },
  salesTrend: {
    type: DataTypes.JSON,
    allowNull: false
  },
  categoryDistribution: {
    type: DataTypes.JSON,
    allowNull: false
  },
  regionDistribution: {
    type: DataTypes.JSON,
    allowNull: false
  },
  repurchaseAnalysis: {
    type: DataTypes.JSON,
    allowNull: false
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false, 
    defaultValue: 'all'
  },
  region: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'all'
  }
}, {
  tableName: 'dashboard_data',
  timestamps: true
});

module.exports = Dashboard;