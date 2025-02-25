<script setup>
import { onMounted, nextTick } from 'vue';
import MainHeader from '@/components/MainHeader/MainHeader.vue';
import { initLottieScroll } from '@/scripts/ui/lottieScroll';
import wordsJson from '@/assets/lottie/words.json?url';

onMounted(async () => {
	// Wait for the DOM to be fully updated
	await nextTick();

	// Select the Lottie container and set its data-src attribute
	const lottieElement = document.querySelector('.js-lottie-scroll');

	if (lottieElement) {
		lottieElement.dataset.src = wordsJson;
		console.log(lottieElement.dataset.src); //logs [object Object]
	}
	// Initialize the Lottie animation
	initLottieScroll();
});
</script>

<template>
	<PerfectScrollbar>
		<MainHeader />
		<div class="container mt-rem-6-50 mt-xs-rem-5-0 mb-rem-7-0 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12"><img alt=""
						 class="hide-xs"
						 src="../assets/img/track-1/track-1-top.svg" /> <img alt=""
						 class="hide-lg w-100"
						 src="../assets/img/track-1/track-1-top-xs.svg" />
				</div>
			</div>
		</div>

		<div class="container mb-rem-7-0 mb-xs-rem-6-0">
			<div class="container container_with-bg-img-black w-100">
				<div class="row">
					<div class="col-lg-5 col-xs-12 mb-xs-rem-3-50">
						<div class="card card_track-dark mr-rem-2-50"><img alt=""
								 class="mb-rem-2-0 mb-xs-rem-1-0"
								 src="../assets/img/track-1/track-1-1.png" />
							<p class="text text-s text-center text-white mb-rem-1-0 mb-xs-rem-0-50">Трек 1
							</p>
							<div class="d-flex jc-center ai-center">
								<img src="../assets/svg/wave.svg"
									 class="flex-shrink-0 mr-rem-1-0 mr-xs-rem-1-0"
									 alt="">
								<h2 class="text-white">Changes
								</h2>
							</div>
						</div>
					</div>
					<div class="col-lg-7 col-xs-12">
						<h2 class="text-white mt-rem-2-0 mb-rem-2-0 mb-xs-rem-2-0">Из этого трека ты узнаешь:
						</h2>
						<ul class="list list__ul list__ul_monochrome text text-xl text-white-80">
							<li class="list__ul--item">В чем принципиальное отличие роли руководителя от специалиста?
							</li>
							<li class="list__ul--item">Какие изменения происходят при переходе на руководящую позицию?
							</li>
							<li class="list__ul--item">Как меняется спектр твоих обязанностей?</li>
						</ul>
					</div>
				</div>
			</div>
		</div>

		<div class="container mb-rem-4-0 mb-xs-rem-4-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Период настройки
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">При переходе на&nbsp;позицию
						руководителя часто возникает ощущение, что задачи усложнились, времени стало меньше,
						а&nbsp;результаты не&nbsp;соответствуют ожиданиям.
						Знакомые мысли?
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>

		<div class="container">
			<div class="lottie-scroll js-lottie-scroll"
				 data-preserve-aspect-ratio="xMidYMid meet"
				 id="lottie-1"
				 style="width: 100%;">&nbsp;
			</div>
		</div>
	</PerfectScrollbar>
</template>