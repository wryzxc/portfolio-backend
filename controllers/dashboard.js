const dashboardDataStore = {
  all: {
    totalSales: 1234567.89,
    salesChange: 15.2,
    orderCount: 12345,
    orderChange: 8.7,
    avgOrderValue: 99.99,
    avgOrderValueChange: 5.3,
    repurchaseRate: 32.5,
    repurchaseRateChange: 2.1,
    salesTrend: [120, 150, 180, 200, 220, 250, 280, 300, 320, 350, 380, 400],
    categoryDistribution: [
      { value: 35, name: '电子产品' },
      { value: 25, name: '服装' },
      { value: 20, name: '家居用品' },
      { value: 15, name: '食品' },
      { value: 5, name: '其他' }
    ],
    regionDistribution: [320, 280, 250, 150],
    repurchaseAnalysis: [60, 20, 10, 10]
  },
  electronics: {
    totalSales: 856432.56,
    salesChange: 22.5,
    orderCount: 8564,
    orderChange: 12.3,
    avgOrderValue: 99.99,
    avgOrderValueChange: 8.5,
    repurchaseRate: 38.2,
    repurchaseRateChange: 3.5,
    salesTrend: [100, 130, 160, 180, 200, 230, 260, 290, 310, 340, 370, 390],
    categoryDistribution: [
      { value: 45, name: '手机' },
      { value: 30, name: '电脑' },
      { value: 15, name: '平板' },
      { value: 10, name: '配件' }
    ],
    regionDistribution: [280, 220, 200, 156],
    repurchaseAnalysis: [55, 25, 12, 8]
  },
  clothing: {
    totalSales: 543210.12,
    salesChange: 8.3,
    orderCount: 9876,
    orderChange: 5.2,
    avgOrderValue: 55.00,
    avgOrderValueChange: 2.1,
    repurchaseRate: 45.6,
    repurchaseRateChange: 4.2,
    salesTrend: [80, 95, 110, 125, 140, 155, 170, 185, 200, 215, 230, 245],
    categoryDistribution: [
      { value: 40, name: '男装' },
      { value: 35, name: '女装' },
      { value: 15, name: '童装' },
      { value: 10, name: '鞋帽' }
    ],
    regionDistribution: [180, 150, 140, 73],
    repurchaseAnalysis: [45, 30, 15, 10]
  },
  home: {
    totalSales: 321098.76,
    salesChange: 12.8,
    orderCount: 6543,
    orderChange: 9.5,
    avgOrderValue: 49.05,
    avgOrderValueChange: 4.8,
    repurchaseRate: 28.9,
    repurchaseRateChange: 1.8,
    salesTrend: [60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225],
    categoryDistribution: [
      { value: 30, name: '家具' },
      { value: 25, name: '家电' },
      { value: 25, name: '厨具' },
      { value: 20, name: '装饰' }
    ],
    regionDistribution: [140, 120, 100, 61],
    repurchaseAnalysis: [65, 20, 10, 5]
  },
  food: {
    totalSales: 234567.89,
    salesChange: 5.6,
    orderCount: 15678,
    orderChange: 3.8,
    avgOrderValue: 14.96,
    avgOrderValueChange: 1.2,
    repurchaseRate: 55.3,
    repurchaseRateChange: 5.6,
    salesTrend: [50, 58, 66, 74, 82, 90, 98, 106, 114, 122, 130, 138],
    categoryDistribution: [
      { value: 35, name: '零食' },
      { value: 30, name: '饮料' },
      { value: 20, name: '生鲜' },
      { value: 15, name: '粮油' }
    ],
    regionDistribution: [100, 80, 70, 52],
    repurchaseAnalysis: [30, 35, 20, 15]
  }
};

const defaultData = dashboardDataStore.all;

const getDashboardData = async (req, res) => {
  try {
    const { category = 'all', region = 'all', startDate, endDate } = req.query;

    console.log('Dashboard API called with:', { category, region, startDate, endDate });

    // 深拷贝基础数据
    let data = JSON.parse(JSON.stringify(dashboardDataStore[category] || dashboardDataStore.all));

    // 地区筛选 - 单个地区数据应该小于全部地区
    if (region !== 'all') {
      const regionInfo = {
        east: { name: '华东', ratio: 0.32, index: 0 },   // 华东占32%
        north: { name: '华北', ratio: 0.28, index: 1 },  // 华北占28%
        south: { name: '华南', ratio: 0.25, index: 2 },  // 华南占25%
        west: { name: '西部', ratio: 0.15, index: 3 }    // 西部占15%
      };
      
      const selectedRegion = regionInfo[region];
      
      if (selectedRegion) {
        // 总销售额 = 全部销售额 × 该地区占比
        data.totalSales = Math.floor(data.totalSales * selectedRegion.ratio * 100) / 100;
        
        // 订单量 = 全部订单量 × 该地区占比
        data.orderCount = Math.floor(data.orderCount * selectedRegion.ratio);
        
        // 复购率按地区比例调整（不同地区复购率略有不同）
        const repurchaseRateAdjustment = {
          east: 1.1,   // 华东复购率较高
          north: 0.95, // 华北略低
          south: 1.05, // 华南略高
          west: 0.9    // 西部较低
        };
        const adjustment = repurchaseRateAdjustment[region] || 1;
        data.repurchaseRate = parseFloat((data.repurchaseRate * adjustment).toFixed(1));
        data.repurchaseRateChange = parseFloat((data.repurchaseRateChange * adjustment).toFixed(1));
        
        // 销售变化率稍微调整
        data.salesChange = parseFloat((data.salesChange * (0.9 + Math.random() * 0.2)).toFixed(1));
        data.orderChange = parseFloat((data.orderChange * (0.9 + Math.random() * 0.2)).toFixed(1));
        
        // 区域分布只显示该地区的数据
        data.regionDistribution = [0, 0, 0, 0];
        data.regionDistribution[selectedRegion.index] = Math.floor(
          dashboardDataStore.all.regionDistribution[selectedRegion.index] * selectedRegion.ratio * 10
        ) / 10;
        
        // 销售趋势按地区比例调整
        data.salesTrend = data.salesTrend.map((val) => {
          return Math.floor(val * selectedRegion.ratio * 10) / 10;
        });
        
        // 复购分析按地区比例调整
        if (data.repurchaseAnalysis) {
          data.repurchaseAnalysis = data.repurchaseAnalysis.map((val) => {
            return Math.floor(val * selectedRegion.ratio * 10) / 10;
          });
        }
      }
    }

    // 日期筛选 - 根据日期范围调整数据
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
      
      // 计算日期比例（相对于一年365天）
      const dateRatio = Math.min(daysDiff / 365, 1);
      
      if (dateRatio < 1 && dateRatio > 0) {
        // 总销售额按日期比例缩放
        data.totalSales = Math.floor(data.totalSales * dateRatio * 100) / 100;
        
        // 订单量按日期比例缩放
        data.orderCount = Math.floor(data.orderCount * dateRatio);
        
        // 复购率按日期比例微调
        data.repurchaseRate = parseFloat((data.repurchaseRate * (0.85 + dateRatio * 0.15)).toFixed(1));
        data.repurchaseRateChange = parseFloat((data.repurchaseRateChange * (0.85 + dateRatio * 0.15)).toFixed(1));
        
        // 销售趋势按日期比例调整
        data.salesTrend = data.salesTrend.map((val) => {
          return Math.floor(val * dateRatio * 10) / 10;
        });
        
        // 变化率按日期比例调整
        data.salesChange = parseFloat((data.salesChange * dateRatio).toFixed(1));
        data.orderChange = parseFloat((data.orderChange * dateRatio).toFixed(1));
      }
    }

    console.log('Returning data for category:', category, 'region:', region);
    console.log('Data totalSales:', data.totalSales);

    res.status(200).json({
      success: true,
      data: data
    });
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    res.status(500).json({
      success: false,
      message: '服务器内部错误'
    });
  }
};

const createDashboardData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: '数据存储功能已禁用，使用静态数据'
  });
};

const updateDashboardData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: '数据更新功能已禁用，使用静态数据'
  });
};

const deleteDashboardData = async (req, res) => {
  res.status(200).json({
    success: true,
    message: '数据删除功能已禁用，使用静态数据'
  });
};

module.exports = {
  getDashboardData,
  createDashboardData,
  updateDashboardData,
  deleteDashboardData
};
