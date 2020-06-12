// Scroll Arrow
// ====================================
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

//Scroll
$(document).ready(function () {
    $('#pagepiling').pagepiling({
        menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

        //events
        onLeave: function (index, nextIndex, direction) { },
        afterLoad: function (anchorLink, index) { },
        afterRender: function () { },
    });
});


