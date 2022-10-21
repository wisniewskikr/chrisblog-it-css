jQuery(document).ready(function($) {
  var alterClass = function() {
	  $('.responsive').hide();
	  var ww = document.body.clientWidth;
	  
	  if (ww > 1400) {
		  $('.only-xxl').show();
	  };
    
	  if (ww < 1400 && ww > 1200) {
		  $('.only-xl').show();
	  };
	  
	  if (ww < 1200 && ww > 992) {
		  $('.only-lg').show();
	  };
	  
	  if (ww < 992 && ww > 768) {
		  $('.only-md').show();
	  };
	  
	  if (ww < 768 && ww > 576) {
		  $('.only-sm').show();
	  };
	  
	  if (ww < 576) {
		  $('.only-xs').show();
	  };
    
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();
});