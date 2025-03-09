<script setup>
import { ref, onMounted } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'

import DoubleQuestion from '@/components/DoubleQuestion/DoubleQuestion.vue'
import { doubleQuestions } from '@/quizData/doubleQuestion'

import { fetchSvg } from '@/scripts/utils/fetchSvg'

const svgContent = ref('')

const showAfter = () => {
	console.log('after');
}

onMounted(async() => {
	svgContent.value = await fetchSvg()
});
</script>

<template>
	<PerfectScrollbar>
		<MainHeader />

		<div class="mt-rem-6-50 mt-xs-rem-5-0">
			<double-question :questions-data="doubleQuestions"
							 :use-clv="true"
							 v-on:complete="showAfter">
				<template v-slot:feedback-0="">
					<div class="row">
						<div class="col-lg-8 col-xs-12">
							<div class="card card_large card_white">
								<p class="text text-l">Видишь, какие два разных подхода к работе. Специалист выполняет
									задачи сам. А руководитель, наоборот, делает это с помощью команды и помогает ей
									достичь высоких результатов.
								</p>
							</div>
						</div>
						<div class="col-lg-4 hide-xs">
							<div class="card card_medium card_white h-100">
								<div class="headphones svg-container"
									 v-html="svgContent">
								</div>
							</div>
						</div>
					</div>
				</template>
			</double-question>
		</div>

		<!-- <div style="height: 100vh"></div> -->

		<!-- <div style="height: 100vh"></div> -->
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
