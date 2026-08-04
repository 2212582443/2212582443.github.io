# 姚宣骋技术作品集

面向国内 2027 届秋招的中文个人主页，重点展示多模态大模型、Agentic RL、模型评测和可信医疗 AI 经历。

## 本地运行

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
```

## 部署

仓库推送到 `main` 后，由 GitHub Actions 自动构建并部署至 GitHub Pages：

`https://2212582443.github.io`

腾讯云 EdgeOne Makers 生产项目：`xuancheng-ai-portfolio`。本地生产构建通过后可更新已绑定项目：

```bash
edgeone makers deploy ./dist -n xuancheng-ai-portfolio -e production
```

已关联到生产环境的自定义域名会自动指向最新成功部署。
