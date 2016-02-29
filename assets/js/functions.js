$( document ).ready(function() {

  $(".item").click(function() {
  	$(this).clone().appendTo($(".item-wl-wrapper"));
  	$(this).children('.cover').css({
  		
  	});
  });

});
