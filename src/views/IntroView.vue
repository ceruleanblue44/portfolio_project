<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { customCursor } from '@/scripts/ui/customCursor'
import { discAnimation } from '@/scripts/ui/discAnimation'

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
// import { register } from 'swiper/element/bundle'

import MainHeader from '@/components/MainHeader/MainHeader.vue'
import IntroInstructions from '@/components/IntroInstructions/IntroInstructions.vue'
import RadioQuestion from '@/components/RadioQuestion/RadioQuestion.vue'
import { radioQuestionIntro } from '@/quizData/radioQuestionIntro'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'
import { swiperInit } from '@/scripts/ui/swiperSlider'
import { tabsInit } from '@/scripts/ui/tabs'

import ArrowSquareRight from '@/assets/svg/arrow-square-right.svg';
import ArrowSquareLeft from '@/assets/svg/arrow-square-left.svg';

// function onScrollEvent(event) {
// 	console.log(event);
// }

const svgContent = ref('');

onMounted(async () => {

	const response = await fetch('/src/assets/svg/headphones.svg');
	svgContent.value = await response.text();

	// Wait for Vue to render the injected SVG
	await nextTick();

	customCursor()
	discAnimation()
	swiperInit()
	tabsInit()

})

</script>

<template>

	<!-- <PerfectScrollbar @ps-scroll-y="onScrollEvent"> -->
	<PerfectScrollbar>
		<MainHeader />
		<div class="container-scroll js-container-scroll">

			<div class="disc-rotating js-disc-rotating">
				<div class="disc-rotating__wrapper">
					<div class="disc-rotating__img-full js-disc-rotating-img-full">
						<img src="../assets/img/discAnimation/disc-01-outer.jpg"
							 alt=""
							 class="disc-rotating__img-outer">
						<img src="../assets/img/discAnimation/disc-01-inner.png"
							 alt=""
							 class="disc-rotating__img-inner js-disc-rotating-img-inner">
					</div>
					<div class="hint disc-rotating__hint js-disc-rotating-hint">
						<p class="text-center">
							Листай вниз, чтобы начать обучение
						</p>
					</div>
					<button class="btn disc-rotating__button js-disc-rotating-button">
						<span class="btn__text text-uppercase">Начать обучение</span>
					</button>
				</div>
			</div>

			<IntroInstructions />

			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<div class="row zoom-text__group custom-cursor-area js-custom-cursor-area"
					 data-cursor-class="cursor_arrow-down">
					<div class="col-lg-6 col-xs-12 zoom-text__container">
						<h1>Любая трудность преодолима</h1>
					</div>
					<div class="col-lg-6 col-xs-12 zoom-text__container">
						<h1 class="text-right text-primary mb-rem-2-50 mb-xs-rem-2-0">Нужна лишь правильная песня
						</h1>

					</div>

				</div>
			</div>
			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<div class="container_with-bg">
					<radio-question :answers-grid="radioQuestionIntro.answersGrid"
									v-on:complete="headphonesAnimation()">
						<template v-slot:question-text="">
							<h4 class="mb-rem-1-50 mb-xs-rem-1-0">Какая мелодия звучит сейчас в твоей голове?
							</h4>
							<p class="text text-m text-gray-1">Выбери один вариант
							</p>
						</template>
						<template v-slot:feedback-0="">
							<div class="row">
								<div class="col-lg-8 col-xs-12">
									<div class="card card_medium card_gray">
										<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-color-primary">Отличный музыкальный
											настрой!
										</h3>
										<p class="text text-l">Сейчас мы настраиваемся на музыкальную волну и
											отправляемся в путешествие по музыкальным жанрам.
										</p>
									</div>
								</div>
								<div class="col-lg-4 hide-xs">
									<div class="card card_medium card_white h-100">
										<div class="headphones svg-container"
											 v-html="svgContent">
										</div>
									</div>
								</div>
							</div>
						</template>
						<template v-slot:feedback-1="">
						</template>
					</radio-question>
				</div>
			</div>

			<div class="container container_albums mb-rem-9-75 mb-xs-rem-6-0">
				<h1 class="h1-64-48 w-85 text-white mb-rem-0-75 mb-xs-rem-0-75">Ты откроешь для себя альбомы 
для любой профессиональной ситуации.
				</h1>
				<hr class="hr hr_white-16 mb-rem-5-0 mb-xs-rem-2-50" /><!-- Slider main container -->
				<div class="album-slider js-album-slider">
					<div class="album-slider__header mb-rem-5-0 mb-xs-rem-5-0">
						<p class="text text-xl text-white w-100">Альбомы
						</p>
						<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50" />
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

			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<h1 class="mb-rem-0-75 mb-xs-rem-0-75">Настрой свою волну!
				</h1>
				<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-2-50" />
				<div class="tab tab_playlist js-tab-with-placeholder">
					<div class="row">
						<div class="col-lg-4 col-xs-12 mb-xs-rem-1-50">
							<div class="tab__items">
								<div class="tab__placeholder js-tab-placeholder">
									<div class="hint text-center mt-rem-2-50">Нажимай на карточки, чтобы увидеть больше
										информации
									</div>
								</div>
								<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
									<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Минимум звука
									</h3>
									<p class="text text-l">Мы будем слушать мелодию твоей души. Отключи посторонние
										звуки, чтобы
										сконцентрироваться на себе.
									</p>
								</div>
								<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
									<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Заметки
									</h3>
									<p class="text text-l">Как настоящий музыкант, не&nbsp;держи ноты в&nbsp;голове,
										лучше напиши
										на&nbsp;бумаге!
									</p>
								</div>
								<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
									<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Баланс отдыха и&nbsp;учебы
									</h3>
									<p class="text text-l">Нельзя постоянно петь, иначе голос сорвется. Так
										и&nbsp;в&nbsp;учебе.
										Делай перерывы в&nbsp;течение каждого часа.
									</p>
								</div>
								<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
									<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Повторение
									</h3>
									<p class="text text-l">Если ты забыл какой-то совет, вернись и повтори, чтобы это
										отложилось в
										памяти. Ведь чем больше ты слушаешь музыку, тем чаще она начинает играть у тебя
										в голове.
									</p>
								</div>
							</div>
						</div>
						<div class="col-lg-1 hide-xs">&nbsp;
						</div>
						<div class="col-lg-7 col-xs-12">
							<ul class="tab__nav">
								<li class="tab__btn js-tab-link"><img alt=""
										 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
										 src="../assets/svg/tabs/tabs-icon-1.svg" />
									<h5 class="text-center">минимум звука
									</h5>
								</li>
								<li class="tab__btn js-tab-link"><img alt=""
										 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
										 src="../assets/svg/tabs/tabs-icon-2.svg" />
									<h5 class="text-center">заметки
									</h5>
								</li>
								<li class="tab__btn js-tab-link"><img alt=""
										 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
										 src="../assets/svg/tabs/tabs-icon-3.svg" />
									<h5 class="text-center">баланс отдыха и учебы
									</h5>
								</li>
								<li class="tab__btn js-tab-link"><img alt=""
										 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
										 src="../assets/svg/tabs/tabs-icon-4.svg" />
									<h5 class="text-center">повторение
									</h5>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div class="container mb-rem-9-75 mb-xs-rem-3-0">
				<div class="container container_with-bg">
					<h1 class="mb-rem-3-0 mb-xs-rem-2-0">Настрой свой плейлист
					</h1>
					<!-- Slider main container -->
					<div class="playlist-slider js-playlist-slider">
						<div class="playlist-slider__header mt-rem-5-0"><!-- If we need navigation buttons -->
							<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50" />
							<ArrowSquareRight class="slider__btn-next" /><!-- If we need pagination -->
							<div class="slider__pagination ml-rem-1-50 ml-xs-rem-0-50">&nbsp;
							</div>
						</div>
						<!-- Additional required wrapper -->
						<swiper-container data-swiper-type="playlist"
										  init="false"><!-- Slides -->
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
												<ul
													class="list list__ul text text-m text-gray-1 mb-rem-2-0 mb-xs-rem-1-50">
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
													 src="../assets/img/playlist/playlist-slider-track-3-1.svg" /> <img
													 alt=""
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
			</div>

			<div class="container btn-container btn-container_center mb-rem-2-50 mb-xs-rem-2-0">
				<button class="btn btn_next"
						type="button"><span class="btn__text">Начать</span>
				</button>
			</div>

		</div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
