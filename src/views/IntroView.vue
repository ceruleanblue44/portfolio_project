<script setup>
import { onMounted } from 'vue'


import { PerfectScrollbar } from 'vue3-perfect-scrollbar';
import { register } from 'swiper/element/bundle';

function onScrollEvent(event) {
	console.log(event);
}

onMounted(() => {
	register();
})

</script>

<template>

	<PerfectScrollbar @ps-scroll-y="onScrollEvent">
		<div class="container"
			 style="height: 100vh;">
			<div class="row zoom-text__group custom-cursor-area js-custom-cursor-area"
				 data-cursor-class="cursor_arrow-down">
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1 class="h1-96-64">Любая трудность преодолима</h1>
				</div>
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1 class="h1-96-64 text-right text-color-primary mb-40 mb-xs-rem-2-0">Просто подбери правильную
						песню
					</h1>
					<p class="text-l text-semibold">Какая мелодия звучит у тебя в голове прямо сейчас? <br /> What music
						is playing in your head right now</p>
				</div>
			</div>
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
		</div>
	</PerfectScrollbar>
</template>

<style>
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
