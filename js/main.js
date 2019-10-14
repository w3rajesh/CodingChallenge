var TIMEOUT = 6000;
var interval = setInterval(handleNext, TIMEOUT);

function handleNext() {

	var $radios = $('input[class*="slide-radio"]');
	var $activeRadio = $('input[class*="slide-radio"]:checked');

	var currentIndex = $activeRadio.index();
	var radiosLength = $radios.length;

	$radios
		.attr('checked', false);

	if (currentIndex >= radiosLength - 1) {
		$radios
			.first()
			.attr('checked', true);
	} else {
		$activeRadio
			.next('input[class*="slide-radio"]')
			.attr('checked', true);
	}

}

window.onscroll = function () {
	myFunction();
	myCount();
};

var header = document.getElementById("myHeader");
var sticky1 = header.offsetTop;

function myFunction() {
	if (window.pageYOffset > sticky1) {
		header.classList.add("sticky1");
	} else {
		header.classList.remove("sticky1");
	}
}

var a = 0;

function myCount() {
	var oTop = $('.infopanel').offset().top - window.innerHeight;
	if (a == 0 && $(window).scrollTop() > oTop) {
		$('.counter-value').each(function () {
			var $this = $(this),
				countTo = $this.attr('data-count');
			$({
				countNum: $this.text()
			}).animate({
				countNum: countTo
			}, {
				duration: 2000,
				easing: 'swing',
				step: function () {
					$this.text(Math.floor(this.countNum));
				},
				complete: function () {
					$this.text(this.countNum);
				}

			});
		});
		a = 1;
	}
}

$(document).ready(function () {
	console.log("document ready!");
	var $sticky = $('.sticky');
	var $stickyrStopper = $('.sticky-stopper');
	if (!!$sticky.offset()) {

		var generalSidebarHeight = $sticky.innerHeight();
		var stickyTop = $sticky.offset().top;
		var stickOffset = 100;
		var stickyStopperPosition = $stickyrStopper.offset().top;
		var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
		var diff = stopPoint + stickOffset;

		$(window).scroll(function () {
			var windowTop = $(window).scrollTop();

			if (stopPoint < windowTop) {
				$sticky.css({
					position: 'static',
					top: diff
				});
			} else if (stickyTop < windowTop + stickOffset) {
				$sticky.css({
					position: 'fixed',
					top: stickOffset
				});
			} else {
				$sticky.css({
					position: 'static',
					top: 'initial'
				});
			}
		});

	}
});
