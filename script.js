$(document).ready(function() {
//toggle content
	$('#basecamp').hover(function() {
		$('.content').toggle();
		$('.basecampcontent').toggle();
	});
	$('#highrise').hover(function() {
		$('.content').toggle();
		$('.highrisecontent').toggle();
	});
	$('#campfire').hover(function() {
		$('.content').toggle();
		$('.campfirecontent').toggle();
	});
//day for header
	var date = new Date();
	var dayname = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var day = dayname[date.getDay()];
	$('#nav1 li').append(day + '.');
});


