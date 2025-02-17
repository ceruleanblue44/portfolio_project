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
	<main>
		<!-- <div class="container"
			 style="height: 100vh;">
			<swiper-container>
				<swiper-slide>Slide 1</swiper-slide>
				<swiper-slide>Slide 2</swiper-slide>
				<swiper-slide>Slide 3</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
				<swiper-slide>Slide 4</swiper-slide>
			</swiper-container>
		</div> -->

		<div class="container container_albums mb-rem-9-75 mb-xs-rem-6-0">
			<h1 class="text-white mb-rem-0-75 mb-xs-rem-0-75">Тебя ждет множество альбомов под разное настроение.
			</h1>
			<hr class="hr hr_white-16 mb-rem-5-0 mb-xs-rem-2-50" /><!-- Slider main container -->
			<div class="album-slider js-album-slider">
				<div class="album-slider__header mb-rem-5-0 mb-xs-rem-5-0">
					<p class="text text-xl text-white w-100">Альбомы
					</p>
					<!-- <svg class="slider__btn-next">
						<use href="#icon-arrow-square-right"></use>
					</svg> -->

					<ArrowSquareLeft class="slider__btn-prev mr-rem-0-50"/>
					<ArrowSquareRight class="slider__btn-next"/>

				</div>
				<swiper-container init="false">
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
				</swiper-container>
			</div>
		</div>
	</main>
</template>

<style scoped
	   lang="scss"></style>
