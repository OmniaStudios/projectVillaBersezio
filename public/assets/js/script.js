
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
        $('html, body').animate({
            scrollTop: $('navbar').offset().top
        }, 1000);
    });
});

// Scroll About

$(document).ready(function () {
    $('.fa-user').on('click', function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $(".about-us").offset().top
        }, 1000);
    });
});

// Scroll New Post

$(document).ready(function () {
    $('.fa-newspaper').on('click', function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $(".new-post").offset().top
        }, 1000);
    });
});

// Scroll Gallery

$(document).ready(function () {
    $('.fa-images').on('click', function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $(".gallery").offset().top
        }, 1000);
    });
});

// Scroll Position

$(document).ready(function () {
    $('.fa-map').on('click', function () {
        $("html").scrollTop(0);
        $('html, body').animate({
            scrollTop: $(".position").offset().top
        }, 1000);
    });
});



// Scroll Contact

$(document).ready(function () {
    $('.fa-mobile-alt').on('click', function () {
        $("html").scrollTop(0);
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
    interval: null
})

  //=========
  //Tooltips
  //=========

$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
});


   /* $('#exampleModalLongTitle').on('shown.bs.modal', function () {
    console.log("DIO")
  }); */


$(document).on("show.bs.modal", "#exampleModally", function (event) {
    console.log("bella al");
    console.log("bella al");

    var button = $(event.relatedTarget);

    var titolo = button.data("titolo");
    var contenuto = button.data("contenuto")
    var data = button.data("ora")
    var caricato = button.data("caricato")
    var autore = button.data("autore")
    var autoreData = autore + ", " + caricato

    var modal = $(this);

    modal.find(".modal-title").text(Detokenize(titolo))
    modal.find(".text-modal").text(Detokenize(contenuto))
    modal.find(".text-calendar").text(Detokenize(data))
    modal.find(".text-clock").text(Detokenize(ora))
    modal.find(".text-subtitle").text(Detokenize(autoreData))
});