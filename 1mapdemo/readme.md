# 项目简介

使用 OpenLayers 加载多源地图瓦片的示例项目，所有地图资源均无偏移加载。

## 已支持的地图

- **OpenStreetMap** - 开源街道地图
- **谷歌地图** - 路线图、地形图、卫星图及标注
- **天地图** - 矢量地形图、卫星影像及标注
- **高德地图** - 卫星影像、地形图及标注
- **百度地图** - 电子图、卫星图（BD-09 坐标系，可能存在偏移）
- **Bing 地图** - 路线图、卫星图及标注（需配置 `VITE_BING_MAPS_KEY`）

## 环境配置

复制 `.env.example` 为 `.env`，按需配置：

- `VITE_TIANDITU_KEY` - 天地图 API Key（[获取](https://console.tianditu.gov.cn/)）
- `VITE_BING_MAPS_KEY` - Bing Maps API Key（[获取](https://www.bingmapsportal.com/)）

## 运行方式

```shell
npm install
npm start
```