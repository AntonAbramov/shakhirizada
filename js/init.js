$(document).ready(function () {
	galery();
	faqList();


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


var galery = function(){
	if ($(".fancybox").length){
		$(".fancybox").fancybox({
			helpers		: {
				title	: { type : 'inside' }
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

faqList = function(){
	$('.faq-list').find('.heading').on('click', function(){
		$(this).parents('li').toggleClass('active');
	})

}