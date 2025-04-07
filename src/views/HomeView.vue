<script setup>
import { ref, onMounted } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'




onMounted(() => {
	console.log('HomeView mounted')
})
</script>

<template>
	<Transition name="fade-page"
				appear>
		<main class="scroll-container"
			  ref="container">
			<MainHeader />
			<div class="container hero-section">
				<!-- <div class=""> -->
				<div class="row pt-rem-6-0">
					<div class="col-lg-7 col-xs-12">
						<h3 class=" mb-rem-1-0">Проект</h3>
						<h1 class="h1-64-48 mb-rem-1-0">Leadership Beats</h1>
						<h3 class="mb-rem-1-0">Музыкальное руководство по&nbsp;менеджменту</h3>
					</div>
					<div class="col-lg-1 hide-xs">&nbsp;</div>
					<div class="col-lg-4 col-xs-12">
						<picture>
							<source srcset="../assets/img/about/dev-xs.png"
									media="(max-width: 719px)" />
							<img class="img_center mb-rem-1-50"
								 src="../assets/img/about/dev.png"
								 alt="header logo" />
							<h3 class="text-center">Марина Готовцева</h3>
							<h3 class="text-center text-light">frontend developer</h3>
						</picture>
					</div>
				</div>
				<!-- </div> -->
			</div>
			<div class="container">
				<!-- <div class=""> -->
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<div class="card_extrasmall card_border-violet card_white">
							<p class="text-center text-xl text-bold text-secondary">Адаптационный электронный курс для начинающего руководителя</p>
						</div>
					</div>
				</div>
			</div>


		</main>
	</Transition>
</template>
