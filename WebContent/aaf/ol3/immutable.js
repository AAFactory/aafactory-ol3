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
    {type: 1, visible: false, id: 'sidoLayer1', name: '서울', subPath: 'sgg/11xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer2', name: '부산광역시', subPath: 'sgg/26xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer3', name: '대구광역시', subPath: 'sgg/27xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer4', name: '인천광역시', subPath: 'sgg/28xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer5', name: '광주광역시', subPath: 'sgg/29xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer6', name: '대전광역시', subPath: 'sgg/30xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer7', name: '울산광역시', subPath: 'sgg/31xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer8', name: '세종특별자치시', subPath: 'sgg/36xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer9', name: '경기도', subPath: 'sgg/41xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer10', name: '강원도', subPath: 'sgg/42xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer11', name: '충청북도', subPath: 'sgg/43xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer12', name: '충청남도', subPath: 'sgg/44xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer13', name: '전라북도', subPath: 'sgg/45xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer14', name: '전라남도', subPath: 'sgg/46xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer15', name: '경상북도', subPath: 'sgg/47xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer16', name: '경상남도', subPath: 'sgg/48xxx.geojson'},
    {type: 1, visible: false, id: 'sidoLayer17', name: '제주특별자치도', subPath: 'sgg/50xxx.geojson'},
    {type: 2, visible: true,  color: 'rgba(241, 170, 37, 0.6)', id: 'highway1', name: '경부고속도로', subPath: 'highway/경부고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway2', name: '경인고속도로', subPath: 'highway/경인고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway3', name: '광주원주고속도로', subPath: 'highway/광주원주고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway4', name: '동해고속도로(부산-울산)', subPath: 'highway/동해고속도로(부산-울산)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway5', name: '동해고속도로(삼척-속초)', subPath: 'highway/동해고속도로(삼척-속초)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway6', name: '동해고속도로(울산-포항)', subPath: 'highway/동해고속도로(울산-포항)_EPSG4326.geojson'},
    {type: 2, visible: true,  color: 'rgba(241, 170, 37, 0.6)', id: 'highway7', name: '서울양양고속도로', subPath: 'highway/서울양양고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway8', name: '서해안고속도로', subPath: 'highway/서해안고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway9', name: '세종포천고속도로(구리-포천)', subPath: 'highway/세종포천고속도로(구리-포천)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway10', name: '제2경인고속도로(안양-성남)', subPath: 'highway/영동고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway11', name: '영동고속도로', subPath: 'highway/영동고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway12', name: '제2경인고속도로(인천대교)', subPath: 'highway/제2경인고속도로(인천대교)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway13', name: '제2중부고속도로', subPath: 'highway/제2중부고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway14', name: '중부고속도로', subPath: 'highway/중부고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway15', name: '중부내륙고속도로', subPath: 'highway/중부내륙고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway16', name: '중부내륙고속도로지선', subPath: 'highway/중부내륙고속도로지선_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway17', name: '중앙고속도로(부산-대구)', subPath: 'highway/중앙고속도로(부산-대구)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway18', name: '중앙고속도로(삼락-대동)', subPath: 'highway/중앙고속도로(삼락-대동)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway19', name: '중앙고속도로(춘천-금호)', subPath: 'highway/중앙고속도로(춘천-금호)_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway20', name: '통영대전고속도로', subPath: 'highway/통영대전고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway21', name: '호남고속도로', subPath: 'highway/호남고속도로_EPSG4326.geojson'},
    {type: 2, visible: false, color: 'rgba(241, 170, 37, 0.6)', id: 'highway22', name: '광주대구고속도로', subPath: 'highway/광주대구고속도로.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad1', name: '내부순환로', subPath: 'nationalroad/내부순환로_EPSG4326.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad2', name: '분당수서간도시고속화도로', subPath: 'nationalroad/분당수서간도시고속화도로_EPSG4326.geojson'},
    /*{type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad4', name: '국도1호선', subPath: 'nationalroad/국도1호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad5', name: '국도2호선', subPath: 'nationalroad/국도2호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad6', name: '국도3호선', subPath: 'nationalroad/국도3호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad7', name: '분당내곡간도시고속화도로', subPath: 'nationalroad/분당내곡간도시고속화도로.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad8', name: '국도4호선', subPath: 'nationalroad/국도4호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad9', name: '국도6호선', subPath: 'nationalroad/국도6호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad10', name: '국도7호선', subPath: 'nationalroad/국도7호선.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad11', name: '동부간선도로', subPath: 'nationalroad/동부간선도로.geojson'},
    {type: 3, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'nRoad12', name: '올림픽대로', subPath: 'nationalroad/올림픽대로.geojson'},*/
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision1', name: '평택제천고속도', subPath: 'precision/평택제천고속도.geojson', color: 'rgba(241, 170, 37, 0.6)'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision2', name: '서울외곽순환고속도로', subPath: 'precision/서울외곽순환고속도로.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision3', name: '성남대로', subPath: 'precision/성남대로.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision4', name: '헌릉로', subPath: 'precision/헌릉로.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision5', name: '일반국도3호선', subPath: 'precision/일반국도3호선.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision6', name: '동부간선도로', subPath: 'precision/동부간선도로.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision20400xxxxx', name: '20400xxxxx', subPath: 'precision/20400xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision20401xxxxx', name: '20401xxxxx', subPath: 'precision/20401xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision20500xxxxx', name: '20500xxxxx', subPath: 'precision/20500xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision20601xxxxx', name: '20601xxxxx', subPath: 'precision/20601xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision20602xxxxx', name: '20602xxxxx', subPath: 'precision/20602xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision23400xxxxx', name: '23400xxxxx', subPath: 'precision/23400xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision23401xxxxx', name: '23401xxxxx', subPath: 'precision/23401xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision23402xxxxx', name: '23402xxxxx', subPath: 'precision/23402xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision23403xxxxx', name: '23403xxxxx', subPath: 'precision/23403xxxxx.geojson'},
    {type: 4, visible: false, color: 'rgba(255, 0, 0, 0.6)', id: 'precision23404xxxxx', name: '23404xxxxx', subPath: 'precision/23404xxxxx.geojson'},
    {type: 5, visible: false, id: 'railway_station', name: '지하철역', subPath: 'buildings/railway_station.geojson'},
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
            placement : 'line',
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
        width: 5
    }),
    text: new ol.style.Text({
        font: '12px nanumgothic_bold',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: 'rgba(0, 0, 255, 1)',
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

aafactory.ol3.immutable.buildingStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.8)'
    }),
    stroke: new ol.style.Stroke({
        color: '#000000',
        width: 1
    }),
    text: new ol.style.Text({
        font: '12px Calibri,sans-serif',
        fill: new ol.style.Fill({
            color: '#000'
        }),
        stroke: new ol.style.Stroke({
            color: '#fff',
            width: 3
        }),
        overflow: true,
    })
});