<script setup>
import { onMounted } from 'vue'
import { swiperInit } from '@/scripts/ui/swiperSlider'
// import {ArrowSquareLeft} from '@/assets/svg/arrow-square-left.svg'
import ArrowSquareRight from '@/assets/svg/arrow-square-right.svg';
import ArrowSquareLeft from '@/assets/svg/arrow-square-left.svg';

onMounted(() => {
	swiperInit()
})





</script>

<template>
	<PerfectScrollbar>
		<div class="container container_albums mb-rem-9-75 mb-xs-rem-6-0">
			<h1 class="h1-64-48 w-85 text-white mb-rem-0-75 mb-xs-rem-0-75">Ты откроешь для себя альбомы
				для любой профессиональной ситуации.
			</h1>
			<hr class="hr hr_white-16 mb-rem-5-0 mb-xs-rem-2-50" /><!-- Slider main container -->
			<div class="album-slider js-album-slider">
				<div class="album-slider__header mb-rem-5-0 mb-xs-rem-5-0">
					<p class="text text-xl text-white w-100">Альбомы
					</p>
					<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50 mr-xs-rem-0-50" />
					<ArrowSquareRight class="slider__btn-next" />
				</div>
				<swiper-container data-swiper-type="albums"
								  init="false">
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums/album-num-1.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums/cover-1.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
							</h6>
							<p class="text text-xs text-white">Ожидания от тебя в новой роли
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums/album-num-2.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums/cover-2.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
							</h6>
							<p class="text text-xs text-white">Ожидания от тебя в новой роли
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums/album-num-3.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums/cover-3.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
							</h6>
							<p class="text text-xs text-white">Ожидания от тебя в новой роли
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums/album-num-4.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums/cover-4.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
							</h6>
							<p class="text text-xs text-white">Ожидания от тебя в новой роли
							</p>
						</div>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>

		<div class="container container_with-bg mb-rem-9-75 mb-xs-rem-3-0">
			<h1 class="mb-rem-3-0 mb-xs-rem-2-0">Настрой свой плейлист
			</h1>
			<div class="playlist-slider js-playlist-slider">
				<div class="playlist-slider__header mt-rem-5-0">
					<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50" />
					<ArrowSquareRight class="slider__btn-next" />
					<div class="slider__pagination ml-rem-1-50 ml-xs-rem-0-50">&nbsp;
					</div>
				</div>
				<swiper-container data-swiper-type="playlist"
								  init="false">
					<swiper-slide class="swiper-slide">
						<div class="playlist-slider__slide-content">
							<div class="row h-100">
								<div class="col-lg-4 col-xs-12">
									<div class="hint text-center mt-rem-2-50 mb-xs-rem-1-50">Листай вправо,
										чтобы узнать
										больше информации
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Выбирай трек дня
										</h4>
										<p class="text text-m mb-rem-2-0 mb-xs-rem-0-75">Один трек&nbsp;&mdash;
											это одна
											тема с&nbsp;различными практиками и&nbsp;интерактивами.
											Ты&nbsp;можешь выбрать
											любой трек в&nbsp;альбоме и&nbsp;перейти к&nbsp;нему.
										</p>
										<div class="row">
											<div class="col-lg-6 col-xs-12"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-1-1.png" />
												<p class="text text-s text-center text-semibold">Хочу перемен
												</p>
											</div>
											<div class="col-lg-6 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-1-2.png" />
												<p class="text text-s text-center text-semibold">Обернитесь
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="playlist-slider__slide-content">
							<div class="row h-100">
								<div class="col-lg-4 col-xs-12">
									<div class="hint text-center mt-rem-2-50 mb-xs-rem-1-50">Листай вправо,
										чтобы узнать
										больше информации
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Подбирай на свой вкус
										</h4>
										<p class="text text-m">&laquo;Собираем для вас&raquo;&nbsp;&mdash; это
											подборка
											статей, которая формируется на&nbsp;основе трека. Погрузись
											в&nbsp;плейлист еще
											больше и&nbsp;изведай тайны музыки. Ты найдешь статьи:
										</p>
										<ul class="list list__ul text text-m text-gray-1 mb-rem-2-0 mb-xs-rem-1-50">
											<li class="list__ul--item">в &laquo;Меню&raquo; во вкладке
												&laquo;Истории&raquo;;</li>
											<li class="list__ul--item">в конце треков.</li>
										</ul>
										<div class="row">
											<div class="col-lg-3 col-xs-6"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-2-1.png" />
												<p class="text text-s text-center text-semibold">Смена
													приоритетов
												</p>
											</div>
											<div class="col-lg-3 col-xs-6"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-2-2.png" />
												<p class="text text-s text-center text-semibold">Стратегическое
													планирование
												</p>
											</div>
											<div class="col-lg-3 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-2-3.png" />
												<p class="text text-s text-center text-semibold">Методы
													целеполагания
												</p>
											</div>
											<div class="col-lg-3 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist/playlist-slider-track-2-4.png" />
												<p class="text text-s text-center text-semibold">Работа с
													удаленщиками
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="playlist-slider__slide-content">
							<div class="row h-100">
								<div class="col-lg-4 col-xs-12">
									<div class="hint text-center mt-rem-2-50 mb-xs-rem-1-50">Листай вправо,
										чтобы узнать
										больше информации
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Сохраняй понравившееся
										</h4>
										<p class="text text-m mb-rem-2-0 mb-xs-rem-1-50">&laquo;Встретились при
											прослушивании&raquo; &mdash; это микс всех трендовых лайфхаков.
											Здесь ты увидишь
											музыку, которая поддержит в любой момент: и в грусти, и в радости.
											Сохраняй
											файлы, чтобы потом воспользоваться в жизни.
										</p>
										<img alt=""
											 class="hide-xs"
											 src="../assets/img/playlist/playlist-slider-track-3-1.svg" /> <img alt=""
											 class="hide-lg"
											 src="../assets/img/playlist/playlist-slider-track-3-1-xs.png" />
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide">
						<div class="playlist-slider__slide-content">
							<div class="row h-100">
								<div class="col-lg-4 col-xs-12">
									<div class="hint text-center mt-rem-2-50 mb-xs-rem-1-50">Листай вправо,
										чтобы узнать
										больше информации
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100 pr-rem-9-25 pb-rem-7-0">
										<h3 class="mb-rem-1-25 mb-xs-rem-1-25">Готов?
										</h3>
										<p class="text text-xl mb-rem-2-0">Наслаждайся музыкой вместе
											с&nbsp;плейлистом
											руководителя. Альбомы под любое настроение, лайфхаки, истории
											реальных
											знаменитостей&nbsp;&mdash; все подобрано специально для тебя!
										</p>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper-container>
			</div>

		</div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
