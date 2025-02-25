<script setup>
import { onMounted } from 'vue'
// import { vinylAnimation } from '@/scripts/ui/vinylAnimation'

onMounted(() => {
	// vinylAnimation()
})





</script>

<template>
	<PerfectScrollbar>
	<div style="height: 100vh;"></div>
	
		<div class="container  mb-155 mb-xs-95">
			<div class="vinyl__container">
				<div class="row">
					<div class="col-lg-1 hide-xs">
						<div class="icon-column">
							<img class=""
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/volume.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class=""
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
							<img class=""
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/volume.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/disc.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/volume.svg"
								 alt="">

						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 100vh;"></div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
