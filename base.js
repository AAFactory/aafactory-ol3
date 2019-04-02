/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// 지도객체 생성
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var map;
var vworldTile = aafactory.ol3.immutable.vworldTile;
$(function() {
    // 지도객체 초기화
    map = new ol.Map({
        controls : ol.control.defaults({
            attribution : false
        }).extend([ new ol.control.ScaleLine() ]),
        target : 'map',
        layers : [ vworldTile.base, vworldTile.midnight, vworldTile.gray, bemdLayer],
        view : new ol.View({
            projection : aafactory.ol3.immutable.projection3857
        })
    });
    
    // control 추가
    new aafactory.ol3.control.LayerControl().setMap(map);
    aafactory.ol3.extension.mousePositionControl.setMap(map);
    
    // 마우스클릭 애니메이션 추가
    new aafactory.ol3.extension.MouseAnimation().setMap(map);

    // 지도위치 초기화
    map.getView().fit([14083957.251601951, 4424311.245778092, 14231974.715348352, 4619246.481197673], map.getSize());
    
    // view event handler
    map.getView().on('change:resolution', aafactory.ol3.extension.resolutionChangeHandler);
    map.getView().on('propertychange', function(e) { 
        var degree = (map.getView().getRotation() * 57.2);
         $('.aaf-map-rotate').css({'transform' : 'rotate('+ degree +'deg)'});
    });
    
    // resize event handler
    $(window).resize(containerResizeHandler);
    containerResizeHandler();
    
    // 레이어추가
    var container = document.getElementById('layerBox');
    var previousType = -1;
    aafactory.ol3.immutable.sido.forEach(function(item) {
        var div = document.createElement('div');
        div.id = item.id;
        div.innerHTML = item.name;
        if (previousType != item.type) container.appendChild(document.createElement('hr'));
        
        if (item.type == 1) {
            div.className = "card layer-on dynamicDiv";
            map.addLayer(aafactory.ol3.extension.createSDLayer(item.subPath, item.id));    
        } else {
            if (item.visible) {
                div.className = "card layer-on dynamicDiv";
            } else {
                div.className = "card dynamicDiv";
            }
            map.addLayer(aafactory.ol3.extension.createRoadLayer(item.subPath, item.id, item.color, item.visible));
        }
        
        container.appendChild(div);
        previousType = item.type;
    })
    
    bindLayerEvent();
});

var containerResizeHandler = function() {
    var w = $(window).width();
    var h = $(window).height();
    $('#map').width(w);
    $('#map').height(h);
    $('#listView').height(h);
    map.updateSize();
}


/*+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/// Layer 초기화
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/
var bemdLayer = aafactory.ol3.extension.createBEMDLayer();


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Layer박스 제어 이벤트 처리
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var bindLayerEvent = function() {
    $('.card').on('click', function() {
        var $target = $(this); 
        var layerName = $target.attr('id');
        map.getLayers().forEach(function(item, idx) {
            if (layerName == item.get('name')) {
                if ($target.hasClass('layer-on')) {
                    $target.removeClass('layer-on');
                    item.setVisible(false);
                } else {
                    if (layerName == 'base' || layerName == 'midnight' || layerName == 'gray') {
                        vworldTile.base.setVisible(false);
                        vworldTile.midnight.setVisible(false);
                        vworldTile.gray.setVisible(false);
                        $('#base').removeClass('layer-on');
                        $('#midnight').removeClass('layer-on');
                        $('#gray').removeClass('layer-on');
                    } else {
                        if (item.getSource().getFeatures().length == 0) {
                            $('#progress').css('display', 'block');
                            item.on('change', function(e) {
                                $('#progress').css('display', 'none');
                            });
                        }
                    }
                    $target.addClass('layer-on');
                    item.setVisible(true);
                }
            } 
        });
    });
}

