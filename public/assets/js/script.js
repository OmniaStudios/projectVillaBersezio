//=============
// Scroll Arrow
// ============

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

$(document).ready(function () {
    $('.fa-long-arrow-alt-down').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".title-homepage").offset().top
        }, 1000);
    });
});

//==============
// Navbar-Right
//==============

// Scroll Home

$(document).ready(function () {
    $('.fa-home').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $('navbar').offset().top
        }, 1000);
    });
});

// Scroll About

$(document).ready(function () {
    $('.fa-user').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".about-us").offset().top
        }, 1000);
    });
});

// Scroll New Post

$(document).ready(function () {
    $('.fa-newspaper').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".new-post").offset().top
        }, 1000);
    });
});

// Scroll Gallery

$(document).ready(function () {
    $('.fa-images').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".gallery").offset().top
        }, 1000);
    });
});

// Scroll Position

$(document).ready(function () {
    $('.fa-map').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".position").offset().top
        }, 1000);
    });
});



// Scroll Contact

$(document).ready(function () {
    $('.fa-mobile-alt').on('click', function () {
        $("html").scrollTop(0);
        console.log("Clicked!");
        $('html, body').animate({
            scrollTop: $(".contact").offset().top
        }, 1000);
    });
});

//======================
//Navbar + Pagepiling.js
//======================

$(document).ready(function() {
    $('#pagepiling').pagepiling({
      menu: '#myMenu',
        scrollingSpeed: 300,
      anchors: ['home', 'about', 'post', 'gallery', 'position', 'contact'],
      sectionsColor: ['#000', '#000', '#000', '#000', '#000', '#000'],
      navigation: {
        'position': 'right',
        'tooltips': ['Home', 'Chi Siamo', 'Nuovi Post', 'Galleria', 'Dove Siamo', 'Contatti']
      },
      afterRender: function() {
        $('#myMenu').addClass('custom');
      },
      afterLoad: function(anchorLink, index) {
        if (index > 1) {
          $('#myMenu').removeClass('custom');
        } else {
          $('#myMenu').addClass('custom');
        }
      }
    });
  
  });

  //====================
  //Carousel Full Screen
  //====================

  $('.carousel').carousel({
    interval: 4000
  })

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });
