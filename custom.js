$(document).ready(function(){
	// Global Variables
	var winHeight = $(window).height();

	// Global Functions
	$.fn.heightFromWin = function(){
		this.css('height', winHeight + 'px');
	};

	$.fn.showSection = function(){
		$('welcome-page').removeClass().addClass('hide-section');
		$('about-page').removeClass().addClass('hide-section');
		$('past-work').removeClass().addClass('hide-section');
		this.removeClass('hide-section').addClass('show-section');
	};

	$.fn.revealWork = function(){
		if($(".workDown").length)
		{
			$(this).removeClass("workUp");
			$('.featured-item').removeClass("workDown");
		}
		else
		{
			$('.featured-item').addClass("workDown");
			$(this).removeClass("workDown").addClass("workUp");
		}
	};

	// Initial Config
	if($(window).width() > 1024)
	{
		$('.nav').heightFromWin();
	$('.main').heightFromWin();
	$('about-page').addClass('hide-section').heightFromWin();
	$('past-work').addClass('hide-section').heightFromWin();
	$('welcome-page').addClass('show-section').heightFromWin();
	}

	// Main Nav Handlers
	$('a.about-link').on("click", function(e){
		e.preventDefault();
		$('about-page').showSection();
	});
	$('a.work-link').on("click", function(e){
		e.preventDefault();
		$('past-work').showSection();
	});
	$('a.contact-link').on("click", function(e){
		e.preventDefault();
		$('.contact-section').toggleClass('show-contact');
	});
	$('a.home-link').on("click", function(e){
		e.preventDefault();
		$('welcome-page').showSection();
	});
	$('a.game-link').on("click", function(){
		$('ul.game-list').toggleClass('showlist');
	});
});