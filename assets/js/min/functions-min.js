$(document).ready(function(){function e(){$(".item-wishlist").children().hasClass("item")?$(".list-empty").hide():$(".list-empty").show()}function t(){var e=$(event.target)||$(event.srcElement);if(console.log($(event.target)),console.log($(event.srcElement)),e.is(".cover"))console.log("zobr"),$(".item:last > .cover").css("background",$(event.target).css("background"));else{var t=$(event.srcElement).parent(".item").find(".cover").css("background-image");if($(".item:last > .cover").css({background:t,"background-position":"center"}),$(event.srcElement).is(".item")){var t=$(event.srcElement).find(".cover").css("background-image");$(".item:last > .cover").css({background:t,"background-position":"center"})}}e.is(".item")&&(console.log("obg"),$(".item:last > .cover").css("background",$(e.find(".cover")).css("background")),console.log($("event.srcElement")))}$(".hamburger").click(function(e){console.log("test"),$(".l-header-content").toggleClass("l-header-mini"),$(".l-header-content").hasClass("l-header-mini")?$(".header-nav").show():$(".header-nav").hide()}),$(".item").click(function(){if($(this).toggleClass("mark"),$(this).hasClass("mark")){$(this).children(".already").show();var s=Math.floor(4*Math.random())+1;$(this).clone().appendTo($(".item-wishlist")).prepend('<img class="clip"src="assets/img/clip'+s+'.png"/>'),$(".item-wishlist > .item > .item-name").text("Remote control Tractor"),t();var i=$(this).children(".item-price").text();$(".item-price").hasClass("added")||($(".item-wishlist > .item > .item-price").text("Best Price: "+i),$(".item-wishlist > .item >",this).addClass("added"))}else if($(this).children(".already").hide(),$(".item-wishlist > .item").removeClass("mark"),$(".item-wishlist").find($(this))){var r=$(this).attr("class");$.each($(".item-wishlist").children(),function(e,t){var s=$(this).attr("class");s==r&&$(this).remove()})}else console.log("error");e()})});