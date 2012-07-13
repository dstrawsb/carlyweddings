/**
 * 
 */

// JavaScript Document
function rollover(tmp, state) {
	if (state == 'on') {
		if (tmp.id == 'blog') {
			tmp.src = "images/images/main_nav_rollover_01.gif";
		}
		if (tmp.id == 'twitter') {
			tmp.src = "images/images/main_nav_rollover_02.gif";
		}
		if (tmp.id == 'facebook') {
			tmp.src = "images/images/main_nav_rollover_03.gif";
		}
	} else {
		if (tmp.id == 'blog') {
			tmp.src = "images/images/nav-1_01.gif";
		}
		if (tmp.id == 'twitter') {
			tmp.src = "images/images/nav-1_02.gif";
		}
		if (tmp.id == 'facebook') {
			tmp.src = "images/images/nav-1_03.gif";
		}
	}
}

function getPage(objIn) {
	//set up an object to use for settings
	var targetSite = {};
	targetSite.url = "";
	targetSite.winName = "";
	targetSite.id = "";

	if (objIn != null) {
		targetSite.id = objIn.id;

		// image-link choices
		if (targetSite.id = 'image1') {
			targetSite.url = "http://www.ibm.com";
			targetSite.winName = targetSite.id + 'Win';
		}
		if (targetSite.id = 'image2') {
			targetSite.url = "http://www.lotus.com";
			targetSite.winName = targetSite.id + 'Win';
		}
		if (targetSite.id = 'image3') {
			targetSite.url = "http://www.msnbc.com";
			targetSite.winName = targetSite.id + 'Win';
		}
		if (targetSite.id = 'image4') {
			targetSite.url = "http://www.msnbc.com";
			targetSite.winName = targetSite.id + 'Win';
		}
		if (targetSite.id = 'image5') {
			targetSite.url = "http://www.msnbc.com";
			targetSite.winName = targetSite.id + 'Win';
		}
		// load the window
		if (targetSite.url != '') {
			window.opener(targetSite.url, targetSite.winName);
		}
	}
} //end getPage