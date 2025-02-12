<script setup>
import { onMounted } from 'vue';

import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'

onMounted(() => {

	console.log(document.querySelector('.hp'));
	headphonesAnimation()
})





</script>

<template>
	<main>
		<div class="container">
			<p class="text-l">Всё, что нужно, — это
				правильная песня
			</p>
			<div class="container_with-bg">
				<div class="row">
					<div class="col-lg-8 col-xs-12">
						<div class="card card_medium card_gray">
							<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-color-primary">Отличный музыкальный настрой!

							</h3>
							<p class="text text-l">Сейчас мы настраиваемся на музыкальную волну и отправляемся в
								путешествие
								по музыкальным жанрам.
							</p>
						</div>
					</div>
					<div class="col-lg-4 hide-xs">
						<div class="card card_medium card_white h-100">
							<div class="headphones"><svg width="200"
									 height="200"
									 viewBox="0 0 200 200"
									 fill="none"
									 xmlns="http://www.w3.org/2000/svg">
									<path class="hp"
										  d="M183.333 141.666V99.9994C183.333 84.821 179.274 70.5899 172.184 58.3327M16.666 149.999V99.9994C16.666 53.9756 53.9756 16.666 99.9993 16.666C115.178 16.666 129.409 20.7241 141.666 27.8145M66.666 126.559C66.666 121.739 66.666 119.329 66.0908 117.415C64.7606 112.989 61.2874 109.633 56.9643 108.594C55.0946 108.145 52.7975 108.334 48.2033 108.714C40.2304 109.372 36.2439 109.701 32.9939 110.959C25.4997 113.857 19.7818 120.328 17.6085 128.369C16.666 131.857 16.666 136.039 16.666 144.404V145.949C16.666 154.525 16.666 158.814 17.6914 162.441C19.7038 169.562 24.516 175.452 30.9271 178.641C34.1938 180.266 38.2437 180.935 46.3434 182.273C51.7187 183.16 54.4063 183.604 56.5814 183.156C60.8672 182.273 64.4015 179.114 65.9037 174.825C66.666 172.648 66.666 169.802 66.666 164.111V126.559ZM133.333 126.559C133.333 121.739 133.333 119.329 133.908 117.415C135.238 112.989 138.711 109.633 143.034 108.594C144.904 108.145 147.201 108.334 151.795 108.714C159.769 109.372 163.754 109.701 167.005 110.959C174.499 113.857 180.217 120.328 182.39 128.369C183.333 131.857 183.333 136.039 183.333 144.404V145.949C183.333 154.525 183.333 158.814 182.308 162.441C180.295 169.562 175.483 175.452 169.072 178.641C165.805 180.266 161.755 180.935 153.655 182.273C148.28 183.16 145.593 183.604 143.418 183.156C139.132 182.274 135.597 179.114 134.095 174.825C133.333 172.648 133.333 169.802 133.333 164.111V126.559Z"
										  stroke="#A244ED"
										  stroke-width="8"
										  stroke-linecap="round" />
									<path class="line"
										  d="M100 43.6621V100"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M130.986 56.3379V87.3238"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M115.492 52.1133V91.5499"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M146.479 63.3809V80.2823"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M69.0137 56.3379V87.3238"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M84.5078 52.1133V91.5499"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
									<path class="line"
										  d="M53.5215 63.3809V80.2823"
										  stroke="#A244ED"
										  stroke-width="6"
										  stroke-linecap="round" />
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<style scoped
	   lang="scss">
		.headphones {
			display: flex;
			align-items: center;
			justify-content: center;
			height: 100%;

			.hp {
				stroke-dasharray: 230;
				stroke-dashoffset: 230;
			}

			.line {
				opacity: 0;
			}
		}
	</style>
