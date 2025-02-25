<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { customCursor } from '@/scripts/ui/customCursor'
import { discAnimation } from '@/scripts/ui/discAnimation'

// import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
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
						<h4 class="mb-rem-1-50 mb-xs-rem-1-0">Какая мелодия звучит сейчас в&nbsp;твоей голове?
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
									<p class="text text-l">Сейчас мы&nbsp;настраиваемся на&nbsp;музыкальную волну
										и&nbsp; отправляемся в&nbsp;путешествие по&nbsp;музыкальным жанрам.
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
			<h1 class="h1-64-48 w-85 text-white hide-xs mb-rem-0-75 mb-xs-rem-0-75">Ты&nbsp;откроешь для себя альбомы
				для любой профессиональной ситуации.
			</h1>
			<h2 class="text-white hide-lg mb-rem-0-75 mb-xs-rem-0-75">Ты&nbsp;откроешь для себя альбомы
				для любой профессиональной ситуации.
			</h2>
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
							 src="../assets/img/albums-slider/album-num-1.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums-slider/cover-1.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
							</h6>
							<p class="text text-xs text-white">Принимаем роль лидера
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums-slider/album-num-2.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums-slider/cover-2.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Классика
							</h6>
							<p class="text text-xs text-white">Мастерство ежедневных операций
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums-slider/album-num-3.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums-slider/cover-3.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Jazz
							</h6>
							<p class="text text-xs text-white">Создание командной динамики
							</p>
						</div>
					</swiper-slide>
					<swiper-slide class="swiper-slide"><img alt=""
							 class="album-slider__slide-num"
							 src="../assets/img/albums-slider/album-num-4.png" />
						<div class="album-slider__slide-content"><img alt=""
								 class="mb-rem-0-50 mb-xs-rem-0-50"
								 src="../assets/img/albums-slider/cover-4.png" />
							<h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Hip-Hop
							</h6>
							<p class="text text-xs text-white">Усиление командной эффективности
							</p>
						</div>
					</swiper-slide>
				</swiper-container>
			</div>
		</div>

		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<h1 class="mb-rem-0-75 mb-xs-rem-0-75">Советы по&nbsp;обучению:
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-2-50" />
			<div class="tab tab_playlist js-tab-with-placeholder">
				<div class="row">
					<div class="col-lg-4 col-xs-12 mb-xs-rem-1-50">
						<div class="tab__items">
							<div class="tab__placeholder js-tab-placeholder">
								<div class="hint text-center mt-rem-2-50">Нажимай на&nbsp;карточки, чтобы узнать
									больше
								</div>
							</div>
							<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
								<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Акустика
								</h3>
								<p class="text text-l">Найди свое идеальное звучание. Создай тихую атмосферу, чтобы
									услышать
									свои мысли и&nbsp;настроиться на&nbsp;процесс обучения.
								</p>
							</div>
							<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
								<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Ведение заметок
								</h3>
								<p class="text text-l">Как опытный дирижер, записывай свои идеи&nbsp;&mdash; память
									может
									подвести, а&nbsp;заметки всегда под рукой!
								</p>
							</div>
							<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
								<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Баланс учебы и&nbsp;отдыха
								</h3>
								<p class="text text-l"> Даже лучшие музыканты знают цену паузам. Соблюдай баланс:
									каждый час
									делай небольшие перерывы для максимальной эффективности.
								</p>
							</div>
							<div class="tab__item js-tab-item animate__animated animate__fadeInUp">
								<h3 class="mb-rem-1-25 mb-xs-rem-0-75">Повторение ключевых моментов
								</h3>
								<p class="text text-l">Любимую песню мы&nbsp;слушаем снова и&nbsp;снова, пока
									не&nbsp;выучим
									наизусть. Так&nbsp;же и&nbsp;с&nbsp;важной информацией&nbsp;&mdash; возвращайся
									к&nbsp;пройденному материалу, чтобы закрепить знания.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-1 hide-xs">
					</div>
					<div class="col-lg-7 col-xs-12">
						<ul class="tab__nav">
							<li class="tab__btn js-tab-link"><img alt=""
									 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
									 src="../assets/svg/tabs/tabs-icon-1.svg" />
								<h5 class="text-center">акустика
								</h5>
							</li>
							<li class="tab__btn js-tab-link"><img alt=""
									 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
									 src="../assets/svg/tabs/tabs-icon-2.svg" />
								<h5 class="text-center">ведение заметок
								</h5>
							</li>
							<li class="tab__btn js-tab-link"><img alt=""
									 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
									 src="../assets/svg/tabs/tabs-icon-3.svg" />
								<h5 class="text-center">баланс учебы и&nbsp;отдыха
								</h5>
							</li>
							<li class="tab__btn js-tab-link"><img alt=""
									 class="img_center mb-rem-1-0 mr-xs-rem-0-75"
									 src="../assets/svg/tabs/tabs-icon-4.svg" />
								<h5 class="text-center">повторение ключевых моментов
								</h5>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>


		<div class="container container_with-bg mb-rem-9-75 mb-xs-rem-3-0">
			<h1 class="mb-rem-3-0 mb-xs-rem-2-0">Твой учебный плейлист
			</h1>
			<div class="playlist-slider js-playlist-slider">
				<div class="playlist-slider__header mt-rem-5-0">
					<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50 mr-xs-rem-0-50" />
					<ArrowSquareRight class="slider__btn-next" />
					<div class="slider__pagination ml-rem-1-50 ml-xs-rem-0-50">
					</div>
				</div>
				<swiper-container data-swiper-type="playlist"
								  init="false">
					<swiper-slide class="swiper-slide">
						<div class="playlist-slider__slide-content">
							<div class="row h-100">
								<div class="col-lg-4 col-xs-12">
									<div class="hint text-center mt-rem-2-50 mb-xs-rem-1-50">Листай вправо, чтобы
										узнать больше
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Выбери трек дня
										</h4>
										<p class="text text-m mb-rem-2-0 mb-xs-rem-1-50">Каждый трек представляет
											собой тему
											с&nbsp;интерактивными упражнениями и&nbsp;практическими заданиями.
											Ты&nbsp;можешь
											выбрать любой трек в&nbsp;альбоме.
										</p>
										<div class="row">
											<div class="col-lg-6 col-xs-12"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-1-1.png" />
												<p class="text text-s text-center text-semibold">Changes
												</p>
											</div>
											<div class="col-lg-6 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-1-2.png" />
												<p class="text text-s text-center text-semibold">Look Around
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
										больше
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Подбирай на&nbsp;свой вкус
										</h4>
										<p class="text text-m">&laquo;Библиотека лидера&raquo;&nbsp;&mdash; это
											коллекция
											материалов, подобранных специально под каждый трек. Погрузись глубже
											в&nbsp;тему
											и&nbsp;открой для себя новые грани управления. Найти материалы можно:
										</p>
										<ul class="list list__ul text text-m mb-rem-2-0 mb-xs-rem-1-50">
											<li class="list__ul--item">в&nbsp;разделе &laquo;Библиотека&raquo;
												главного меню;
											</li>
											<li class="list__ul--item">в&nbsp;конце каждого трека.</li>
										</ul>
										<div class="row">
											<div class="col-lg-3 col-xs-6"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-2-1.png" />
												<p class="text text-s text-center text-semibold">Смена
													приоритетов
												</p>
											</div>
											<div class="col-lg-3 col-xs-6"><img alt=""
													 class="mb-rem-0-50 mb-xs-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-2-2.png" />
												<p class="text text-s text-center text-semibold">Стратегическое
													планирование
												</p>
											</div>
											<div class="col-lg-3 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-2-3.png" />
												<p class="text text-s text-center text-semibold">Методы
													целеполагания
												</p>
											</div>
											<div class="col-lg-3 hide-xs"><img alt=""
													 class="mb-rem-0-50"
													 src="../assets/img/playlist-slider/playlist-slider-track-2-4.png" />
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
										больше
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100">
										<h4 class="mb-rem-0-75 mb-xs-rem-0-75">Сохрани лучшие моменты
										</h4>
										<p class="text text-m mb-rem-2-0 mb-xs-rem-1-50">&laquo;Золотая
											коллекция&raquo;&nbsp;&mdash; это сборник проверенных управленческих
											практик. Здесь
											собраны инструменты, которые помогут в&nbsp;любой ситуации:
											от&nbsp;решения сложных
											задач до&nbsp;празднования успехов. Сохраняй полезные материалы для
											будущего
											применения.
										</p>
										<img alt=""
											 class="hide-xs"
											 src="../assets/img/playlist-slider/playlist-slider-track-3-1.svg" /> <img
											 alt=""
											 class="hide-lg"
											 src="../assets/img/playlist-slider/playlist-slider-track-3-1-xs.svg" />
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
										больше
									</div>
								</div>
								<div class="col-lg-8 col-xs-12">
									<div class="card card_gray h-100 pr-rem-9-25 pb-rem-7-0">
										<h3 class="mb-rem-1-25 mb-xs-rem-1-25">Начинаем?
										</h3>
										<p class="text text-xl mb-rem-2-0">Наслаждайся музыкой вместе сплейлистом
											руководителя.
											Уникальные подходы, практические инструменты, истории
											успеха&nbsp;&mdash; все
											подобрано для твоего профессионального роста!
										</p>
									</div>
								</div>
							</div>
						</div>
					</swiper-slide>
				</swiper-container>
			</div>

		</div>

		<div class="container btn-container btn-container_center mb-rem-2-50 mb-xs-rem-2-0">
			<button class="btn btn_next"
					type="button"><span class="btn__text">Начать</span>
			</button>
		</div>

	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
