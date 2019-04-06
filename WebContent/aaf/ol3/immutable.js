/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// initialize custom package
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var aafactory = aafactory || {};
aafactory.ol3 = aafactory.ol3 || {};
aafactory.ol3.control = aafactory.ol3.control || {};
aafactory.ol3.immutable = aafactory.ol3.immutable || {};
aafactory.ol3.extension = aafactory.ol3.extension || {};

aafactory.ol3.immutable.projection3857 = new ol.proj.Projection({
    code: 'EPSG:3857',
    units: 'm',
    axisOrientation: 'neu',
    global:true,
    extent:[-20037508.342789244, -20037508.342789244, 20037508.342789244, 20037508.342789244] // projection extent 값을  지정해야 모든 tile origin 값이 동일하게 계산됨   
});

aafactory.ol3.immutable.sido = [
    {type: 1, visible: false, id: 'sidoLayer1', name: '서울', subPath: 'sido/11.geojson'},
    {type: 1, visible: false, id: 'sidoLayer9', name: '경기도', subPath: 'sido/41.geojson'},
    {type: 2, visible: true, id: 'highway1', name: '경부고속도로', subPath: 'highway/경부고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'highway2', name: '경인고속도로', subPath: 'highway/경인고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway3', name: '광주원주고속도로', subPath: 'highway/광주원주고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway4', name: '동해고속도로(부산-울산)', subPath: 'highway/동해고속도로(부산-울산)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway5', name: '동해고속도로(삼척-속초)', subPath: 'highway/동해고속도로(삼척-속초)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway6', name: '동해고속도로(울산-포항)', subPath: 'highway/동해고속도로(울산-포항)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: true, id: 'highway7', name: '서울양양고속도로', subPath: 'highway/서울양양고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway8', name: '서해안고속도로', subPath: 'highway/서해안고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway9', name: '세종포천고속도로(구리-포천)', subPath: 'highway/세종포천고속도로(구리-포천)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway10', name: '제2경인고속도로(안양-성남)', subPath: 'highway/영동고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway11', name: '영동고속도로', subPath: 'highway/영동고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway12', name: '제2경인고속도로(인천대교)', subPath: 'highway/제2경인고속도로(인천대교)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway13', name: '제2중부고속도로', subPath: 'highway/제2중부고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway14', name: '중부고속도로', subPath: 'highway/중부고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway15', name: '중부내륙고속도로', subPath: 'highway/중부내륙고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway16', name: '중부내륙고속도로지선', subPath: 'highway/중부내륙고속도로지선_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway17', name: '중앙고속도로(부산-대구)', subPath: 'highway/중앙고속도로(부산-대구)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway18', name: '중앙고속도로(삼락-대동)', subPath: 'highway/중앙고속도로(삼락-대동)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway19', name: '중앙고속도로(춘천-금호)', subPath: 'highway/중앙고속도로(춘천-금호)_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway20', name: '통영대전고속도로', subPath: 'highway/통영대전고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway21', name: '호남고속도로', subPath: 'highway/호남고속도로_EPSG4326.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'highway22', name: '광주대구고속도로', subPath: 'highway/광주대구고속도로.geojson', color: 'rgba(241, 170, 37, 0.9)'},
    {type: 2, visible: false, id: 'precision20400xxxxx', name: '20400xxxxx', subPath: 'precision/20400xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision20401xxxxx', name: '20401xxxxx', subPath: 'precision/20401xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision20500xxxxx', name: '20500xxxxx', subPath: 'precision/20500xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision20601xxxxx', name: '20601xxxxx', subPath: 'precision/20601xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision20602xxxxx', name: '20602xxxxx', subPath: 'precision/20602xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision23400xxxxx', name: '23400xxxxx', subPath: 'precision/23400xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision23401xxxxx', name: '23401xxxxx', subPath: 'precision/23401xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision23402xxxxx', name: '23402xxxxx', subPath: 'precision/23402xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision23403xxxxx', name: '23403xxxxx', subPath: 'precision/23403xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 2, visible: false, id: 'precision23404xxxxx', name: '23404xxxxx', subPath: 'precision/23404xxxxx.geojson', color: 'rgba(241, 170, 37, 0.6)'},
];

aafactory.ol3.immutable.vworldTile = {
        base: new ol.layer.Tile({
            visible : false,
            source : new ol.source.XYZ({
                url : 'http://xdworld.vworld.kr:8080/2d/Base/service/{z}/{x}/{y}.png'
            }),
            name: 'base'
        }),
        midnight: new ol.layer.Tile({
            visible : false,
            source : new ol.source.XYZ({
                url : 'http://xdworld.vworld.kr:8080/2d/midnight/service/{z}/{x}/{y}.png'
            }),
            name: 'midnight'
        }),
        gray: new ol.layer.Tile({
            visible : true,
            source : new ol.source.XYZ({
                url : 'http://xdworld.vworld.kr:8080/2d/gray/service/{z}/{x}/{y}.png'
            }),
            name: 'gray'
        })
}
aafactory.ol3.immutable.roadStyle = [
    new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 0.5)',
            width: 5
        })
    }),
    new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0)',
            width: 5
        }),
        text: new ol.style.Text({
            font: '12px Calibri,sans-serif',
            fill: new ol.style.Fill({
                color: '#000'
            }),
            overflow: true,
            maxangle: 30,
            /*placement : 'line',*/
            align: 'center',
            textBaseline: 'bottom',
            stroke: new ol.style.Stroke({
                color: '#fff',
                width: 3
            })
        })
    }),
    new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgba(255, 255, 255, 0.5)',
            width: 3
        })
    }),
];

aafactory.ol3.immutable.boundaryStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.8)'
    }),
    stroke: new ol.style.Stroke({
        color: '#000000',
        width: 2
    }),
    text: new ol.style.Text({
        font: '15px nanumgothic_bold',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        }),
        overflow: false,
    })
}); 

aafactory.ol3.immutable.style = {
        'Point' : [ new ol.style.Style({
            image : new ol.style.Circle({
                radius : 5,
                fill : null,
                stroke : new ol.style.Stroke({
                    color : 'white',
                    width : 3
                })
            })
        }) ],
        'LineString' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'green',
                width : 5
            })
        }) ],
        'MultiLineString' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'green',
                width : 1
            })
        }) ],
        'MultiPoint' : [ new ol.style.Style({
            image : new ol.style.Circle({
                radius : 5,
                fill : null,
                stroke : new ol.style.Stroke({
                    color : 'white',
                    width : 3
                })
            })
        }) ],
        'MultiPolygon' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'yellow',
                width : 1
            }),
            fill : new ol.style.Fill({
                color : 'rgba(255, 255, 0, 0.1)'
            })
        }) ],
        'Polygon' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'blue',
                lineDash : [ 4 ],
                width : 3
            }),
            fill : new ol.style.Fill({
                color : 'rgba(0, 0, 255, 0.1)'
            })
        }) ],
        'GeometryCollection' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'magenta',
                width : 2
            }),
            fill : new ol.style.Fill({
                color : 'magenta'
            }),
            image : new ol.style.Circle({
                radius : 10,
                fill : null,
                stroke : new ol.style.Stroke({
                    color : 'magenta'
                })
            })
        }) ],
        'Circle' : [ new ol.style.Style({
            stroke : new ol.style.Stroke({
                color : 'red',
                width : 2
            }),
            fill : new ol.style.Fill({
                color : 'rgba(255,0,0,0.2)'
            })
        }) ]
};