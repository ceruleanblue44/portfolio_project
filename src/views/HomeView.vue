<script setup>
import { onMounted } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import { textGramophoneAnimation } from '@/scripts/ui/textGramophoneAnimation'


onMounted(() => {
	textGramophoneAnimation()
});
</script>

<template>
	<PerfectScrollbar>
		<MainHeader />
		<div style="height: 100vh"></div>
		<div class=" mt-rem-6-50 mt-xs-rem-5-0 mb-rem-4-0 mb-xs-rem-3-0">
			<div class="gramophone mb-rem-4-0 mb-xs-rem-3-0">
			<div class="gramophone__container js-gramophone-container">
				<div class="gramophone__background"><img alt=""
						 class="gramophone__wave hide-xs"
						 src="../assets/img/track-1/gramophone/wave.png" /> <img alt=""
						 class="gramophone__wave hide-lg"
						 src="../assets/img/track-1/gramophone/wave-xs.png" /> <img alt=""
						 class="gramophone__note-1"
						 src="../assets/img/track-1/gramophone/note-1.svg" /> <img alt=""
						 class="gramophone__note-2"
						 src="../assets/img/track-1/gramophone/note-2.svg" />
					<div class="container h-100 pos-r"
						 style="height: 100% !important;">
						<div class="row h-100 middle">
							<div class="col-lg-7 col-xs-12">&nbsp;
							</div>
							<div class="col-lg-5 col-xs-12"><img alt=""
									 class="gramophone__gramophone"
									 src="../assets/img/track-1/gramophone/gramophone.png" />
							</div>
						</div>
					</div>
				</div>

				<div class="container gramophone__text-wrapper ">
					<div class="row gramophone__text js-gramophone-text">
						<div class="col-lg-6 col-xs-10 mb-rem-4-50">
							<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Кто делает?
							</h1>
							<p class="text text-l text-white">Определи, чего ты хочешь от своих коллег.
							</p>
						</div>
					</div>
					<div class="row gramophone__text js-gramophone-text">
						<div class="col-lg-6 col-xs-10 mb-rem-4-50">
							<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">За счет чего?
							</h1>
							<p class="text text-l text-white">Выстрой процесс достижения цели.
							</p>
						</div>
					</div>
					<div class="row gramophone__text js-gramophone-text">
						<div class="col-lg-6 col-xs-10 mb-rem-4-50">
							<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Что делаем?
							</h1>
							<p class="text text-l text-white">Реши, к какому результату должна прийти твоя команда.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div style="height: 100vh"></div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
