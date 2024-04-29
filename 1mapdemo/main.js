import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import {OSM,XYZ} from 'ol/source';
import LayerSwitcher from "ol-ext/control/LayerSwitcher"
import {Group} from "ol/layer";

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
    title: "天地图",
    source: new XYZ({
        url: 'http://t4.tianditu.com/DataServer?T=vec_w&tk=0eb44999bae1b0225fd3bb86706b9c44&x={x}&y={y}&l={z}'

    })
});
const tiandituCva = new TileLayer({
    title: "天地图标注",
    source: new XYZ({
        url: 'http://t4.tianditu.com/DataServer?T=cva_w&tk=0eb44999bae1b0225fd3bb86706b9c44&x={x}&y={y}&l={z}'

    })
});
const tiandituImgC = new TileLayer({
    title: "天地图标注",
    source: new XYZ({
        url: 'http://t4.tianditu.com/DataServer?T=img_w&tk=0eb44999bae1b0225fd3bb86706b9c44&x={x}&y={y}&l={z}'

    })
});
const tiandituCiaC = new TileLayer({
    title: "天地图标注",
    source: new XYZ({
        url: 'http://t4.tianditu.com/DataServer?T=cia_w&tk=0eb44999bae1b0225fd3bb86706b9c44&x={x}&y={y}&l={z}'

    })
});
var tiandituMapGroup = new Group({
    title:'天地图',
    layers: [tiandituVec,tiandituCva,tiandituImgC,tiandituCiaC]
});

map.addLayer(openStreetMapLayer)
map.addLayer(tiandituMapGroup)
map.addLayer(googleMapGroup)
