$(document).ready(function() {
    $(window).on("scroll", function() {
          //add active class with background color on header when scroll 50px
        if($(window).scrollTop() >= 20) {
            $(".header").addClass("active");
            $('#scrollTop-btn').fadeIn();
        }
        
        else {
            //remove the background property so it comes transparent again 
           $(".header").removeClass("active");
           $('#scrollTop-btn').fadeOut()
        }

      });

    //   // Navbar  close auto when click outside
    //   $(document).click(
    //     function (event) {
    //         var target = $(event.target);
    //         var _mobileMenuOpen = $(".navbar-collapse").hasClass("show");
    //         if (_mobileMenuOpen === true && !target.hasClass("navbar-toggler")) {
    //             $("button.navbar-toggler").click();
    //         }
    //     }
    // );  
      
     

    //  When window scroll 20px  then bottom to top  button show
    $('#scrollTop-btn').click(function(event){
      event.preventDefault();
      $('html, body').animate({scrollTop:0},1000)
    });

    $('.navbar-toggler').click(function(){
        $('.header').addClass('active');
    });



    




    //Footer Subscribe From onclick form border and box-shadow apply
    $('.form-subscribe').click(function(){
      $(this).css({
        'border':'1px solid #eb8d0eed',
        'box-shadow': '0px 0px 5px rgba(235, 141, 14, .5)',
       
      });
    });
});





//Latest News Section Slider for images Slick slider code for responsive..

$('.slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  focusOnSelect: true,
  autoplay: true,
  autoplaySpeed:1000,
  infinite: true,
  dots: true,
  arrow: false,

  responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            adaptiveHeight: true,
          },
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

});

// On before slide change
$('.slider').on('beforeChange', function(event, { slideCount: count }, currentSlide, nextSlide){
  let selectors = [nextSlide, nextSlide - count, nextSlide + count].map(n => `[data-slick-index="${n}"]`).join(', ');
  $('.slick-now').removeClass('slick-now');
  $(selectors).addClass('slick-now');
});

$('[data-slick-index="0"]').addClass('slick-now');









