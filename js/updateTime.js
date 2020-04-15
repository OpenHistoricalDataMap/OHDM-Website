/**
 * updates all layers based on given date
 * 
 * @param date
 *            input date as String "YYYY-MM-DD"
 */
function updateAllLayersDate(date) {
	//update cql-filter string
	cqlTimeFilter = cqlTemplateTimeFilter.replace(new RegExp('{{DATE}}', 'g'), date);

	//updates all layers in layer-group layers; should be changed, if all layers will be combined to one WMS
	layers.getLayers().forEach(function(f) {
		f.getSource().updateParams({
			//'viewparams': 'date:' + date
			'cql_filter' : cqlTimeFilter
		});
		//console.log(f.getSource());
	});
}

/**
 * updates layers based on date from select boxes
 */
applyTimeBtn.click(function(e) {
	/*console.log(selectYearBox.val() + "-"
			+ dayOrMonthToString(selectMonthBox.val()) + "-"
			+ dayOrMonthToString(selectDayBox.val()));*/
	updateAllLayersDate(selectYearBox.val() + "-"
			+ dayOrMonthToString(selectMonthBox.val()) + "-"
			+ dayOrMonthToString(selectDayBox.val()));

});