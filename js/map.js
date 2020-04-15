/** * Scaleline ** */
var scaleLineControl = new ol.control.ScaleLine();

/** * disable map rotate (important for touchscreens) ** */
var interactions = ol.interaction.defaults({
	altShiftDragRotate : false,
	pinchRotate : false
});

/** * mouseposition coordinates ** */
var mousePositionControl = new ol.control.MousePosition({
	coordinateFormat : function(coord) {
		// coords in format xx.x°N, xx.x°W
		if (coord[0] < 0) {
			coord[0] = (coord[0] * (-1)).toFixed(2) + '°W';
		} else if (coord[0] > 0) {
			coord[0] = coord[0].toFixed(2) + '°E';
		} else {
			coord[0] = coord[0].toFixed(2) + '°';
		}
		;
		if (coord[1] < 0) {
			coord[1] = (coord[1] * (-1)).toFixed(2) + '°S';
		} else if (coord[1] > 0) {
			coord[1] = coord[1].toFixed(2) + '°N';
		} else {
			coord[1] = coord[1].toFixed(2) + '°';
		}
		;
		return (coord[1] + ', ' + coord[0]);
	},
	projection : 'EPSG:4326',
	className : 'custom-mouse-position',
	undefinedHTML : '&nbsp;'
});
/**
 * map view
 */
var view = new ol.View({
	projection : 'EPSG:3857',
	center : ol.proj.transform([ 13.4, 52.5 ], 'EPSG:4326', 'EPSG:3857'),
	zoom : 11
});

/** * map ** */
var map = new ol.Map({
	layers : layers,
	/*[ new ol.layer.Tile({
		source : new ol.source.OSM()
	}) ],*/
	loadTilesWhileAnimating : true,
	interactions : interactions,
	target : 'map',
	controls : ol.control.defaults({
		attributionOptions : ({
			collapsible : false
		})
	}).extend([ mousePositionControl, scaleLineControl ]),
	view : view,
	loadTilesWhileAnimating : true,
	renderer : 'canvas'
});
