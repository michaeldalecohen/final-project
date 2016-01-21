$(function() {
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

		var r31 = $(".content-carousel").data('owlCarousel');

		$('#overview').on('click', function() {
			r31.goTo(0);
		});

	  	$('#r31-specs').on('click', function() {
	  		r31.goTo(2);
	  	});

	function filterPath(string) {
	  return string
	    .replace(/^\//,'')
	    .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
	    .replace(/\/$/,'');
	  }
	  var locationPath = filterPath(location.pathname);
	  var scrollElem = scrollableElement('html', 'body');
	 
	  $('a[href*=#]').each(function() {
	    var thisPath = filterPath(this.pathname) || locationPath;
	    if (  locationPath == thisPath
	    && (location.hostname == this.hostname || !this.hostname)
	    && this.hash.replace(/#/,'') ) {
	      var $target = $(this.hash), target = this.hash;
	      if (target) {
	        var targetOffset = $target.offset().top;
	        $(this).click(function(event) {
	          event.preventDefault();
	          $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
	            location.hash = target;
	          });
	        });
	      }
	    }
	  });
	 
	  // use the first element that is "scrollable"
	  function scrollableElement(els) {
	    for (var i = 0, argLength = arguments.length; i <argLength; i++) {
	      var el = arguments[i],
	          $scrollElement = $(el);
	      if ($scrollElement.scrollTop()> 0) {
	        return el;
	      } else {
	        $scrollElement.scrollTop(1);
	        var isScrollable = $scrollElement.scrollTop()> 0;
	        $scrollElement.scrollTop(0);
	        if (isScrollable) {
	          return el;
	        }
	      }
	    }
	    return [];
	  }
});