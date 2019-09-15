$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function(){
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter:'*',
        animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
        }
    })
})
jQuery(document).ready(function($) {

    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false 
    }); //options of superslides, removed pagination

    var typed = new Typed(".typed", {
        strings: ["Systems Developer.", "Web Developer.", "Computer Sci. Major", "DevOps Enthusiast."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    }); // calling the code

    $("#carouselExampleControls").carousel({
		interval : false
    }); //stoping auto slide for carousel
    

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
                
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })



    $("[data-fancybox]").fancybox();


   
$("#filter a").click(function(){
   $("#filter .current").removeClass("current");
   $(this).addClass("current");

   var selector = $(this).attr("data-filter"); //retrieving data-filter valuse

   $(".items").isotope({
        filter:selector,
        animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
    }
});

return false;


});


   
   const nav = $("#navigation");
   const navTop = nav.offset().top;

   $(window).on("scroll", stickyNavigation);

   function stickyNavigation() {

        const body = $("body");

        if($(window).scrollTop() >= navTop) {
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass=("fixedNav");
        }
        else {
            body.css("padding-top", 0);
            body.removeClass("fixedNav");
        }

        


   }

});

$(document).ready(function() {
    $('a[href^="#"]').click(function() {
        var hash = $(this).attr('href');
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 1500);
          return false;
      });
  });

    
  

  




