<script setup>
import { onMounted } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'

import { vinylAnimation } from '@/scripts/ui/vinylAnimation'

onMounted(() => {
	vinylAnimation()
})

</script>
<template>
	<PerfectScrollbar>
		<MainHeader />
		<!-- <div class="container-scroll js-container-scroll"> -->
		<div class="container mt-rem-9-75 mt-xs-rem-6-0 mb-rem-9-75 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
						 src="../assets/svg/star.svg"
						 alt="">
					<!-- <svg class="text-color-secondary icon-svg icon icon_xl img_center mb-rem-1-50 mb-xs-rem-1-0"> 
            <use xlink:href="user/svg/sprite.svg#4star-color"> 
            </use> 
          </svg> -->
					<p class="text text-xl text-center">Добро пожаловать в роль руководителя! Как исполнитель перед
						важным выступлением, ты сейчас переживаешь особенный момент. В альбоме "Основы лидерства" ты
						найдешь все инструменты для успешного старта.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container  mb-155 mb-xs-95">
			<div class="vinyl__container">
				<div class="row">
					<div class="col-lg-1 hide-xs">
						<div class="icon-column">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/volume.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/volume.svg"
								 alt="">
						</div>
					</div>
					<!-- <div class="col-xs-12 hide-lg">
						<div class="icon-row icon-row-xs">
							<svg>
								<use xlink:href="user/svg/sprite.svg#red_note">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#play_green">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#volume">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#green_note">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#mic">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#double_note">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#headphones">
								</use>
							</svg>
							<svg>
								<use xlink:href="user/svg/sprite.svg#disc">
								</use>
							</svg>
						</div>
					</div> -->
					<div class="col-lg-10 col-xs-12 mt-40 mt-xs-60 pl-xs-0 pr-xs-0">
						<div class="vinyl__container-center mb-xs-120">
							<h1 class="h1 hide-xs text-center text-color-primary">Сделай <span class="text-gray-4">свою
									<br />
									новую</span> роль ХИТОМ!
							</h1>
							<div class="text-48 hide-lg text-center text-bold text-color-primary">Сделай <span
									  class="text-gray-4">свою
									<br />
									новую</span> роль ХИТОМ!
							</div>
							<div class="hint vinyl__hint text-24-14 text-center mt-rem-2-0">Твоя цель
							</div>
							<div class="vinyl__wrap"><img alt=""
									 class="vinyl__img js-vinyl"
									 src="../assets/img/vinyl/vinyl.png" />
							</div>
						</div>
					</div>
					<div class="col-lg-1 hide-xs">
						<div class="icon-column">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/volume.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/volume.svg"
								 alt="">

						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-4-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 mb-rem-0-75 mb-xs-rem-0-75">Треки альбома
					</h1>
					<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-1-50" />
					<p class="text text-l text-gray-1">В этом альбоме ты сосредоточишься на своей новой роли и
						узнаешь, как создать прочный фундамент для дальнейшего развития тебя как эффективного
						руководителя.
					</p>
					<p class="text text-l text-gray-1">Посмотри, какие треки тебя ждут.
					</p>
				</div>
			</div>
		</div>
		<div class="container btn-container btn-container_center mb-rem-2-50 mb-xs-rem-2-0">
			<button class="btn btn_next"
					type="button"><span class="btn__text">Начать</span>
			</button>
		</div>
		<!-- </div> -->
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>