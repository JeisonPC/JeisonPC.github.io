/*
|--------------------------------------------------------------------------
| Template Name: Alone - Personal Portfolio Responsive Template
| Developer: Abdur Rahman
| Version: 1.0.0
|--------------------------------------------------------------------------
|--------------------------------------------------------------------------
*/

(function($) {
  
  "use strict";  

  $(window).on('load', function() {

  /* 
   One Page Navigation & wow js
   ========================================================================== */
    // Navbar mainNav
		var nav = $('nav');
		var navHeight = nav.outerHeight();

		$('.navbar-toggler').on('click', function () {
			if (!$('#mainNav').hasClass('navbar-reduce')) {
				$('#mainNav').addClass('navbar-reduce');
			}
		});		

		// Navbar Menu Reduce 
		
		$(window).trigger('scroll');
		$(window).on('scroll', function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$('.navbar-expand-md').addClass('navbar-reduce');
				$('.navbar-expand-md').removeClass('navbar-trans');
			} else {
				$('.navbar-expand-md').addClass('navbar-trans');
				$('.navbar-expand-md').removeClass('navbar-reduce');
			}
			if ($(window).scrollTop() > top) {
				$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
			} else {
				$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
			}
		});

		
		//  Star ScrollTop
	
		$('.scrolltop-mf').on("click", function () {
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});

		//  Star Scrolling nav
	
		$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html, body').animate({
						scrollTop: (target.offset().top - navHeight + 30)
					}, 1000, "easeInOutExpo");
					return false;
				}
			}
		});

		// Closes responsive menu when a scroll trigger link is clicked
		
		$('.js-scroll').on("click", function () {
			$('.navbar-collapse').collapse('hide');
		});

		// Activate scrollspy to add active class to navbar items on scroll
		$('body').scrollspy({
			target: '#mainNav',
			offset: navHeight
		});

    /* 
   MixitUp
   ========================================================================== */
  $('#portfolio').mixItUp();

  
  /*Page Loader active
    ========================================================*/
		$('.loader_wrap').fadeOut();
		$('.preloader').delay(350).fadeOut('slow'); 


  // Sticky Nav
    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 200) {
            $('.scrolling-navbar').addClass('top-nav-collapse');
        } else {
            $('.scrolling-navbar').removeClass('top-nav-collapse');
        }
    });

    /* slicknav mobile menu active  */
    $('.mobile-menu').slicknav({
        prependTo: '.navbar-header',
        parentTag: 'liner',
        allowParentLinks: true,
        duplicate: true,
        label: '',
        closedSymbol: '<i class="icon-arrow-right"></i>',
        openedSymbol: '<i class="icon-arrow-down"></i>',
      });


      /* WOW Scroll Spy
    ========================================================*/
     var wow = new WOW({
      //disabled for mobile
        mobile: false
    });

    wow.init();

    /* Nivo Lightbox 
    ========================================================*/
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
      });

	
	 /* Service
    ========================================================*/
	$(".services_item").owlCarousel({
		autoPlay: true,
		slideSpeed:1000,
		items : 3,
		loop: true,
		nav:true,
		navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		margin: 30,
		dots: true,
		items:3,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:2
			},
			979:{
				items:2
			},
			1000:{
				items:3
			}
		}
	});
	
    /* Counter
    ========================================================*/
    $('.counter').counterUp({
		delay: 10,
		time: 1000
    });
	
	
	 /* Tesimonial
    ========================================================*/
	$(".carousel-testimony").owlCarousel({
		loop:true,
		navText:false,
		autoplayHoverPause: false,
		autoplay: 6000,
		smartSpeed: 1000,
		autoPlay:true,
		dots: true,
		items:1,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:1
			},
			979:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});


    /* Back Top Link active
    ========================================================*/
      var offset = 200;
      var duration = 500;
      $(window).scroll(function() {
        if ($(this).scrollTop() > offset) {
          $('.back-to-top').fadeIn(400);
        } else {
          $('.back-to-top').fadeOut(400);
        }
      });

      $('.back-to-top').on('click',function(event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: 0
        }, 600);
        return false;
      });
	


  });   

}(jQuery));