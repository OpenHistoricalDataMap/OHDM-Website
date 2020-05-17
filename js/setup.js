var d = new Date();
//default date is current date; will be updated if url-parameter is set
var selectedDate = [ d.getFullYear(), d.getMonth() + 1, d.getDate() ]; // YYYY MM DD (today)
//date range in years, for filterfunction (here 1900-current year)
var dateRange = [ 1900, d.getFullYear() ]; // [minYear, currentYear]
var date; // date String created out of selectedDate;

/*
 * Menu HTML; used in: menu.js
 */
var rightSideMenu = $(".right-side-menu");
var rightSideMenuWidth = 300; // in px; setup in style.css
var controllContainer = $(".controll-container")
var rightSideMenuButton = $(".side-menu-button>a");
var closeMenu = $(".close-menu");

/*
 * Time Select HTML; used in setup.js, updateTime.js
 */
var applyTimeBtn = $(".apply-time");
var selectYearBox = $(".select-year");
var selectMonthBox = $(".select-month");
var selectDayBox = $(".select-day");

/*
 * Search controls HTML; used in: geocoding.js
 */
var searchControllButton = $("#search-controll-button");
var searchControllInput = $("#search-controll-input");
var searchControllResultsList = $(".search-controll-results-list");
var searchControllEntry = ".search-controll-entry";

/*
 * dummy cql-filter string for layers to filter by date
 */
var cqlTemplateTimeFilter = "\'{{DATE}}\' >= valid_since AND \'{{DATE}}\' <= valid_until";
var cqlTimeFilter; //will be filled later. depends on input date

/**
 * gets url parameter
 * 
 * @param sParam
 *            parameter name
 * @returns parameter value
 */
function GetURLParameter(sParam) {
	var sPageURL = window.location.search.substring(1);
	var sURLVariables = sPageURL.split('&');
	for (var i = 0; i < sURLVariables.length; i++) {
		var sParameterName = sURLVariables[i].split('=');
		if (sParameterName[0] == sParam) {
			return sParameterName[1];
		}
	}
}

/**
 * converts month oder day to String; e.g. 1 -> "01"
 * 
 * @param date
 *            day or month value
 * @returns date String
 */
function dayOrMonthToString(date) {
	if (date <= 9) {
		return "0" + date;
	} else {
		return "" + date;
	}
}
/**
 * fills date select box based on min/max-values
 * 
 * @param selectBox
 *            html select box in jquery
 * @param min
 *            minimum value (year, month or day)
 * @param max
 *            maximum value (year, month or day)
 * @param selected
 *            value, which will be selected
 */
function fillDateSelect(selectBox, min, max, selected) {
	selectBox.html("");
	for (var i = min; i <= max; i++) {
		if (i == selected) {
			selectBox.append("<option selected value=\"" + i + "\">"
					+ dayOrMonthToString(i) + "</option>");
		} else {
			selectBox.append("<option value=\"" + i + "\">"
					+ dayOrMonthToString(i) + "</option>");
		}
	}
}
/**
 * gets max-days of month based on year and month
 * 
 * @param month
 *            month value
 * @param year
 *            year value
 * @returns maximum days for year and month
 */
function daysInMonth(month, year) {
	return new Date(year, month, 0).getDate();
}
/**
 * checks if currentDay is to big for month and year (e.g. 31 too big for feb ->
 * 28)
 * 
 * @param month
 *            month value
 * @param year
 *            year value
 * @param currentDay
 *            current day value
 * @returns day
 */
function getMaxDayForSelect(month, year, currentDay) {
	if (currentDay > daysInMonth(month, year)) {
		return daysInMonth(month, year);
	} else {
		return currentDay;
	}
}

/**
 * overwrites selectedDate if urlParam date is given
 */
function getDateParam() {
	var dateParam = GetURLParameter('date');

	// checks if date param is set, if it is given in right format (only numbers
	// and length of 3) and if its between dateRange
	if (dateParam) {
		var tmpDate = dateParam.split('-').map(Number);
		if (!tmpDate.some(isNaN) && tmpDate.length == 3
				&& tmpDate[0] >= dateRange[0] && tmpDate[0] <= dateRange[1]) {
			selectedDate = tmpDate;
		}
	}
}

/*
*
___________________________________________________________________________________________________________________
___________________________________________________________________________________________________________________
*
*/

//get time of html documents and change params /-OCHIR
function getTimeAndUpdateMap(){
	var year = document.getElementById("year-select").value;
	var dateSelect = year + "-" + selectMonthBox.val() + "-" + selectDayBox.val(); // creates "YYYY-MM-DD"
	test_tile.getSource().updateParams({'TIME': new Date(dateSelect).toISOString()});
	console.log(new Date(dateSelect).toISOString());
}
var timeButton = document.getElementById("getTime");
timeButton.addEventListener('click', getTimeAndUpdateMap, false);

/**
 * 
 * 
 * BUILD
 * 
 * 
 */

//gets date Params if 'date'-url-param is given
getDateParam();
//creates date string
date = selectedDate[0] + "-" + dayOrMonthToString(selectedDate[1]) + "-"
		+ dayOrMonthToString(selectedDate[2]); // creates "YYYY-MM-DD"
//console.log(date);
//creates cql filter for layer depending on date string
cqlTimeFilter = cqlTemplateTimeFilter.replace(new RegExp('{{DATE}}', 'g'), date);


// fills year select
fillDateSelect(selectYearBox, dateRange[0], dateRange[1], selectedDate[0]);
// fills month select
fillDateSelect(selectMonthBox, 1, 12, selectedDate[1]);
// fills day select
fillDateSelect(selectDayBox, 1, daysInMonth(selectedDate[1], selectedDate[0]),
		selectedDate[2]);

// changes days of month if selectMonthBox is changed
selectMonthBox.on('change', function(e) {
	fillDateSelect(selectDayBox, 1, daysInMonth(selectMonthBox.val(),
			selectYearBox.val()), getMaxDayForSelect(selectMonthBox.val(),
			selectYearBox.val(), selectDayBox.val()));
});
// changes days of month if selectYearBox is changed
selectYearBox.on('change', function(e) {
	fillDateSelect(selectDayBox, 1, daysInMonth(selectMonthBox.val(),
			selectYearBox.val()), getMaxDayForSelect(selectMonthBox.val(),
			selectYearBox.val(), selectDayBox.val()));
});
