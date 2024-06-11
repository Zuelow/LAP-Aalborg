! function($) {
    "use strict";

    var PogoApp = function() {};

    PogoApp.prototype.initStickyMenu = function() {
        $(window).scroll(function() {
            var scroll = $(window).scrollTop();

            if (scroll >= 50) {
                $(".sticky").addClass("nav-sticky");
            } else {
                $(".sticky").removeClass("nav-sticky");
            }
        });
    },
    
    PogoApp.prototype.initSmoothLink = function() {
        $('.menu-nav a').on('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 0
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    },

    PogoApp.prototype.initMenuOpen = function() {
        $(".menu-btn-open").on("click", function(e) {
            e.preventDefault();
            
            $(".menu-lightbox").fadeIn("normal", function(){$(this).addClass("active")});
            $(".menu-btn-close").addClass("loaded");
        });
    },    

    PogoApp.prototype.initMenuClose = function() {
        $(".menu-btn-close").on("click", function(e) {
            e.preventDefault();
            
            $(".menu-lightbox").delay(100).removeClass("active").delay(200).fadeOut("slow");
            $(".menu-btn-close").removeClass("loaded");
        });
    }, 

    PogoApp.prototype.initMenuToggleClose = function() {
        $(".menu-nav li a").on("click", function(e) {
            $(".menu-btn-close").trigger("click");
        });

    }, 

    PogoApp.prototype.initFullPages = function() {
        $("#fullpage").fullpage({
            anchors: ['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage', '6thPage'],
            menu: '#menu',
            scrollingSpeed: 800,
            autoScrolling: true,
            scrollBar: true,
            easing: 'easeInQuart',
            resize : false,
            paddingTop: '0px',
            paddingBottom: '80px',
            navigation: true,
            navigationPosition: 'right',
            navigationTooltips: ['Hjem', 'Organisation', 'Om LAP', 'Det mener LAP', 'Faq', 'Kontakt'],
            responsiveWidth: 1100,
        });
    },

    PogoApp.prototype.initVideo = function() {
        $('.video-play-icon').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    },

    PogoApp.prototype.initScreenshot = function() {
        $(".owl-screenshot").owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause:true,
            itemsDesktop : [1199,1],
            itemsDesktopSmall : [979,1]
        });
    },    

    PogoApp.prototype.initTestimonial = function() {
        $("#owl-demo").owlCarousel({
            autoPlay: 3000,
            stopOnHover: true,
            navigation: false,
            paginationSpeed: 1000,
            goToFirstSpeed: 2000,
            singleItem: true,
            autoHeight: true
        });
    }, 

    PogoApp.prototype.initScreenMFP = function() {
        $('.mfp-image').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1]
            }
        });
    },    

    
    PogoApp.prototype.init = function() {
        this.initStickyMenu();
        this.initSmoothLink();
        this.initMenuOpen();
        this.initMenuClose();
        this.initMenuToggleClose();
        this.initFullPages();
        this.initVideo();
        this.initScreenshot();
        this.initTestimonial();
        this.initScreenMFP();
    },
    //init
    $.PogoApp = new PogoApp, $.PogoApp.Constructor = PogoApp
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.PogoApp.init();
}(window.jQuery);
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_y3tqrmb';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
