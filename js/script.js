$(function(){
	$(document).ready(function(){
	  	$("#owl-demo").owlCarousel({		 
		    slideSpeed : 300,
		    paginationSpeed : 400,
		 
		    animateOut: 'slideOutDown',
		    animateIn: 'flipInX',
		    items:1,
		    loop: true,
		    stagePadding:30,
    		smartSpeed:450,
    		itemsDesktop : false,
		    itemsDesktopSmall : false,
		    itemsTablet: false,
		    itemsMobile : false,
		    margin:30
		 
		});

			$('.overlay').click(function() {
			$(this).remove();
		});
	});
});

$(window).load(function () {
    var imgWidht = $('.team img').width();
    $('.team img').each(function () {
       $(this).attr('width', imgWidht);
    });
    $('.team .portfolio').css('max-width', imgWidht + 'px');
});