/*
   
    Template Name : WebRes - Personal Resume Template
    Author : UiPasta Team
    Website : http://www.uipasta.com/
    Support : http://www.uipasta.com/support/
	
	
*/



/*
   
   Table Of Content
   
   1. Preloader
   2. Smooth Scroll
   3. Scroll Naviagation Background Change with Sticky Navigation
   4. Mobile Navigation Hide or Collapse on Click
   5. Scroll To Top
   6. Tooltip
   7. Ajaxchimp for Subscribe Form
   8. Portfolio Filtering
   9. Magnific Popup
  10. Testimonial Carousel/Slider
  11. Statistics Counter
  12. Menu open on Hamburger icon click in responsive view to open menu
*/

(function ($) {
    'use strict';

    jQuery(document).ready(function () {

        
       /* Preloader */
		
        $(window).load(function () {
          $('.preloader').delay(800).fadeOut('slow');
        });
		
		
		
       /* Smooth Scroll */

        $('a.smoth-scroll').on("click", function (e) {
            $('.js-mobileMenu').find('li').removeClass('active');
            $(e.currentTarget).parent('li').addClass('active');
            closeMobileMenu();
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1000);
            e.preventDefault();
        });
		


       
       /* Scroll Naviagation Background Change with Sticky Navigation */
		 
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.header-top-area').addClass('navigation-background');
            } else {
                $('.header-top-area').removeClass('navigation-background');
            }
        });
		
		
		
		
       /* Mobile Navigation Hide or Collapse on Click */
		
        $(document).on('click', function (e) {
          e.stopPropagation();
          if ($(e.target).attr('class') != 'dropdown-toggle' || $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
            $('.js-navbarCollapse').removeClass('open');
            $('.js-navbarToggle').removeClass('open');
          }
        });
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        
		 });
		 
		
		
		
        /* Scroll To Top */
		
        $(window).scroll(function(){
        if ($(this).scrollTop() >= 500) {
            $('.scroll-to-top').fadeIn();
         } else {
            $('.scroll-to-top').fadeOut();
         }
	   });
	
	
	    $('.scroll-to-top, .js-headerLogo').click(function(){
		  $('html, body').animate({scrollTop : 0},800);
		  return false;
	    });
		

        
        /* Tooltip */
         
         $(function () {
           $('[data-toggle="tooltip"]').tooltip()
           })
		   
		 
        
        /* Ajaxchimp for Subscribe Form */
		
         //$('#mc-form').ajaxChimp();
		   
		   
  
		
        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();


       
        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
            gallery: { enabled: true },
			      zoom: { enabled: true,
			        duration: 500
            },
		  
            image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<a href="#" target="_blank" class="mfp-title"></a>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc: function(item) {
                return item.el.attr('title');
              }
            },

            callbacks: {
              open: function(item) {
                var currentURL = $(event.currentTarget).data('url');
                $('.portfolio-pop-up').append('<a href="'+currentURL+'" target="_blank" class="popupIcons"><i class="icon-link"></i></a>');
                $('.mfp-title').attr('href', currentURL);
              }
            }
		  
		  
          });
	   
		 
        /* Testimonial Carousel/Slider */

        $(".testimonial-carousel-list").owlCarousel({
            items: 1,
            autoPlay: true,
            stopOnHover: false,
            navigation: true,
            navigationText: ["<i class='fa fa-long-arrow-left fa-2x owl-navi'></i>", "<i class='fa fa-long-arrow-right fa-2x owl-navi'></i>"],
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [980, 1],
            itemsTablet: [768, 1],
            itemsTabletSmall: false,
            itemsMobile: [479, 1],
            autoHeight: true,
            pagination: false,
            transitionStyle : "fadeUp"
        });
		
		
		
		
        /* Statistics Counter */
		
        $('.statistics').appear(function() {
           var counter = $(this).find('.statistics-count');
           var toCount = counter.data('count');
      
           $(counter).countTo({
           from: 0,
           to: toCount,
           speed: 5000,
           refreshInterval: 50
           })
           });
              
		   
            });

    /* 12. Menu open on Hamburger icon click in responsive view to open menu */
    $('.js-navbarToggle').on('click', function(event) {
      event.stopPropagation();
      $(event.currentTarget).toggleClass('open');
      $('.js-navbarCollapse').toggleClass('open');
    });

    /* Home section text effect */
    setTimeout(function() {
      runTextEffect();
    }, 1500);

    //NOTE: 
    //OPEN TRIGGER
    var openTrigger = $('.menu-trigger');
    var openTriggerTop = openTrigger.find('.menu-trigger-bar.top');
    var openTriggerMiddle = openTrigger.find('.menu-trigger-bar.middle');
    var openTriggerBottom = openTrigger.find('.menu-trigger-bar.bottom');

    //CLOSE TRIGGER
    var closeTrigger = $('.close-trigger');
    var closeTriggerLeft = closeTrigger.find('.close-trigger-bar.left');
    var closeTriggerRight = closeTrigger.find('.close-trigger-bar.right');

    //MENU
    var menuContainer = $('.menu-container');
    var menu = $('.menu');
    var menuTop = $('.menu-bg.top');
    var menuMiddle = $('.menu-bg.middle');
    var menuBottom = $('.menu-bg.bottom');

    //TL
    var tlOpen = new TimelineMax({paused: true});
    var tlClose = new TimelineMax({paused: true});

    //OPEN TIMELINE
    tlOpen.add("preOpen")
    .to(openTriggerTop, 0.4, {
      x: "+80px", y: "-80px", delay: 0.1, ease: Power4.easeIn, onComplete: function() {
        closeTrigger.css('z-index','999999');
      }
    }, "preOpen")
    .to(openTriggerMiddle, 0.4, {
      x: "+=80px", y: "-=80px", ease: Power4.easeIn,
      onComplete: function() {
        openTrigger.css('visibility','hidden');
      }
    }, "preOpen")
    .to(openTriggerBottom, 0.4, {
      x: "+=80px", y: "-=80px", delay: 0.2, ease: Power4.easeIn
    }, "preOpen")
    .add("open", "-=0.4")
    .to(menuTop, 0.8, {
      scaleY: 3,
      y: "20%",
      ease: Power4.easeInOut
    }, "open")
    .to(menuMiddle, 0.8, {
      scaleY: 2,
      ease: Power4.easeInOut
    }, "open")
    .to(menuBottom, 0.8, {
      scaleY: 3,
      y: "-114%",
      ease: Power4.easeInOut
    }, "open")
    .fromTo(menu, 0.6, {
      y: 30, opacity: 0, visibility: 'hidden'
    }, {
      y: 0, opacity: 1, visibility: 'visible', ease: Power4.easeOut
    }, "-=0.2")
    .add("preClose", "-=0.8")
    .to(closeTriggerLeft, 0.8, {
      x: "-=100px", y: "+=120px", ease: Power4.easeOut
    }, "preClose")
    .to(closeTriggerRight, 0.8, {
      x: "+=100px", y: "+=120px", delay: 0.2, ease: Power4.easeOut
    }, "preClose");

    //CLOSE TIMELINE
    tlClose.add("close")
      .to(menuTop, 0.2, {
      backgroundColor: "#f76363", ease: Power4.easeInOut, onComplete: function() {
        closeTrigger.css('z-index','5');
     openTrigger.css('visibility','visible');
      }
    }, "close")
    .to(menuMiddle, 0.2, {
      backgroundColor: "#f76363", ease: Power4.easeInOut
    }, "close") 
    .to(menuBottom, 0.2, {
      backgroundColor: "#f76363", ease: Power4.easeInOut
    }, "close")
      .to(menu, 0.6, {
      y: 20, opacity: 0, ease: Power4.easeOut, onComplete: function() {
        menu.css('visibility','hidden');
      }
    }, "close")
    .to(menuTop, 0.8, {
      scaleY: 0,
      y: "-113%",
      ease: Power4.easeInOut
    }, "close", "+=0.2")
    .to(menuMiddle, 0.8, {
      scaleY: 0,
      ease: Power4.easeInOut
    }, "close", "+=0.2")
    .to(menuBottom, 0.8, {
      scaleY: 0,
      y: "23%",
      ease: Power4.easeInOut,
      onComplete: function() {
        menuTop.css('background-color','#6fdfff');
        menuMiddle.css('background-color','#6fdfff');
        menuBottom.css('background-color','#6fdfff');
      }
    }, "close", "+=0.2")
    .to(closeTriggerLeft, 0.2, {
      x: "+=100px", y: "-=100px", ease: Power4.easeIn
    }, "close")
    .to(closeTriggerRight, 0.2, {
      x: "-=100px", y: "-=100px", delay: 0.1, ease: Power4.easeIn
    }, "close")
    .to(openTriggerTop, 1, {
      x: "-=80px", y: "+=80px", delay: 0.2, ease: Power4.easeOut
    }, "close")
    .to(openTriggerMiddle, 1, {
      x: "-=80px", y: "+=80px", ease: Power4.easeOut
    }, "close")
    .to(openTriggerBottom, 1, {
      x: "-=80px", y: "+=80px", delay: 0.1, ease: Power4.easeOut
    }, "close");

    //EVENTS
    openTrigger.on('click', function(){
      openMobileMenu();
    });
           
    closeTrigger.on('click', function(){
      closeMobileMenu();
    });

    function openMobileMenu() {
      $('.js-innerContainer').addClass('openMenu');
      if(tlOpen.progress() < 1){
        tlOpen.play();
      } else {
        tlOpen.restart();
      }
    }

    function closeMobileMenu() {
      if(tlClose.progress() < 1){
          tlClose.play();
      } else {
          tlClose.restart();
      }
      setTimeout(function() {
        $('.js-innerContainer').removeClass('openMenu');
      }, 500);      
    }
   })(jQuery);

function runTextEffect() {
    $('.strip').each(function(){
    var $t = $(this),
        rows = $.trim($t.html()).split('<br>');

    $('.js-textColumn').css('opacity', '1');
    $t.html('');
    $.each(rows, function(i, val){
      $('<span class="rowTxt"></span>').appendTo($t);

      var letters = $.trim(val).split('');

      $.each(letters, function(j, v){
        v = (v == ' ') ? '&nbsp;' : v;
        $('<span>' + $.trim(v) + '</span>').appendTo($('.rowTxt:last', $t));
      });
    });
  });
  
  for (i = 0; i < $('.strip span').length; i++) {
    (function(ind) {
      setTimeout(function(){
          $('.strip span:not(".rowTxt")').eq(ind).toggleClass('animate');
      }, ind * 15);
    })(i);
  }
  setTimeout(function() {
    dyanmicWordChange();
    $('.js-homeSectionButton').addClass('flipInX');
  }, 2000);
}

function dyanmicWordChange() {
  var words = document.getElementsByClassName('word');
  var wordArray = [];
  var currentWord = 0;

  words[currentWord].style.opacity = 1;
  for (var i = 0; i < words.length; i++) {
    splitLetters(words[i]);
  }

  function changeWord() {
    var cw = wordArray[currentWord];
    var nw = currentWord == words.length-1 ? wordArray[0] : wordArray[currentWord+1];
    for (var i = 0; i < cw.length; i++) {
      animateLetterOut(cw, i);
    }
    
    for (var i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      animateLetterIn(nw, i);
    }
    
    currentWord = (currentWord == wordArray.length-1) ? 0 : currentWord+1;
  }

  function animateLetterOut(cw, i) {
    setTimeout(function() {
      cw[i].className = 'letter out';
    }, i*80);
  }

  function animateLetterIn(nw, i) {
    setTimeout(function() {
      nw[i].className = 'letter in';
    }, 340+(i*80));
  }

  function splitLetters(word) {
    var content = word.innerHTML;
    word.innerHTML = '';
    var letters = [];
    for (var i = 0; i < content.length; i++) {
      var letter = document.createElement('span');
      letter.className = 'letter';
      letter.innerHTML = content.charAt(i);
      word.appendChild(letter);
      letters.push(letter);
    }
    
    wordArray.push(letters);
  }

  changeWord();
  setInterval(changeWord, 4000);
}