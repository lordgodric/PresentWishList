$(document).ready(function(){function e(){$(".item-wishlist").children().hasClass("item")?$(".list-empty").hide():$(".list-empty").show()}function s(){var e=$(event.target)||$(event.srcElement);if(console.log($(event.target)),console.log($(event.srcElement)),e.is(".cover"))console.log("zobr"),$(".item:last > .cover").css("background",$(event.target).css("background"));else{var s=$(event.srcElement).parent(".item").find(".cover").css("background-image");if($(".item:last > .cover").css({background:s,"background-position":"center"}),$(event.srcElement).is(".item")){var s=$(event.srcElement).find(".cover").css("background-image");$(".item:last > .cover").css({background:s,"background-position":"center"})}}e.is(".item")&&(console.log("obg"),$(".item:last > .cover").css("background",$(e.find(".cover")).css("background")),console.log($("event.srcElement")))}$(".item").click(function(){if($(this).toggleClass("mark"),$(this).hasClass("mark")){$(this).children(".already").show();var t=Math.floor(4*Math.random())+1;$(this).clone().appendTo($(".item-wishlist")).prepend('<img class="clip"src="assets/img/clip'+t+'.png"/>'),s();var i=$(this).children(".item-price").text();$(".item-price").hasClass("added")||($(".item-wishlist > .item > .item-price").text("Best Price: "+i),$(".item-wishlist > .item >",this).addClass("added"))}else if($(this).children(".already").hide(),$(".item-wishlist > .item").removeClass("mark"),$(".item-wishlist").find($(this))){var c=$(this).attr("class");$.each($(".item-wishlist").children(),function(e,s){var t=$(this).attr("class");t==c&&$(this).remove()})}else console.log("error");e()})});