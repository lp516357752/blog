export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
}

export interface User {
  id: string;
  username: string;
  email: string;
}

// 可以导出更多共享类型和工具函数 