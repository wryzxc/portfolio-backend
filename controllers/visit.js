// 模拟访问数据
let mockStats = [
  { date: '2024-07-01', visits: 100, ip: '127.0.0.1', page: '/' },
  { date: '2024-07-02', visits: 150, ip: '127.0.0.1', page: '/projects' },
  { date: '2024-07-03', visits: 120, ip: '127.0.0.1', page: '/skills' }
];
let totalVisits = 370;

// 记录访问
const recordVisit = async (req, res) => {
  try {
    const { ip, page } = req.body;
    const today = new Date().toISOString().split('T')[0];
    
    // 查找今天的访问记录
    const index = mockStats.findIndex(stat => stat.date === today && stat.ip === ip && stat.page === page);
    
    if (index !== -1) {
      // 更新访问量
      mockStats[index].visits += 1;
    } else {
      // 创建新记录
      mockStats.push({
        date: today,
        visits: 1,
        ip,
        page
      });
    }
    
    totalVisits += 1;
    res.json({ message: '访问记录成功' });
  } catch (error) {
    res.status(500).json({ message: '记录访问失败' });
  }
};

// 获取访问统计
const getStats = async (req, res) => {
  try {
    res.json(mockStats);
  } catch (error) {
    res.status(500).json({ message: '获取访问统计失败' });
  }
};

// 获取总访问量
const getTotalVisits = async (req, res) => {
  try {
    res.json({ count: totalVisits });
  } catch (error) {
    res.status(500).json({ message: '获取总访问量失败' });
  }
};

module.exports = {
  recordVisit,
  getStats,
  getTotalVisits
};