$( document ).ready(function() {
	
	// Копіюємо всі блоки із галереї товарів до списку та трохи корегуємо їх
	// Клік по елементу
	$(".item").click(function() {

		// Перемикаємо класс .mark по кліку
		$(this).toggleClass("mark")

		// Якщо клас наявний то добавляємо цей товар до нашого списку
		if ($(this).hasClass('mark')) {

			// Даємо видимість при першому кліку блоку .already
			$(this).children('.already').css({
				display: 'block'
			});

			//Функція копіювання обкладинки для товару
		  	function copyBackgroundImage() {
		  			$('.item:last > .cover').css('background', $(event.target).css('background'));
	  		}

		  	// Копіюємо обраний товар 
		  	$(this).clone().appendTo($(".item-wishlist"));
		  	
	  		//Виклик функції копіювання обкладинки для товару
		  	copyBackgroundImage();

		  	// Створюємо змінну для збереження старого текста із класу .item-price
		  	var oldText = $(this).children('.item-price').text();

		  	// Потім перевіряємо чи має клас .item-price клас added
			if (!$('.item-price').hasClass('added')) {

					// якщо не має то вставляємо наш текст(Best Price) + старий текст (ціна)
			  		$(".item-wishlist > .item > .item-price").text("Best Price: " + oldText);

			  		// та добавляємо клас .added, щоб помітити товар в якому ми добавили текст попереду і більше не добавляти
			  		$(".item-wishlist > .item >", this).addClass('added');
		  	}

		// Якщо клас відсутній то убираємо цей товар із нашого списк
		} else {
			$(this).children('.already').css({
				display: 'none'
			});

			// Видалимо класс .mark із елементів з корзини
			$(".item-wishlist > .item").removeClass('mark')

			// Перевіримо чи є в корзині наш товар
			if ($('.item-wishlist').find($(this))) {

				// Візьмемо назву класів блоку в галереї 
				var itemInGallery = $(this).attr('class');

				// Переберемо всі елементи в корзині
				$.each($('.item-wishlist').children(), function(index, val) {

					// Візьмемо назву класів блоку в корзині
					var itemInWishList = $(this).attr('class');

					// Порівняємо назви їх класів
					if (itemInWishList == itemInGallery) {

						// Якщо вони співпадають - то видаляємо
						$(this).remove();
					}
				});
			} else {
				console.log('error');
			}

		}
	  
  	});

});
