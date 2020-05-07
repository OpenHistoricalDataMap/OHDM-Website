var olZoom = $(".ol-zoom");
/**
 * opens right menu
 */
function openRightNav() {
	rightSideMenu.removeClass("right-side-menu-closed");
	rightSideMenu.addClass("right-side-menu-open");

	controllContainer.css("right", rightSideMenuWidth + "px");
	olZoom.css("right", (rightSideMenuWidth - 3) + "px");
}
/**
 * closes right menu
 */
function closeRightNav() {
	rightSideMenu.removeClass("right-side-menu-open");
	rightSideMenu.addClass("right-side-menu-closed");

	controllContainer.css("right", "0px");
	olZoom.css("right", "-3px");
}

//Toggles menu on button click
rightSideMenuButton.click(function(e) {
	var currentMenu = $("#" + $(this).attr("id") + "-menu");
	rightSideMenuButton.removeClass("button-active");
	if (currentMenu.is(":visible")) {
		closeRightNav();
	} else {
		rightSideMenu.children().css("display", "none");
		$(this).addClass("button-active");
		currentMenu.css("display", "block");
		openRightNav();
	}
});

//closes menu by clicking on closeMenu-button
closeMenu.click(function(e) {
	rightSideMenuButton.removeClass("button-active");
	closeRightNav();
});
