$(document).ready(function () {
	galery();
	faqList();
	modal();


// inner variables
	var song;
	var tracker = $('.tracker');
	var volume = $('.volume');

// inner variables
	var song;
	var tracker = $('.tracker');
	var volume = $('.volume');

	function initAudio(elem) {
		var url = elem.attr('audiourl');
		var title = elem.text();
		var cover = elem.attr('cover');
		var artist = elem.attr('artist');

		$('.player .title').text(title);
		$('.player .artist').text(artist);
		$('.player .cover').css('background-image', 'url(data/' + cover + ')');
		;

		song = new Audio(url);

		// timeupdate event listener
		song.addEventListener('timeupdate', function () {
			var curtime = parseInt(song.currentTime, 10);
			tracker.slider('value', curtime);
		});

		$('.playlist li').removeClass('active');
		elem.addClass('active');
	}

	function playAudio() {
		song.play();

		tracker.slider("option", "max", song.duration);

		$('.play').addClass('hidden');
		$('.pause').addClass('visible');
	}

	function stopAudio() {
		song.pause();

		$('.play').removeClass('hidden');
		$('.pause').removeClass('visible');
	}

	// play click
	$('.play').click(function (e) {
		e.preventDefault();

		playAudio();
	});

	// pause click
	$('.pause').click(function (e) {
		e.preventDefault();

		stopAudio();
	});

	// forward click
	$('.fwd').click(function (e) {
		e.preventDefault();

		stopAudio();

		var next = $('.playlist li.active').next();
		if (next.length == 0) {
			next = $('.playlist li:first-child');
		}
		initAudio(next);
	});

	// rewind click
	$('.rew').click(function (e) {
		e.preventDefault();

		stopAudio();

		var prev = $('.playlist li.active').prev();
		if (prev.length == 0) {
			prev = $('.playlist li:last-child');
		}
		initAudio(prev);
	});

	// show playlist
	$('.pl').click(function (e) {
		e.preventDefault();

		$('.playlist').fadeIn(300);
	});

	// playlist elements - click
	$('.playlist li').click(function () {
		stopAudio();
		initAudio($(this));
	});

	// initialization - first element in playlist
	initAudio($('.playlist li:first-child'));

	// set volume
	song.volume = 0.8;

	// initialize the volume slider
	volume.slider({
		range: 'min',
		min: 1,
		max: 100,
		value: 80,
		start: function (event, ui) {
		},
		slide: function (event, ui) {
			song.volume = ui.value / 100;
		},
		stop: function (event, ui) {
		}
	});

	// empty tracker slider
	tracker.slider({
		range: 'min',
		min: 0, max: 10,
		start: function (event, ui) {
		},
		slide: function (event, ui) {
			song.currentTime = ui.value;
		},
		stop: function (event, ui) {
		}
	});

	// mute/unmute button - click
	$('.icons-audio_headphone').click(function (e) {
		e.preventDefault();
		if ($(this).hasClass('mute'))
			song.volume = 0;
		else
			song.volume = 1;
		$(this).toggleClass('mute');
	})
});

$(window).resize(function () {

});

$(window).load(function () {

});


var popup = function () {
	$(".overlay").on("click", function () {
		$(this).fadeOut();
		$('.popup').fadeOut();
	})
	$(".popup").find(".close").on("click", function () {
		$(".overlay").fadeOut();
		$('.popup').fadeOut();
	});

}
var tabs = function () {
	var tab = $(".tabs");
	if (tab.length) {
		tab.each(function () {
			var idx = $(this).find(".tab-nav .active").index();
			$(this).find('.tab-content .tab').hide().eq(idx).show();
		});


		tab.find(".tab-nav a").click(function (event) {
			event.preventDefault();

			if ($(this).hasClass("active")) {
				return false;
			} else {
				$(this).parents('.tabs').find(".tab-nav a").removeClass('active');
				var idx = $(this).addClass("active").index();
				$(this).parents('.tabs').find(".tab-content .tab").hide();
				$(this).parents('.tabs').find(".tab-content .tab").eq(idx).show();
			}
		});
	}
}


var galery = function () {
	if ($(".fancybox").length) {
		$(".fancybox").fancybox({
			helpers: {
				title: { type: 'inside' }
			}
		});
	}
	if ($(".galery-video").length) {
		$(".galery-video").fancybox();
	}

	if ($('.galery-item').length) {
		$('.galery-item').fancybox();
	}
}

faqList = function () {
	$('.faq-list').find('.heading').on('click', function () {
		$(this).parents('li').toggleClass('active');
	})

}

var modal = function(){
	$('.modal').find('.close-modal').on('click', function(){
		$(this).parents('.modal').fadeOut();
		$('.overlay').fadeOut();
	});


	$('.show-modal').on('click', function(){
		$('.modal').fadeIn();
		$('.overlay').fadeIn();
	});

	$('.download').find('.icons-doc').on('click', function(){
		$(this).parent().find('.modal, .overlay').fadeIn().parent('.download');
	})
}