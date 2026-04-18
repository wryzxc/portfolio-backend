// 模拟项目数据
const projectCovers = [
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%234facfe"/><stop offset="100%" style="stop-color:%2300f2fe"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g1)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">电商销售数据分析</text></svg>',
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23a18cd1"/><stop offset="100%" style="stop-color:%23fbc2eb"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g2)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">用户行为分析</text></svg>',
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%2343e97b"/><stop offset="100%" style="stop-color:%2338f9d7"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g3)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">市场调研报告</text></svg>',
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23fa709a"/><stop offset="100%" style="stop-color:%23fee140"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g4)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">业务复盘分析</text></svg>',
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23a8edea"/><stop offset="100%" style="stop-color:%23fed6e3"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g5)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">销售预测模型</text></svg>',
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="450"><defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23d299c2"/><stop offset="100%" style="stop-color:%23fef9d7"/></linearGradient></defs><rect width="800" height="450" fill="url(%23g6)"/><text x="400" y="220" font-family="sans-serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">用户分群分析</text></svg>'
];

let mockProjects = [
  {
    id: 1,
    name: '电商销售数据分析',
    period: '2024.01-2024.02',
    tech: 'Python, Pandas, Power BI',
    result: '识别销售趋势，提高销售额10%',
    category: '电商数据分析',
    description: '分析电商平台销售数据，识别销售趋势和热点商品，为运营决策提供数据支持。',
    cover: projectCovers[0],
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01')
  },
  {
    id: 2,
    name: '用户行为分析',
    period: '2024.03-2024.04',
    tech: 'SQL, Tableau',
    result: '构建用户画像，提高留存率15%',
    category: '用户运营分析',
    description: '分析用户行为数据，构建用户画像，优化运营策略，提升用户留存。',
    cover: projectCovers[1],
    createdAt: new Date('2024-04-01'),
    updatedAt: new Date('2024-04-01')
  },
  {
    id: 3,
    name: '市场调研报告',
    period: '2024.05-2024.06',
    tech: 'Excel, SPSS',
    result: '提供市场进入策略建议',
    category: '市场调研分析',
    description: '针对某行业进行市场调研，分析市场趋势和竞争格局，提供市场进入策略建议。',
    cover: projectCovers[2],
    createdAt: new Date('2024-06-01'),
    updatedAt: new Date('2024-06-01')
  },
  {
    id: 4,
    name: '业务复盘分析',
    period: '2024.07-2024.08',
    tech: 'Power BI, Python',
    result: '优化业务流程，降低成本8%',
    category: '业务复盘分析',
    description: '对公司业务进行全面复盘分析，识别问题和优化机会，提出改进建议。',
    cover: projectCovers[3],
    createdAt: new Date('2024-08-01'),
    updatedAt: new Date('2024-08-01')
  },
  {
    id: 5,
    name: '销售预测模型',
    period: '2024.09-2024.10',
    tech: 'Python, Scikit-learn',
    result: '预测准确率达到95%',
    category: '电商数据分析',
    description: '构建销售预测模型，基于历史数据预测未来销售趋势，为库存管理提供决策支持。',
    cover: projectCovers[4],
    createdAt: new Date('2024-10-01'),
    updatedAt: new Date('2024-10-01')
  },
  {
    id: 6,
    name: '用户分群分析',
    period: '2024.11-2024.12',
    tech: 'Python, K-Means, Tableau',
    result: '实现精准营销，转化率提升20%',
    category: '用户运营分析',
    description: '基于用户行为特征进行聚类分群，识别不同用户群体需求，制定差异化营销策略。',
    cover: projectCovers[5],
    createdAt: new Date('2024-12-01'),
    updatedAt: new Date('2024-12-01')
  }
];

// 获取项目列表
const getProjects = async (req, res) => {
  try {
    res.json(mockProjects);
  } catch (error) {
    res.status(500).json({ message: '获取项目列表失败' });
  }
};

// 获取项目详情
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = mockProjects.find(p => p.id === parseInt(id));
    if (!project) {
      return res.status(404).json({ message: '项目不存在' });
    }
    res.json(project);
  } catch (error) {
    res.status(500).json({ message: '获取项目详情失败' });
  }
};

// 创建项目
const createProject = async (req, res) => {
  try {
    const { name, period, tech, result, category, description, cover } = req.body;
    const newProject = {
      id: mockProjects.length + 1,
      name,
      period,
      tech,
      result,
      category,
      description,
      cover,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockProjects.push(newProject);
    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: '创建项目失败' });
  }
};

// 更新项目
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, period, tech, result, category, description, cover } = req.body;
    const index = mockProjects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: '项目不存在' });
    }
    mockProjects[index] = {
      ...mockProjects[index],
      name,
      period,
      tech,
      result,
      category,
      description,
      cover,
      updatedAt: new Date()
    };
    res.json(mockProjects[index]);
  } catch (error) {
    res.status(500).json({ message: '更新项目失败' });
  }
};

// 删除项目
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const index = mockProjects.findIndex(p => p.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: '项目不存在' });
    }
    mockProjects.splice(index, 1);
    res.json({ message: '项目删除成功' });
  } catch (error) {
    res.status(500).json({ message: '删除项目失败' });
  }
};

module.exports = {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject
};