;(function($){

	jQuery.fn.extend({
	  w:0, 
	  h:0, 
	  adjust: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({
	        'position':'absolute',
	        'left':'50%',
	        'top':'50%',
	        'margin-left':'-' + (w / 2) + 'px',
	        'margin-top':'-' + (h / 2) + 'px'
	      });
	  },
	  adjustW: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({
	        'position':'absolute',
	        'left':'50%',
	        'margin-left':'-' + (w / 2) + 'px'
	      });
	  },
	  adjustH: function(){
	      w = $(this).innerWidth();
	      h = $(this).innerHeight();
	      $(this).css({
	        'position':'absolute',
	        'top':'50%',
	        'margin-top':'-' + (h / 2) + 'px'
	      });
	  }
	});

})(jQuery);
