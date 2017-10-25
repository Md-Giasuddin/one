$(function(){
    // colaps icon change
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find(".fa-plus").removeClass("fa-plus").addClass("fa-minus");
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find(".fa-minus").removeClass("fa-minus").addClass("fa-plus");
    });
    
    // portfolio slick slider
     $('.portfolio').slick({
      dots: false,
      infinite: true,
      speed: 600,
        arrows:true,
      slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1500,
         prevArrow: '.icon_two',
        nextArrow: '.icon_one',
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    // end
    
   // start
     $('.logo_total_fature').slick({
      dots: false,
      infinite: true,
      speed: 1000,
        arrows:true,
      slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 1000,
         prevArrow: '.icon_four',
        nextArrow: '.icon_three',
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });   // end
    
    
    // start media slider
     $('.media_slider').slick({
      dots: false,
      infinite: true,
      speed: 1000,
        arrows:false,
      slidesToShow: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        vertical: true,
//         centerPadding: '50px',
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });   // end media slider
    
    
    // news fature slider start
     $('.news_fature').slick({
      dots: true,
      infinite: true,
      speed: 600,
        arrows:false,
      slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 1500,
//         prevArrow: '.icon_two',
//        nextArrow: '.icon_one',
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    // news fature slider end 
    
    
   // scroll top plugin
    $(window).scroll(function(){
	if($(this).scrollTop()>300){
		$("#gotoup").fadeIn(1000);
	}else{
	$("#gotoup").fadeOut(1000);
	
	}

});
 
$("#gotoup").click(function(){
	 $("html,body").animate({scrollTop:0},1500);

});
    
   // wow js start 
     new WOW().init();
   // wow js end 
    
    
    
});




