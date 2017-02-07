;(function($){

	"use strict";

	var Core = {

		DOMReady: function(){

			var self = this;

			self.leftMenu();
			self.menuTggle();
			self.dropdown();
			self.addFormInfo.init();

		},

		windowLoad: function(){

			var self = this;

			self.proggresBur();
			
		},



		/**
		**	Menu Tggle
		**/


		leftMenu: function(){

			$('.left_menu li').on('click',function(){
				$(this).find("ul").slideToggle("medium").parent("li").toggleClass('active');
				
			});

		},

		menuTggle: function(){

			$('.btn_menu_toggle').on('click',function(){
				$(this).toggleClass('active');
				$('body').toggleClass('close_left_menu');
				
			});

		},


		/**
		**	Dropdown
		**/

		dropdown: function(){

			$('.custom_dropdown_btn').on('click',function(){
				$(this).closest('.custom_dropdown_box').toggleClass('opened');
			});

			$(document).on('click', function(e){

				if(!$(e.target).closest('.custom_dropdown_box').length){
					$('.custom_dropdown_box').removeClass('opened');
				}

			});

		},



		/**
		**	Proggres Bur
		**/

		proggresBur: function(){

			$('.proggres_bur').each(function(index, el){

				var percent = $(el).attr('data-val');

				$(el).find('.proggres_bur_val').text(percent+'%');
				$(el).find('.proggres_bur_inner').animate({'width':percent+'%'},500);
			});

		},



		/**
		**	Form button add clone input
		**/

		addFormInfo: {

			init: function(){

				var self = this;

				

				self.templateContactPerson = '<div class="added_fields remove_box"><div class="close_btn_wr"><button class="close_btn" type="button"><i class="ti-close"></i></button></div><div class="form_row"><div class="label_col_1"><label>ФИО контакт. лица<i>*</i></label></div><div class="input_box1"><input type="text" placeholder="Иван Александрович Петров"></div></div><div class="form_row"><div class="label_col_1"><label>Должность</label></div><div class="input_box1"><input type="text" placeholder="Менеджер"></div></div><div class="form_row"><div class="label_col_1"><label>Телефон</label></div><div class="input_box1"><input type="tel" placeholder="+7 9510 696 564"></div></div><div class="form_row"><div class="label_col_1"><label>E-mail</label></div><div class="input_box1"><input type="email" placeholder="info@mail.ru"></div></div><div class="form_row"><div class="label_col_1"><label>Адрес</label></div><div class="input_box1"><input type="text" placeholder="Адрес"></div></div></div>';


				

                self.templateContactParameter ='<div class="remove_box"><div class="close_btn_wr"><button class="close_btn" type="button"><i class="ti-close"></i></button></div><div class="form_row"><div class="label_col_1"><label>Параметр</label></div><div class="input_box2"><input type="text"></div><div class="label_col_1"><label>Единица</label> </div><div class="input_box2"><input type="text"></div></div><div class="form_row"><div class="label_col_1"><label>Значение</label></div><div class="input_box2"><input type="text"></div></div></div>';


                self.templateAddFile ='<div class="form_row remove_box"><h6 class="name_load_file">Название файла</h6><a href="javascript:;" class="close_btn type1"><i class="ti-close"></i></a><div class="align_justify"><div class="file_name_box"><input type="text" placeholder="Имя"></div> <button type="button" class="btn grey border">Загрузить исходный файл</button> <button type="button" class="btn grey border">Загрузить PDF файл</button></div></div>';

                self.templateContactType ='<div class="remove_box"><div class="close_btn_wr"><button class="close_btn" type="button"><i class="ti-close"></i></button></div><legend>Данные об объекте</legend><div class="form_row"><div class="label_col_1"><label>Тип данных</label></div><div class="input_box1"><input type="text"></div></div><div class="form_template" data-template="2"></div><div class="form_row button_row"><div class="btn_plus add_form_btn alignright"><span class="icon_plus"><i class="fa fa-plus"></i></span>Добавить параметр</div></div></div>';
                
                self.templates = [self.templateContactPerson, self.templateContactParameter, self.templateAddFile, self.templateContactType];

                self.event();

			},

			event: function(){

				var self = this;

				$('.add_form_btn').on('click',function(){
					 
					var parent = $(this).closest('fieldset').find('.form_template'),
					 	tamplate = parent.attr('data-template');

					self.addFields(tamplate, parent);

				});

				$('body').on("click", '.close_btn', function(){

					var parent = $(this).closest('.remove_box'); 
					self.removeInfo(parent);
				});
				
			},

			addFields: function(idTempl, parent){

				var self = this;

				parent.append(self.templates[idTempl-1]);

			},

			removeInfo: function(parent){

				var self = this;

				parent.animate({
					'opacity': 0
				},500,function(){
					parent.slideUp(500, function(){
						parent.remove();
					});
				});

			},

		},


	}


	$(document).ready(function(){

		Core.DOMReady();

	});

	$(window).load(function(){

		Core.windowLoad();

	});

})(jQuery);