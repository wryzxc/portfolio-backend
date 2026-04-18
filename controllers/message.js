// 模拟留言数据
let mockMessages = [
  {
    id: 1,
    name: '招聘经理',
    email: 'hr@example.com',
    company: '科技公司',
    content: '你的作品集很专业，我们正在招聘数据分析岗位，希望能进一步了解你。',
    status: 'approved',
    createdAt: new Date('2024-07-01'),
    updatedAt: new Date('2024-07-01')
  },
  {
    id: 2,
    name: 'HR',
    email: 'hr@company.com',
    company: '电商公司',
    content: '我们需要数据分析人才，你的技能很符合我们的要求。',
    status: 'approved',
    createdAt: new Date('2024-07-02'),
    updatedAt: new Date('2024-07-02')
  }
];

// 获取留言列表
const getMessages = async (req, res) => {
  try {
    res.json(mockMessages);
  } catch (error) {
    res.status(500).json({ message: '获取留言列表失败' });
  }
};

// 获取审核通过的留言
const getApprovedMessages = async (req, res) => {
  try {
    const messages = mockMessages.filter(message => message.status === 'approved');
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: '获取留言列表失败' });
  }
};

// 提交留言
const submitMessage = async (req, res) => {
  try {
    const { name, email, company, content } = req.body;
    const newMessage = {
      id: mockMessages.length + 1,
      name,
      email,
      company,
      content,
      status: 'pending',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    mockMessages.push(newMessage);
    res.json(newMessage);
  } catch (error) {
    res.status(500).json({ message: '提交留言失败' });
  }
};

// 更新留言状态
const updateMessageStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const index = mockMessages.findIndex(m => m.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: '留言不存在' });
    }
    mockMessages[index] = {
      ...mockMessages[index],
      status,
      updatedAt: new Date()
    };
    res.json(mockMessages[index]);
  } catch (error) {
    res.status(500).json({ message: '更新留言状态失败' });
  }
};

// 删除留言
const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const index = mockMessages.findIndex(m => m.id === parseInt(id));
    if (index === -1) {
      return res.status(404).json({ message: '留言不存在' });
    }
    mockMessages.splice(index, 1);
    res.json({ message: '留言删除成功' });
  } catch (error) {
    res.status(500).json({ message: '删除留言失败' });
  }
};

module.exports = {
  getMessages,
  getApprovedMessages,
  submitMessage,
  updateMessageStatus,
  deleteMessage
};