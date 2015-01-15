$(document).ready(function(){
	initialize();
});

function initialize() {
	$(".tab").each( function(index, element) {
		var tab = $(element)[0];
		element.onclick = function() { clickTab(tab) };
	});
}

function clickTab(tab) {
	$(".tab").each( function(index, element) {
		$(element).removeClass("selectedTab");
		$("#"+element.id+"_content").removeClass("selectedContent");
	});
	$(tab).addClass("selectedTab");
	$("#"+tab.id+"_content").addClass("selectedContent");
}
