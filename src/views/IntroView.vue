<script setup>
import { onMounted } from 'vue'
import { customCursor } from '@/ui/customCursor';
import { discAnimation } from '@/ui/discAnimation';

import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { register } from 'swiper/element/bundle';

// function onScrollEvent(event) {
// 	console.log(event);
// }

onMounted(() => {
	register();
	customCursor();
	discAnimation()
})

</script>

<template>

	<!-- <PerfectScrollbar @ps-scroll-y="onScrollEvent"> -->
	<PerfectScrollbar class="container-scroll js-container-scroll">

		<!-- <div class=""
				 style="height: 100vh;"> -->

		<div class="disc-rotating js-disc-rotating">
			<div class="disc-rotating__wrapper">
				<div class="disc-rotating__img-full js-disc-rotating-img-full">
					<img src="../assets/img/disc-01-outer.jpg"
						 alt=""
						 class="disc-rotating__img-outer">
					<img src="../assets/img/disc-01-inner.png"
						 alt=""
						 class="disc-rotating__img-inner js-disc-rotating-img-inner">
				</div>
				<div class="hint disc-rotating__hint js-disc-rotating-hint">
					<p class="text-center">
						Листайте вниз, чтобы начать обучение
					</p>
				</div>
				<button class="btn disc-rotating__button js-disc-rotating-button">
					<span class="btn__text">Начать обучение</span>
				</button>
			</div>
		</div>

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
			<p class="text-l text-semibold">Какая мелодия звучит у тебя в голове прямо сейчас? <br /> What music
				is playing in your head right now</p>
			<!-- <div class="row zoom-text__group custom-cursor-area js-custom-cursor-area"
				 data-cursor-class="cursor_arrow-down">
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1>Все можно<br>пережить </h1>
				</div>
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1 class="text-right text-color-primary mb-40 mb-xs-rem-2-0">Просто подбери<br>нужную песню</h1>
				</div>
			</div> -->

		</div>

		<div class="container"
			 style="height: 100vh;">
			<!-- <swiper-container class="mySwiper slider"
							  pagination="true"
							  pagination-clickable="true"
							  navigation="true"
							  space-between="30"
							  slides-per-view="3">
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 5</swiper-slide>
				<swiper-slide>Slide 6</swiper-slide>
				<swiper-slide>Slide 7</swiper-slide>
				<swiper-slide>Slide 8</swiper-slide>
				<swiper-slide>Slide 9</swiper-slide>
			</swiper-container> -->
			<!-- </div> -->
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
