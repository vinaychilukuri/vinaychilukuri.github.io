<script>
	 $(document).ready(function() {
	    $('.gallery').lightSlider({
	        gallery:true,
	        item:1,
	        thumbItem:3,
	        slideMargin: 0,
	        speed: 850,
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