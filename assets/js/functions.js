$( document ).ready(function() {

  		showDropDown()


	// Функція виводу(ховання) повідомлення щодо порожньої корзини
	function listEmptyMessage() {

		// Перевіряємо чи є щось в корзині з класом .item
		if ($('.item-wishlist').children().hasClass('item')) {

			// Якщо є, то ми ховаємо повідомлення
			$('.list-empty').hide();

		} else {

			// Якщо блок порожній, то ми відображаємо повідомлення
			$('.list-empty').show();
		}
	}

	

	// Функція копіювання обкладинки для товару
  	function copyBackgroundImage(x) {


	  	targett = x
	  	console.log(targett);

	  	var FF = !(window.mozInnerScreenX == null);

	  	// Якщо браузер firefox
		if(FF) {
	  	$('.item:last > .cover').css('background', $(targett.find('.cover')).css('background-image'));
			console.log(targett.find('.cover'));

		// Якщо інший браузер
		} else {

			var target = $(event.target) || $(event.srcElement)

	  		// Якщо натиснули на зображення товару
	  		if (target.is('.cover')) {
				$('.item:last > .cover').css('background', $(event.target).css('background'));

			// Якщо натиснули на елемент товару
	  		} else {
	  			var bg = $(event.srcElement).parent('.item').find('.cover').css('background-image');
	  			$('.item:last > .cover').css({
	  				'background' : bg,
	  				'background-position' : 'center',
	  			});
	  			if ($(event.srcElement).is('.item')) {
		  			var bg = $(event.srcElement).find('.cover').css('background-image');
		  			$('.item:last > .cover').css({
		  				'background' : bg,
		  				'background-position' : 'center',
		  			});
	  			}

	  		// Якщо натиснули на саму обгортку товару
	  		} if (target.is('.item')) {
		  		$('.item:last > .cover').css('background', $(target.find('.cover')).css('background'));
		  	  }
		}
	}

	// Функція показу випадаючого меню
	function showDropDown() {
		$('.item-wishlist .item:last').hover(function(){
			$('.more-options').click(function() {
				$(this).find('.dropdown-content').toggleClass('dropdown-content-show');
				$(this).toggleClass('more-options-open');
			});

			$('.more-options').mouseleave(function(event) {
				$(this).find('.dropdown-content').removeClass('dropdown-content-show')
				$(this).removeClass('more-options-open')
			});				
		});
	}

	// Функція видалення товару з корзини
	function removeItem() {
	 	$('.item-wishlist .item:last .remove').click(function(){

				$(this).closest('.item').find('.removed-bg').css('display', 'block');
				$(this).closest('.item').find('.red-bg').removeClass('red-bg');
				$(this).closest('.item').find('.more-options').hide();
				$(this).closest('.item').find('.view-item').remove();

		});
	}

	// Адаптивне меню для мобільного вигляду
	$('.hamburger').click(function(event) {
		// console.log('test');
		$('.l-header-content').toggleClass('l-header-mini');
		if (!$('.l-header-content').hasClass('l-header-mini')) {
			$('.header-nav').hide();
			// if ($(window).width()) {}
			
		} else {
			$('.header-nav').show();
		}
	});

	// Копіюємо всі блоки із галереї товарів до списку та трішки редагуємо їх
	// Клік по елементу
	$(".item").click(function() {
		console.log('test');
	

		// Перемикаємо класс .mark по кліку
		$(this).toggleClass("mark")

		// Якщо клас наявний то добавляємо цей товар до нашого списку
		if ($(this).hasClass('mark')) {

			// Даємо видимість при першому кліку блоку .already
			$(this).children('.already').show();

			// Генеруємо випадкове число для скріпки
			var randomNumber = Math.floor(Math.random() * 4) + 1

		  	// Копіюємо обраний товар та добавляємо до копії нашу випадкову скріпку
		  	$(this).clone().appendTo($(".item-wishlist")).prepend('<img class="clip"src="assets/img/clip' + randomNumber + '.png"/>');
		  	$('.item-wishlist > .item > .item-name').text('Remote control Tractor');

	  		//Виклик функції копіювання обкладинки для товару
		  	copyBackgroundImage($(this));

		  	// Створюємо змінну для збереження старого текста із класу .item-price
		  	var oldText = $(this).children('.item-price').text();

		  	// Потім перевіряємо чи має клас .item-price клас added
			if (!$('.item-price').hasClass('added')) {

					// якщо не має то вставляємо наш текст(Best Price) + старий текст (ціна)
			  		$(".item-wishlist > .item > .item-price").text("Best Price: " + oldText);

			  		// та добавляємо клас .added, щоб помітити товар в якому ми добавили текст попереду і більше не добавляти
			  		$(".item-wishlist > .item >", this).addClass('added');
		  	}


		// Якщо клас відсутній то убираємо цей товар із нашого списку
		} else {
			$(this).children('.already').hide();

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

			showDropDown()

		}

		showDropDown()
		removeItem()
		listEmptyMessage();

  	});
	
  		
  		

});
