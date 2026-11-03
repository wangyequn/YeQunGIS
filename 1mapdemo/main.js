import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM, XYZ, BingMaps} from 'ol/source';
import LayerSwitcher from "ol-ext/control/LayerSwitcher"
import {Group} from "ol/layer";
import gcjMercator from './gcj02Project'

// 天地图 API Key，可通过 .env 文件配置 VITE_TIANDITU_KEY
const TIANDITU_KEY = import.meta.env.VITE_TIANDITU_KEY || '0eb44999bae1b0225fd3bb86706b9c44';
const BING_KEY = import.meta.env.VITE_BING_MAPS_KEY || '';

const map = new Map({
    target: 'map',
    layers: [],
    view: new View({
        center: [120, 36],
        zoom: 10,
        projection:'EPSG:4326'
    })
});



const switcher = new LayerSwitcher;
map.addControl(switcher)
const openStreetMapLayer = new TileLayer({
    title: "openStreetMap",
    source: new OSM()
})
const googleMapLayerM = new TileLayer({
    title: "google路线图",
    source: new XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=m@189&x={x}&y={y}&z={z}'
    })
});
const googleMapLayerT = new TileLayer({
    title: "google地形图",
    source: new XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=t@189&x={x}&y={y}&z={z}'
    })
});
const googleMapLayerP = new TileLayer({
    title: "google带标签的地形图",
    source: new XYZ({
        projection:"GCJ-02",
        url: 'http://www.google.cn/maps/vt?lyrs=p@189&x={x}&y={y}&z={z}'
    })
});
const googleMapLayerS = new TileLayer({
    title: "google卫星图",
    source: new XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=s@189&x={x}&y={y}&z={z}'
    })
});
const googleMapLayerY = new TileLayer({
    title: "google带标签的卫星图",
    source: new XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=y@189&x={x}&y={y}&z={z}'
    })
});
const googleMapLayerH = new TileLayer({
    title: "google标签",
    source: new XYZ({
        url: 'http://www.google.cn/maps/vt?lyrs=h@189&x={x}&y={y}&z={z}'
    })
});
var googleMapGroup = new Group({
    title:'谷歌地图',
    layers: [googleMapLayerM, googleMapLayerT,googleMapLayerP,googleMapLayerS,googleMapLayerY,googleMapLayerH]
});


const tiandituVec = new TileLayer({
    title: "天地图地形图",
    source: new XYZ({
        url: `https://t4.tianditu.com/DataServer?T=vec_w&tk=${TIANDITU_KEY}&x={x}&y={y}&l={z}`
    })
});
const tiandituCva = new TileLayer({
    title: "天地图地形图标注",
    source: new XYZ({
        url: `https://t4.tianditu.com/DataServer?T=cva_w&tk=${TIANDITU_KEY}&x={x}&y={y}&l={z}`
    })
});
const tiandituImgC = new TileLayer({
    title: "天地图卫星图",
    source: new XYZ({
        url: `https://t4.tianditu.com/DataServer?T=img_w&tk=${TIANDITU_KEY}&x={x}&y={y}&l={z}`
    })
});
const tiandituCiaC = new TileLayer({
    title: "天地图卫星图标注",
    source: new XYZ({
        url: `https://t4.tianditu.com/DataServer?T=cia_w&tk=${TIANDITU_KEY}&x={x}&y={y}&l={z}`
    })
});
const tiandituMapGroup = new Group({
    title:'天地图',
    layers: [tiandituVec,tiandituCva,tiandituImgC,tiandituCiaC]
});
const gaodeMap6 = new TileLayer({
    title: '高德卫星影像',
    source:new XYZ({
        projection:"GCJ-02",
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=6&x={x}&y={y}&z={z}'
    })
})
const gaodeMap7 = new TileLayer({
    title: '高德地形图',
    source:new XYZ({
        projection:"GCJ-02",
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}'
    })
})
const gaodeMap8 = new TileLayer({
    title: '高德卫星影像标注',
    source:new XYZ({
        projection:"GCJ-02",
        url: 'http://wprd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=8&x={x}&y={y}&z={z}'
    })
})
const gaodeMapGroup = new Group({
    title:'高德地图',
    layers: [gaodeMap6,gaodeMap8,gaodeMap7]
});

// 百度地图（使用 BD-09 坐标系，可能与 WGS84 存在偏移）
const baiduVec = new TileLayer({
    title: "百度电子图",
    source: new XYZ({
        url: 'https://maponline0.bdimg.com/tile/?qt=tile&x={x}&y={y}&z={z}&styles=pl'
    })
});
const baiduSat = new TileLayer({
    title: "百度卫星图",
    source: new XYZ({
        url: 'https://maponline0.bdimg.com/starpic/u=x={x};y={y};z={z};v=009;type=sate&qt=satepc&fm=46&app=webearth2&v=009'
    })
});
const baiduMapGroup = new Group({
    title: '百度地图',
    layers: [baiduVec, baiduSat]
});

// Bing 地图（需要配置 VITE_BING_MAPS_KEY）
let bingMapGroup = null;
if (BING_KEY) {
    const bingRoad = new TileLayer({
        title: "Bing 路线图",
        source: new BingMaps({ key: BING_KEY, imagerySet: 'Road' })
    });
    const bingAerial = new TileLayer({
        title: "Bing 卫星图",
        source: new BingMaps({ key: BING_KEY, imagerySet: 'Aerial' })
    });
    const bingAerialLabels = new TileLayer({
        title: "Bing 卫星图标注",
        source: new BingMaps({ key: BING_KEY, imagerySet: 'AerialWithLabels' })
    });
    bingMapGroup = new Group({
        title: 'Bing 地图',
        layers: [bingRoad, bingAerial, bingAerialLabels]
    });
}

map.addLayer(openStreetMapLayer)
map.addLayer(tiandituMapGroup)
map.addLayer(googleMapGroup)
map.addLayer(gaodeMapGroup)
map.addLayer(baiduMapGroup)
if (bingMapGroup) map.addLayer(bingMapGroup)

