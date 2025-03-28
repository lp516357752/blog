# 个人博客系统

这是一个基于 Monorepo 架构的个人博客系统，使用 pnpm workspace 管理多个应用和包。

## 项目结构

```bash
.
├── apps/
│ ├── blog/ # Hexo 博客
│ └── web/ # Web 前端
└── packages/
└── ├── ui/ # 共享组件
```

## 技术栈

- Hexo 7.0
- 主题：Stellar
- 包管理：pnpm
- Node.js >= 16

## 开始使用

```bash
pnpm install
```

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装

## 快速开始

1. 安装依赖

```bash
pnpm install
```

2. 开发博客

```bash
pnpm run blog:dev
```

3. 开发 Web 前端

```bash
pnpm run web:dev
```

4. 开发后端

```bash
pnpm run server:dev
```

## 部署
