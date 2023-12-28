/*!
* Start Bootstrap - Freelancer v7.0.6 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});


// NAVIGATION //

$(document).ready(function() {
  "use strict";
  $('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
  $('.menu > ul > li > ul:not(:has(ul))').addClass('normal-sub');
  $(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\">&nbsp;</a>");
  $(".menu > ul > li").hover(function(e) {
    if ($(window).width() > 943) {
      $(this).children("ul").stop(true, false).fadeToggle(150);
      e.preventDefault();
    }
  });
  $(".menu > ul > li").click(function() {
    if ($(window).width() <= 943) {
      $(this).children("ul").fadeToggle(150);
    }
  });
  $(".menu-mobile").click(function(e) {
    $(".menu > ul").toggleClass('show-on-mobile');
    e.preventDefault();
  });
});
$(window).resize(function() {
  $(".menu > ul > li").children("ul").hide();
  $(".menu > ul").removeClass('show-on-mobile');
});




//COUNTER//

$(document).ready(function() {
    checkDisplay();
  
  $(window).on('resize scroll', function() {
    checkDisplay();
  });
});

function checkDisplay(){
  $('.prg-count').each(function() {
      var $this = $(this);
      if ($this.isOnScreen()) {
        var countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
          countNum: countTo
        }, {
          duration: 4000,
          easing: 'linear',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }
        });
      }
    });
}




// TESTIMONIAL //

$(document).ready(function() {
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
                breakpoint: 575,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                }
            }
        ]
    });
}); 


// flexiselDemo //

$("#flexiselDemo3").flexisel({
    visibleItems: 2,
    itemsToScroll: 1,         
    autoPlay: {
        enable: true,
        interval: 5000,
        pauseOnHover: true
    },
    
    responsiveBreakpoints: { 
        portrait: { 
            changePoint:480,
            visibleItems: 1,
            itemsToScroll: 1
        }, 
        landscape: { 
            changePoint:640,
            visibleItems: 2,
            itemsToScroll: 1
        },
        tablet: { 
            changePoint:768,
            visibleItems: 2,
            itemsToScroll: 1
        }
    }
});


$("#flexiselDemo4").flexisel({
  visibleItems: 2,
  itemsToScroll: 1,         
  autoPlay: {
      enable: true,
      interval: 4500,
      pauseOnHover: true
  },
  
  responsiveBreakpoints: { 
      portrait: { 
          changePoint:480,
          visibleItems: 1,
          itemsToScroll: 1
      }, 
      landscape: { 
          changePoint:640,
          visibleItems: 2,
          itemsToScroll: 1
      },
      tablet: { 
          changePoint:768,
          visibleItems: 2,
          itemsToScroll: 1
      }
  }
});


$("#flexiselDemo5").flexisel({
  visibleItems: 3,
  itemsToScroll: 1,         
  autoPlay: {
      enable: true,
      interval: 4000,
      pauseOnHover: true
  },
  
  responsiveBreakpoints: { 
      portrait: { 
          changePoint:480,
          visibleItems: 1,
          itemsToScroll: 1
      }, 
      landscape: { 
          changePoint:640,
          visibleItems: 2,
          itemsToScroll: 2
      },
      tablet: { 
          changePoint:768,
          visibleItems: 3,
          itemsToScroll: 3
      }
  }
});

/////////ONLOAD POPUP/////////



