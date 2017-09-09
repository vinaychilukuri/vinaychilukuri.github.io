<script>
	 $(document).ready(function() {
	    $('.gallery').lightSlider({
	        gallery:true,
	        item:1,
	        thumbItem:3,
	        slideMargin: 0,
	        speed: 800,
	        mode: 'fade',
	        easing: 'ease-in-out',
	        cssEasing: 'ease-in-out',
	        keyPress: true,
	        pauseOnHover: true,
	        auto:false,
	        autoWidth: false,
	        loop:true,
	        onSliderLoad: function() {
	            $('.gallery').removeClass('cS-hidden');
	        }  
	    });

	    $('.gallery-autoplay').lightSlider({
	        gallery:false,
	        item:1,
	        thumbItem:3,
	        slideMargin: 0,
	        speed: 800,
	        mode: 'fade',
	        easing: 'ease-in-out',
	        cssEasing: 'ease-in-out',
	        keyPress: true,
	        pauseOnHover: true,
	        auto:true,
	        autoWidth: false,
	        loop:true,
	        onSliderLoad: function() {
	            $('.gallery').removeClass('cS-hidden');
	        }  
	    });

	    $('#course-bar + ul').lightSlider({
	        gallery:true,
	        item:1,
	        thumbItem:4,
	        slideMargin: 0,
	        speed: 800,
	        mode: 'fade',
	        easing: 'ease-in-out',
	        cssEasing: 'ease-in-out',
	        keyPress: true,
	        pauseOnHover: true,
	        auto:false,
	        autoWidth: false,
	        loop:true,
	        onSliderLoad: function() {
	            $('.gallery').removeClass('cS-hidden');
	        }  
	    });

	});
</script>