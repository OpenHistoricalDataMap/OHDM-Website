/**
 * creates query string for getJSON-Request
 * 
 * @param requestString
 *            request String; e.q. "Berlin"
 * @returns query String
 */
function getQueryString(requestString) {
	var nominatim = "http://nominatim.openstreetmap.org/search/?q=";
	var nominatimParams = {
		format : "json",
		addressdetails : 1,
		limit : 20,
		countrycodes : "",
		"accept-language" : "de" // "en-US",...
	};
	return nominatim + requestString + "&" + $.param(nominatimParams);
}
/**
 * getJSON request for Nominatim (OSM Geocoding API) and append results to
 * search menu
 * 
 * @param requestString
 *            request String; e.q. "Berlin"
 * @returns
 */
function nominatimGetJson(requestString) {
	$.getJSON(getQueryString(requestString)).done(function(json) {
		console.log(json);
		nominatimJsonInHtml(json);
	}).fail(function(jqxhr, textStatus, error) {
		var err = textStatus + ", " + error;
		console.log("Request Failed: " + err);
	});
}
/**
 * creates HTML of geocoding result in search menu
 * 
 * @param json
 *            Nominatim JSON
 */
function nominatimJsonInHtml(json) {
	if (Object.keys(json).length == 0) {
		console.log("leer");
	} else {
		searchControllResultsList.html("");
		for (var i = 0; i < Object.keys(json).length; i++) {
			console.log(json[i].display_name);
			searchControllResultsList
					.append("<li>"
							+ "<a class=\"search-controll-entry\" href=\"#\" data-lon=\""
							+ json[i].lon + "\" data-lat=\"" + json[i].lat
							+ "\">" + json[i].display_name + "</a></>");
		}
	}
}
/**
 * zooms to point
 * @param coord_array geographic coordinates [lon, lat]
 * @returns
 */
function zoom_to(coord_array) {
	console.log(coord_array);
	view.animate({
		center : ol.proj.transform(coord_array, 'EPSG:4326', 'EPSG:3857'),
		duration : 500
	});
}

/**
 * allows to trigger search event by clicking enter
 */
searchControllInput.keypress(function(e) {
	if (e.which == 13) {
		nominatimGetJson(searchControllInput.val());
	}
});
/**
 * starts search on button click
 */
searchControllButton.click(function(e) {
	nominatimGetJson(searchControllInput.val());
});
/**
 * by cklicking on search result, map zooms to point
 */
searchControllResultsList.on('click', searchControllEntry, function() {
	zoom_to([ Number($(this).attr("data-lon")),
			Number($(this).attr("data-lat")) ]);
});
