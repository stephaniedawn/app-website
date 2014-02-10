var $items = $('.items img');
var $spray = $('.spray');


var switchItem = function (current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
		$items.eq(current).hide().attr('data-state', '');
		$items.eq(incoming).attr('data-state', 'current');
	});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next > $items.length - 1) {
		next = 0;
	}
	
	switchItem(current, next);
});




$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;
	
	if (next > $items.length + 1) {
		next = 0;
	}
	
	//if (previous < 0) {
		//previous - $items.length + 1) {
	
	switchItem(current, next);
});

document.addEventListener("touchstart", function(){}, true);



var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81320780?color=ffffff&amp;autoplay=1" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	//$videoDialog.show();        (This is triggering JS version of show. We bypass this with the following):
	//.get() is the raw/native JS element we need to use:
	$videoDialog.get(0).showModal();
	//.showModal() disables everything else from being interacted with (stuff behind the dialog) .show() allows users to interact with stuff behind the dialog.
});

$('.btn-close').on('click', function () {
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});


// Testimonials:

var $random = $('.random');
var num = Math.round( Math.random() * 2 );
var file = 'test-' + num + '.html';

$random.load(file);


var $testData = $.ajax('test.json', {
	dataType: 'json' 
});

$testData.done(function (data) {
	var rand = Math.round( Math.random() * (data.length - 1));
	
	$('.tester-name').html( data[rand].tester-name );
	$('.name').html( data[rand].name );
	$('.location').html( data[rand].location );
});








