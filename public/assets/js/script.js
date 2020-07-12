
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
    interval: null
  })

  //=========
  //Tooltips
  //=========

  $(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
  });


  $('#exampleModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

  
//=========
//Dashboard
//=========

// Time Script
function startTime()
{
var today=new Date();
var h=today.getHours();
var m=today.getMinutes();
var s=today.getSeconds();
m=checkTime(m);
s=checkTime(s);
document.getElementById('txt').innerHTML=h+":"+m+":"+s;
t=setTimeout('startTime()',500);
}
function checkTime(i)
{
if (i<10)
{
i="0" + i;
}
return i;
}


//ToolTip
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  }) 

//Modal
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })

//Hide & Seek Password
function myFunction() {
  var x = document.getElementById("myInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
   }
}

//Hide & Seek Password 2
function myFunction2() {
  var x = document.getElementById("myInput2");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
   }
}

//Hide & Seek Password 3
function myFunction3() {
  var x = document.getElementById("myInput3");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
   }
}

//Hide & Seek Password 4
function myFunction4() {
  var x = document.getElementById("myInput4");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
   }
}
 
// $(document).ready(function(){
//   $('#modal').on('show.bs.modal', function (event) {
//     console.log('albanese')
//     var button = $(event.relatedTarget) // Button that triggered the modal
//     var recipient = button.data('request') // Extract info from data-* attributes
//     // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//     // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//     var modal = $(this)
//     console.log(modal);
//     // modal.find('.modal-title').text('New message to ' + recipient)
//     // modal.find('.modal-body input').val(recipient)
//   })
  

// });