$( document ).ready(function() {

  $(".item").click(function() {
  	$(this).clone().appendTo($(".item-wishlist"));
  	$(".item-wl-wrapper")
  });

});
