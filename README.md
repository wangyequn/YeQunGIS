# YeQunGIS

基于 OpenLayers 的多源地图瓦片展示项目，支持多种国内外地图服务，所有地图资源均无偏移加载。

## 功能特性

- **OpenStreetMap** - 开源街道地图
- **谷歌地图** - 路线图、地形图、卫星图及标注
- **天地图** - 矢量地形图、卫星影像及标注
- **高德地图** - 卫星影像、地形图及标注
- **百度地图** - 电子图、卫星图
- **Bing 地图** - 路线图、卫星图及标注（需配置 API Key）

## 快速开始

### 安装

```bash
cd 1mapdemo
npm install
```

### 配置（可选）

复制环境变量示例文件并填入你的 API Key：

```bash
cp .env.example .env
```

| 变量 | 说明 | 获取地址 |
|------|------|----------|
| `VITE_TIANDITU_KEY` | 天地图 API Key | [天地图开放平台](https://console.tianditu.gov.cn/) |
| `VITE_BING_MAPS_KEY` | Bing Maps API Key | [Bing Maps 门户](https://www.bingmapsportal.com/) |

> 天地图提供默认演示 Key，未配置时仍可正常使用。Bing 地图需配置 Key 后才会显示。

### 运行

```bash
npm start
```

开发服务器启动后，在浏览器访问 `http://localhost:5173`。

### 构建

```bash
npm run build
```

构建产物输出到 `dist/` 目录。

### 预览构建结果

```bash
npm run serve
```

## 项目结构

```
├── 1mapdemo/           # 主应用
│   ├── main.js         # 地图初始化与图层配置
│   ├── gcj02Project.js # GCJ-02 坐标系投影（高德、谷歌中国）
│   ├── style.css       # 样式
│   └── index.html      # 入口页面
├── README.md           # 本文件
└── README.en.md        # 英文说明
```

## 技术栈

- [OpenLayers](https://openlayers.org/) - 地图渲染
- [ol-ext](https://viglino.github.io/ol-ext/) - 图层切换等扩展控件
- [Vite](https://vitejs.dev/) - 构建工具

## 参与贡献

1. Fork 本仓库
2. 新建功能分支 (`git checkout -b feat/xxx`)
3. 提交更改 (`git commit -m 'feat: 添加 xxx 功能'`)
4. 推送到分支 (`git push origin feat/xxx`)
5. 新建 Pull Request

## 许可证

请参阅项目根目录下的 LICENSE 文件。
