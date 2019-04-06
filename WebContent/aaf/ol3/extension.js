aafactory.ol3.extension.MouseAnimation = function() {
    var duration = 500;
    var listenerKey;
    var feature;
    var start;
    
    this.setMap = function(map) {
        ol.events.listen(map, ol.pointer.EventType.POINTERUP, function(e) {
            var geom = new ol.geom.Point(map.getCoordinateFromPixel(e.pixel));
            feature = new ol.Feature(geom);
            this.flash();
        }, this, false)
    }
    
    this.flash = function(feature) {
        start = new Date().getTime();
        listenerKey = map.on('postcompose', this.animate);
        map.render();
    }
    
    this.animate = function(event) {
        var vectorContext = event.vectorContext;
        var frameState = event.frameState;
        var flashGeom = feature.getGeometry().clone();
        var elapsed = frameState.time - start;
        var elapsedRatio = elapsed / duration;
        // radius will be 5 at start and 30 at end.
        var radius = ol.easing.easeOut(elapsedRatio) * 8;
        var opacity = ol.easing.easeOut(1 - elapsedRatio) - 0.4;
        var style = new ol.style.Style({
            image: new ol.style.Circle({
                radius: radius,
                stroke: new ol.style.Stroke({
                    color: 'rgba(255, 0, 0, ' + opacity + ')',
                    width: 0.25 + opacity
                }),
                fill: new ol.style.Fill({
                    color: 'rgba(0, 0, 255, ' + opacity + ')',
                })
            })
        });
        
        vectorContext.setStyle(style);
        vectorContext.drawGeometry(flashGeom);
        if (elapsed > duration) {
            ol.Observable.unByKey(listenerKey);
            return;
        }
        // tell OpenLayers to continue postcompose animation
        map.render();
    }
}

aafactory.ol3.extension.resolutionChangeHandler = function(evt) {
    var resolution = evt.target.get('resolution');
    var units = map.getView().getProjection().getUnits();
    var dpi = 25.4 / 0.28;
    var mpu = ol.proj.METERS_PER_UNIT[units];
    var scale = resolution * mpu * 39.37 * dpi;
    if (scale >= 9500 && scale <= 950000) {
        scale = Math.round(scale / 1000) + "K";
    } else if (scale >= 950000) {
        scale = Math.round(scale / 1000000) + "M";
    } else {
        scale = Math.round(scale);
    }
    document.getElementById('scale').innerHTML = "Scale = 1 : " + scale;
}

aafactory.ol3.extension.mousePositionControl = new ol.control.MousePosition({
    className : 'custom-mouse-position',
    target : document.getElementById('location'),
    coordinateFormat : ol.coordinate.createStringXY(5),
    undefinedHTML : '&nbsp;'
});

aafactory.ol3.extension.createSDLayer = function(geoJsonName, name, visible) {
    var style = aafactory.ol3.immutable.boundaryStyle;
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'geojson/' + geoJsonName,
            format: new ol.format.GeoJSON()
        }),
        style: function(feature) {
            style.getText().setText(feature.get('area1'));
            style.getText().getStroke().setColor('rgba(0, 0, 255, 1)');
            style.getText().getFill().setColor('rgba(255, 255, 255, 1)');
            style.getFill().setColor('rgba(0, 0, 255, 0)');
            style.getStroke().setColor('rgba(0, 0, 255, 0.8)');
            return style;
        },
        visible: visible,
        declutter: true,
        name: name
    });
    return layer;
}

aafactory.ol3.extension.createRoadLayer = function(geoJsonName, name, color, visible) {
    var roadStyle = aafactory.ol3.immutable.roadStyle;
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'geojson/' + geoJsonName,
            format: new ol.format.GeoJSON()
        }),
        style: function(feature) {
            roadStyle[0].getStroke().setColor(color);
            if (feature.get('ROAD_NAME')) {
                roadStyle[1].getText().setText(feature.get('ROAD_NAME'));
            }
            if (map.getView().getResolution() < 5) {
                roadStyle[0].getStroke().setWidth(12 / map.getView().getResolution());
                roadStyle[2].getStroke().setWidth(10 / map.getView().getResolution());
            } else {
                roadStyle[0].getStroke().setWidth(5);
                roadStyle[2].getStroke().setWidth(3);
            }
            return roadStyle;
        },
        declutter: true,
        name: name,
        visible: visible 
    });
    return layer;
}

aafactory.ol3.extension.createBEMDLayer = function() {
    var style = aafactory.ol3.immutable.boundaryStyle;
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'geojson/emd/bemd.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: function(feature) {
            style.getText().setText(feature.get('EMD_KOR_NM'));
            style.getText().getStroke().setColor('rgba(255, 255, 255, 1)');
            style.getText().getFill().setColor('rgba(0, 0, 0, 1)');
            style.getFill().setColor('rgba(255, 0, 0, 0)');
            style.getStroke().setColor('rgba(255, 255, 255, 1)');
            return style;
        },
        declutter: true,
        //maxResolution: 100,
        name: 'bemdLayer',
        visible: false
    });
    
    layer.on('change', function(e) {
        $('#progress').css('display', 'none');
    });
    
    return layer;
}

aafactory.ol3.extension.createHEMDLayer = function() {
    var style = aafactory.ol3.immutable.boundaryStyle;
    var layer = new ol.layer.Vector({
        source: new ol.source.Vector({
            url: 'geojson/emd/hemd.geojson',
            format: new ol.format.GeoJSON()
        }),
        style: function(feature) {
            style.getText().setText(feature.get('adm_nm'));
            style.getText().getStroke().setColor('rgba(255, 255, 255, 1)');
            style.getText().getFill().setColor('rgba(0, 0, 0, 1)');
            style.getFill().setColor('rgba(255, 0, 0, 0)');
            style.getStroke().setColor('rgba(255, 255, 255, 1)');
            return style;
        },
        declutter: true,
        name: 'hemdLayer',
        visible: false
    });
    
    layer.on('change', function(e) {
        $('#progress').css('display', 'none');
    });
    
    return layer;
}
