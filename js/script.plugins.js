;(function($){

	"use strict";

	$(document).ready(function(){

		/* ------------------------------------------------
				FormStyler
		------------------------------------------------ */

			if($('select').length){

				$('select').styler();		

			}

			if($('input[type="file"]:not([class])').length){

				$('input[type="file"]:not([class])').styler({

				});		

			}

			if($('input[class="file_img"]').length){

				$('input[class="file_img"]').styler({

					filePlaceholder: 'Название картинки',
					fileBrowse: 'Выбрать картинку',

				});		

			}

			if($('input[class="file_doc"]').length){

				$('input[class="file_doc"]').styler({

					filePlaceholder: 'Название документа',
					fileBrowse: 'Прикрепить файл',

				});		

			}



        /* ------------------------------------------------
				End of FormStyler
		------------------------------------------------ */

	});

	$(window).load(function(){

		/* ------------------------------------------------
				arcticmodal
		------------------------------------------------ */

			$('[data-modal]').on('click', function(){

				var modal = $(this).attr('data-modal');

				$(modal).arcticmodal();

			});

        /* ------------------------------------------------
				End of arcticmodal
		------------------------------------------------ */

	});

})(jQuery);