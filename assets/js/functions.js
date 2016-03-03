$( document ).ready(function() {
	
	// Копіюємо всі блоки із галереї товарів до списку та трохи корегуємо їх
	// Вставка тексту перед ціною 
	$(".item").click(function() {

		//Функція копіювання обкладинки для товару
	  	function copyBackgroundImage() {
			$('.item:last > a > .cover').css('background', $(event.target).css('background'))
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
		  		$(this).addClass('added');
	  	}
	  	
	    

	    
  	});


});
