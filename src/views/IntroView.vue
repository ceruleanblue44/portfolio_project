<script setup>
import { onMounted } from 'vue'
import { customCursor } from '@/scripts/ui/customCursor'
import { discAnimation } from '@/scripts/ui/discAnimation'

import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { register } from 'swiper/element/bundle'

import MainHeader from '@/components/MainHeader/MainHeader.vue'
import IntroInstructions from '@/components/IntroInstructions/IntroInstructions.vue'
import RadioQuestion from '@/components/RadioQuestion/RadioQuestion.vue'
import { radioQuestionIntro } from '@/quizData/radioQuestionIntro'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'

// function onScrollEvent(event) {
// 	console.log(event);
// }

// const showHp = () => {
// 	console.log(document.querySelector('.hp'));
// }

onMounted(() => {
	register()
	customCursor()
	discAnimation()
	// headphonesAnimation()
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

			<div class="container">
				<div class="row zoom-text__group custom-cursor-area js-custom-cursor-area"
					 data-cursor-class="cursor_arrow-down">
					<div class="col-lg-6 col-xs-12 zoom-text__container">
						<h1 class="h1-96-64">Любая трудность преодолима</h1>
					</div>
					<div class="col-lg-6 col-xs-12 zoom-text__container">
						<h1 class="text-right text-primary mb-40 mb-xs-rem-2-0">Нужна лишь правильная песня
						</h1>

					</div>

				</div>
			</div>
			<div class="container">
				<div class="container_with-bg">
					<radio-question :answers-grid="radioQuestionIntro.answersGrid"
									v-on:complete="headphonesAnimation()">
						<template v-slot:question-text="">
							<!-- <div class="row">
							<div class="col-lg-6 col-xs-12"> -->
							<h4 class="mb-rem-1-50 mb-xs-rem-1-0">Какая мелодия сейчас играет в твоей голове?
							</h4>
							<p class="text text-m text-gray-1">Выбери один вариант ответа
							</p>
							<!-- </div> -->
							<!-- </div> -->
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
										<div class="headphones"><svg width="160"
												 height="160"
												 viewBox="0 0 160 160"
												 fill="none"
												 xmlns="http://www.w3.org/2000/svg">
												<path class="hp"
													  d="M146.667 113.334V80.0007C146.667 67.858 143.421 56.4731 137.749 46.6673M13.334 120.001V80.0007C13.334 43.1817 43.1816 13.334 80.0006 13.334C92.1433 13.334 103.528 16.5805 113.334 22.2528M53.334 101.248C53.334 97.3927 53.334 95.4647 52.8738 93.9333C51.8097 90.3927 49.0311 87.7073 45.5726 86.876C44.0769 86.5173 42.2392 86.6686 38.5638 86.972C32.1855 87.4986 28.9963 87.762 26.3963 88.768C20.4009 91.0866 15.8267 96.2633 14.088 102.697C13.334 105.487 13.334 108.833 13.334 115.524V116.761C13.334 123.621 13.334 127.052 14.1543 129.954C15.7643 135.651 19.614 140.363 24.7429 142.914C27.3562 144.214 30.5961 144.749 37.0759 145.819C41.3761 146.529 43.5262 146.885 45.2663 146.526C48.6949 145.82 51.5224 143.293 52.7241 139.861C53.334 138.119 53.334 135.843 53.334 131.29V101.248ZM106.667 101.248C106.667 97.3927 106.667 95.4647 107.127 93.9333C108.191 90.3927 110.97 87.7073 114.429 86.876C115.925 86.5173 117.762 86.6686 121.437 86.972C127.816 87.4986 131.005 87.762 133.605 88.768C139.601 91.0866 144.175 96.2633 145.913 102.697C146.667 105.487 146.667 108.833 146.667 115.524V116.761C146.667 123.621 146.667 127.052 145.847 129.954C144.237 135.651 140.387 140.363 135.259 142.914C132.645 144.214 129.405 144.749 122.925 145.819C118.625 146.529 116.475 146.885 114.735 146.526C111.307 145.82 108.479 143.293 107.277 139.861C106.667 138.119 106.667 135.843 106.667 131.29V101.248Z"
													  stroke="#A244ED"
													  stroke-width="8"
													  stroke-linecap="round" />
												<path class="line"
													  d="M80 34.9297V80.0001"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M104.789 45.0703V69.859"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M92.3945 41.6895V73.2387"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M117.184 50.7051V64.2262"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M55.2109 45.0703V69.859"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M67.6055 41.6895V73.2387"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
												<path class="line"
													  d="M42.8164 50.7051V64.2262"
													  stroke="#A244ED"
													  stroke-width="5"
													  stroke-linecap="round" />
											</svg>

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
        <h1 class="text-white mb-rem-0-75 mb-xs-rem-0-75">Тебя ждет множество альбомов под разное настроение.
        </h1>
        <hr class="hr hr_white-16 mb-rem-5-0 mb-xs-rem-2-50" /><!-- Slider main container -->
        <div class="album-slider js-album-slider">
          <div class="album-slider__header mb-rem-5-0 mb-xs-rem-5-0">
            <p class="text text-xl text-white w-100">Альбомы
            </p>
            <!-- If we need navigation buttons -->
			 <!-- <svg class="slider__btn-prev ml-rem-0-50 ml-xs-rem-0-50"> 
            <use xlink:href="user/svg/sprite.svg#slider-btn"> 
            </use> 
            </svg> 
            <svg class="slider__btn-next ml-rem-0-50 ml-xs-rem-0-50"> 
              <use xlink:href="user/svg/sprite.svg#slider-btn"> 
              </use> 
            </svg> -->
          </div>
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper"><!-- Slides -->
            <div class="swiper-slide"><img alt="" class="album-slider__slide-num" src="../assets/img/albums/album-num-1.png" />
              <div class="album-slider__slide-content"><img alt="" class="mb-rem-0-50 mb-xs-rem-0-50" src="../assets/img/albums/cover-1.png" />
                <h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Хиты
                </h6>
                <p class="text text-xs text-white">Ожидания от тебя в новой роли
                </p>
              </div>
            </div>
            <div class="swiper-slide"><img alt="" class="album-slider__slide-num" src="../assets/img/albums/album-num-2.png" />
              <div class="album-slider__slide-content"><img alt="" class="mb-rem-0-50 mb-xs-rem-0-50" src="../assets/img/albums/cover-2.png" />
                <h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Relax
                </h6>
                <p class="text text-xs text-white">Оперативное управление &mdash; магия баланса
                </p>
              </div>
            </div>
            <div class="swiper-slide"><img alt="" class="album-slider__slide-num" src="../assets/img/albums/album-num-4.png" />
              <div class="album-slider__slide-content"><img alt="" class="mb-rem-0-50 mb-xs-rem-0-50" src="../assets/img/albums/cover-4.png" />
                <h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Hip-Hop
                </h6>
                <p class="text text-xs text-white">Повышение личной и командной коммуникации
                </p>
              </div>
            </div>
            <div class="swiper-slide"><img alt="" class="album-slider__slide-num" src="../assets/img/albums/album-num-3.png" />
              <div class="album-slider__slide-content"><img alt="" class="mb-rem-0-50 mb-xs-rem-0-50" src="../assets/img/albums/cover-3.png" />
                <h6 class="text-white mb-rem-0-50 mb-xs-rem-0-50">Jazz
                </h6>
                <p class="text text-xs text-white">Сотрудничество и коммуникация
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

			<div class="container"
				 style="height: 100vh;">
				<swiper-container class="mySwiper slider"
							  pagination="true"
							  pagination-clickable="true"
							  navigation="true"
							  space-between="30"
							  slides-per-view="4">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<!-- <swiper-slide>Slide 5</swiper-slide>
				<swiper-slide>Slide 6</swiper-slide>
				<swiper-slide>Slide 7</swiper-slide>
				<swiper-slide>Slide 8</swiper-slide>
				<swiper-slide>Slide 9</swiper-slide> -->
			</swiper-container>
				<!-- </div> -->
			</div>

		</div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss">


		/* swiper-container {
		width: 100%;
		height: 100%;
	}

	swiper-slide {
		text-align: center;
		font-size: 18px;
		background: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 1pz solid red;
	}

	swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	} */
	</style>
