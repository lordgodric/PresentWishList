$(document).ready(function(){$(".item").click(function(){function t(){$(".item:last > a > .cover").css("background",$(event.target).css("background"))}$(this).clone().appendTo($(".item-wishlist")),t();var e=$(this).children(".item-price").text();$(".item-price").hasClass("added")||($(".item-wishlist > .item > .item-price").text("Best Price: "+e),$(this).addClass("added"))}),""==$(".item-wishlist").html()&&console.log("test")});