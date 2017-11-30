$(document).ready(function(){
	$('.testi-custom').owlCarousel({
		items: 3,
        loop:true,
        margin: 30,
        autoplay:true,
        autoplayTimeout:3000,

         responsive:{
            100:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });

    $('.patner-custom').owlCarousel({
        items: 4,
        loop:true,
        margin: 10,
        autoplay:true,
        autoplayTimeout:3000,

         responsive:{
            100:{
                items:3
            },
            700:{
                items:3
            },
            1000:{
                items:4
            }
        }
    });
});