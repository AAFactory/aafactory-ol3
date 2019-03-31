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

aafactory.ol3.immutable.vworldTile = {
        base: new ol.layer.Tile({
            visible : true,
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
            visible : false,
            source : new ol.source.XYZ({
                url : 'http://xdworld.vworld.kr:8080/2d/gray/service/{z}/{x}/{y}.png'
            }),
            name: 'gray'
        })
}

aafactory.ol3.immutable.boundaryStyle = new ol.style.Style({
    fill: new ol.style.Fill({
        color: 'rgba(255, 255, 255, 0.8)'
    }),
    stroke: new ol.style.Stroke({
        color: '#000000',
        width: 3
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