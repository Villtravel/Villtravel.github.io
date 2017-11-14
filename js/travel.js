$(document).ready(function(){

	$('.text-intro h1,.text-intro p,.button-header a').addClass('active');

	//menu burger
	$('.menu-icon').click(function(){
		$('.menu #nav ul').slideToggle(400,function(){
			$(this).toggleClass('active').css('display','');
		});
	});


	//smoothscroll
	$('.scroll').click(function(xx){
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top
	}, 1000);
		xx.preventDefault();
		return false;
	});


	//menu-fixed, back-top and scoll animate
	var element  = $('.menu').height();
	var element2 = $('#header').height();
	var package  = $('.package').offset().top;
	var gallery  = $('.gallery').offset().top;
	var chois    = $('.chois-us').offset().top;
	var blog     = $('.blog').offset().top/1.1;
	$(window).scroll(function(){
		var posisionTop = $(window).scrollTop();

		//menu-fixed
		if(posisionTop > element) {
			$('.menu').addClass('fixed');
		}else{
			$('.menu').removeClass('fixed');
		};

		//back-top
		if (posisionTop > element2) {
			$('.back-top').addClass('showing');
		}else{
			$('.back-top').removeClass('showing');
		};

		//all scroll animate
		if (posisionTop > package) {
			$('.package .thumbnail-package').css({'transform':'scale(1)','opacity':'1','visibility':'visible'});
		};
		if (posisionTop > gallery) {
			$('.gallery .tab img').css({'transform':'translate(0px)','opacity':'1','visibility':'visible'});
		};
		if (posisionTop > chois) {
			$('.chois-us .thumbnail-icon').css({'transform':'translate(0px)','opacity':'1','visibility':'visible'});
		};
		if (posisionTop > blog) {
			$('.blog .blog-list .thumbnail-blog').css({'transform':'scale(1)','opacity':'1','visibility':'visible'});
		};
	});


	//dinamic background
	var images = [
		'assets/bg2.jpg',
		'assets/bg3.jpg',
		'assets/bg1.jpg'
	];
	var num     = 0;
	var count   = images.length;

	var interval = setInterval(function(){
		$('#header').fadeIn(5000, function(){
			$('#header').css({'background':'url('+images[num++]+')','background-attachment':'fixed','background-size':'cover'});
			if (num === count) {
				num =0;
			}
		})
	},5000);


	//tabulasi
	$('.link-tab').click(function(x){
		$('.tab').removeClass('active');
		$('.link-tab').removeClass('active');
		var target = $(this).attr('href');
		$(target).addClass('active');
		var active = $(this).addClass('active');
		$(active).addClass('active');

		$('.tab .gallery-img img').addClass('active');
		$('.tab .gallery-img img').css('transform','translateY(0px)');

		x.preventDefault();
		return false;
	});


});