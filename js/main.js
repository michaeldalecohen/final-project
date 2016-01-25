$(function() {

	$(document).on("scroll",function(){
	    if($(document).scrollTop()>450){
	        $("header").removeClass("masthead").addClass("masthead-small");
	    } else{
	        $("header").removeClass("masthead-small").addClass("masthead");
	    }
	});

	$('a').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	});

	$("#owl-slider").owlCarousel({
	 
		navigation : true, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoHeight : true,
		navigationText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>']
		
  	});
	
	$(".content-carousel").owlCarousel({
	 
		navigation : false, // Show next and prev buttons
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem : true,
		autoHeight : true,
		pagination: false
		
  	});

	var r31 = $("#r31-carousel").data('owlCarousel');

	$('#r31-overview').on('click', function() {
		r31.goTo(0);
	});

  	$('#r31-specs').on('click', function() {
  		r31.goTo(1);
  	});

  	$('#r31-video').on('click', function() {
  		r31.goTo(2);
  	});

  	var r32 = $("#r32-carousel").data('owlCarousel');

	$('#r32-overview').on('click', function() {
		r32.goTo(0);
	});

  	$('#r32-specs').on('click', function() {
  		r32.goTo(1);
  	});

  	$('#r32-video').on('click', function() {
  		r32.goTo(2);
  	});

  	var r33 = $("#r33-carousel").data('owlCarousel');

	$('#r33-overview').on('click', function() {
		r33.goTo(0);
	});

  	$('#r33-specs').on('click', function() {
  		r33.goTo(1);
  	});

  	$('#r33-video').on('click', function() {
  		r33.goTo(2);
  	});

  	var r34 = $("#r34-carousel").data('owlCarousel');

	$('#r34-overview').on('click', function() {
		r34.goTo(0);
	});

  	$('#r34-specs').on('click', function() {
  		r34.goTo(1);
  	});

  	$('#r34-video').on('click', function() {
  		r34.goTo(2);
  	});

  	var r35 = $("#r35-carousel").data('owlCarousel');

	$('#r35-overview').on('click', function() {
		r35.goTo(0);
	});

  	$('#r35-specs').on('click', function() {
  		r35.goTo(1);
  	});

  	$('#r35-video').on('click', function() {
  		r35.goTo(2);
  	});

  	$('.btn').on('click', function() {
  		$('.btn').removeClass('btn-active');
  		$(this).toggleClass('btn-active');
  	});

});
