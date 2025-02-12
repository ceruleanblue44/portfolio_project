<template>
	<div class="instructions">
		<div class="instructions__main">
			<div class="instructions__top mt-rem-0-25 mt-xs-rem-0-25">
				<div class="d-flex ml-rem-14-0 ml-xs-rem-1-0 mb-xs-rem-0-50"
					 style="width: 239px">
					<p class="text text-s mt-rem-2-50 mt-xs-rem-2-0">
						Текущий трек
					</p>
					<img class="instructions__arrow ml-rem-0-50 ml-xs-rem-0-50"
						 src="../../assets/img/instructions/instructions-arrow.svg"
						 alt="">
				</div>
				<div class="hide-xs">
					<div class="d-flex pos-a"
						 style="width: 333px; right: 248px;">
						<p class="text text-s text-gray-1 mt-30">
							Переход к предыдущему разделу
						</p>
						<img class="instructions__arrow instructions__arrow_3 ml-rem-0-50 ml-xs-rem-0-50"
							 src="../../assets/img/instructions/instructions-arrow-3.svg"
							 alt="">
					</div>
					<div class="d-flex mr-100"
						 style="width: 301px">
						<p class="text text-s text-gray-1 mt-rem-5-25">
							Меню плейлиста - просматривай содержание курса и выбирай треки
						</p>
						<img class="instructions__arrow instructions__arrow_2 ml-rem-0-50 ml-xs-rem-0-50"
							 src="../../assets/img/instructions/instructions-arrow-2.svg"
							 alt="">
					</div>
				</div>
				<div class="hide-lg">
					<div class="pos-a d-flex mr-100"
						 style="width: 166px; right: 124px; top: 0;">
						<p class="text text-s text-gray-1 mt-xs-rem-8-50">
							Меню плейлиста - просматривай содержание курса и выбирай треки
						</p>
						<img class="instructions__arrow instructions__arrow_2-xs ml-rem-0-50"
							 src="../../assets/img/instructions/instructions-arrow-2-xs.svg"
							 alt="">
					</div>
					<div class="pos-a d-flex mr-100"
						 style="width: 134px; right: 196px; top: 0;">
						<p class="text text-s text-gray-1 mt-xs-rem-5-25">
							Переход к предыдущему разделу
						</p>
						<img class="instructions__arrow instructions__arrow_3-xs ml-rem-0-50"
							 src="../../assets/img/instructions/instructions-arrow-3-xs.svg"
							 alt="">
					</div>
				</div>
			</div>
			<div class="instructions__middle">
				<div class="hint"
					 style="width: 279px;">
					<img class="img_center mb-rem-0-50" src="../../assets/svg/mouse.svg"
						 alt="">
					<!-- <svg class="icon icon-svg icon_xl ">
                        <use xlink:href="user/svg/sprite.svg#instructions-mouse"/>
                    </svg> -->
					<h6 class="text-center hide-xs">
						Используй колесико мыши для просмотра
					</h6>
					<h6 class="text-center hide-lg">
						 Листай вниз для просмотра
					</h6>
				</div>
			</div>
			<div class="instructions__bottom mb-rem-0-25 hide-xs">
				<div class="container">
					<div class="row">
						<div class="col-lg-4 col-xs-12">
							<div class="d-flex jc-center">
								<div class="d-flex"
									 style="width: 267px">
									<img class="instructions__arrow instructions__arrow_flip mt-rem-0-75 mr-rem-0-50"
										 src="../../assets/img/instructions/instructions-arrow.svg"
										 alt="">
									<p class="text text-s text-gray-1">
										Переход к предыдущему разделу
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-8 col-xs-12">
							<div class="d-flex jc-center">
								<div class="d-flex"
									 style="width: 256px">
									<img class="instructions__arrow instructions__arrow_flip mt-rem-0-75 mr-rem-0-50"
										 src="../../assets/img/instructions/instructions-arrow.svg"
										 alt="">
									<p class="text text-s text-gray-1">
										Переход к следующему разделу
									</p>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<div class="instructions__bottom mb-xs-rem-0-25 hide-lg">
				<div class="container">
					<div class="row">
						<div class="col-xs-10">
							<p class="text text-s text-center">
								Кнопки навигации
							</p>
							<div class="d-flex jc-center">
								<div class="d-flex">
									<img class="instructions__arrow instructions__arrow_flip mt-xs-rem-0-75 mr-xs-rem-2-25"
										 src="../../assets/img/instructions/instructions-arrow.svg"
										 alt="">
									<img class="instructions__arrow instructions__arrow_flip-y mt-xs-rem-0-75"
										 src="../../assets/img/instructions/instructions-arrow.svg"
										 alt="">
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
		<div class="container btn-container btn-container_center">
			<button class="btn btn_back"
					onclick=""
					type="button">
				<span class="btn__text">Назад</span>
			</button>
			<button class="btn btn_next"
					@click="endInstructions"
					type="button">
				<span class="btn__text">Продолжить</span>
			</button>
		</div>
	</div>

</template>

<script setup>
import './IntroInstructions.scss'
</script>