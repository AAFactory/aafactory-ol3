aafactory.ol3.control.LayerControl = function(opt_options) {
    var options = opt_options !== undefined ? opt_options : {};
    this.className = options.className !== undefined ? options.className : "aaf-measure";
    
    var rotateIconDiv = document.createElement('div');
    var rotateIcon = document.createElement('img');
    rotateIconDiv.className = 'aaf-control-icon aaf-map-rotate';
    rotateIcon.src = './images/arrow-up-32.png';
    rotateIconDiv.innerHTML = 'A';
    
    var listViewIconDiv = document.createElement('div');
    var listViewIcon = document.createElement('img');
    listViewIconDiv.className = 'aaf-control-icon';
//    listViewIcon.src = './images/list-32.png';
//    listViewIconDiv.appendChild(listViewIcon);
    listViewIconDiv.innerHTML = 'L';
    
    var container = document.createElement("div"); 
    container.classList.add("aaf-measure-container");
    container.classList.add("aaf-control-index-top");
    container.appendChild(rotateIconDiv);
    container.appendChild(listViewIconDiv);
    
    ol.events.listen(rotateIconDiv, 'click', function() {
        this.getMap().getView().setRotation(0);
    }, this, false);
     
    ol.events.listen(listViewIconDiv, 'click', function() {
        $('#listView').toggle();
    }, this, false);
    
    ol.control.Control.call(this, {element: container, target: null});
    document.addEventListener('contextmenu', function(event) { event.preventDefault() });
}
ol.inherits(aafactory.ol3.control.LayerControl, ol.control.Control);

