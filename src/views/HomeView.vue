<script setup>
import { onMounted } from 'vue';
import MainHeader from '@/components/MainHeader/MainHeader.vue';

// import { ScrollTrigger } from "gsap/ScrollTrigger";

import CheckboxQuestion from '@/components/CheckboxQuestion/CheckboxQuestion.vue';
import { checkboxQuestionTrack1 } from "@/quizData/checkboxQuestionTrack1"


const showAfter = () => {
	console.log('showing after');
}

onMounted(() => {



});
</script>

<template>
	<PerfectScrollbar>
		<MainHeader />

		<div class="container mt-rem-6-50 mt-xs-rem-5-0 mb-rem-4-0 mb-xs-rem-3-0"
			 id="question-app">
			<checkbox-question :answers-grid="checkboxQuestionTrack1.answersGrid"
							   :check-rule="checkboxQuestionTrack1.checkRule"
							   :use-clv="true"
							   v-on:complete="showAfter()">
				<template v-slot:question-text="">
					<div class="row">
						<div class="col-lg-6 col-xs-12">
							<h4 class="mb-rem-1-50 mb-xs-rem-1-50">Вспомни, что ждали от&nbsp;тебя на&nbsp;прошлой
								должности.
							</h4>
							<p class="text text-m text-gray-1">Выбери один или несколько ответов.
							</p>
						</div>
					</div>
				</template>
				<template v-slot:feedback-0="">
					<div class="row">
						<div class="col-lg-8 col-xs-12">
							<div class="balloon balloon_large balloon_white">
								<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-color-primary">Именно так!
								</h3>
								<p class="text text-l">Специалисту нужно знать, как выполнять работу, делать
									ее&nbsp;качественно и&nbsp;в&nbsp;срок.
								</p>
								<p class="text text-l">От&nbsp;руководителя ждут почти того&nbsp;же&nbsp;самого,
									но&nbsp;есть ключевое отличие.
								</p>
							</div>
						</div>
						<div class="col-lg-4 hide-xs">
							<div class="block-img pl-rem-2-75 pr-rem-2-75 pt-rem-0 pb-rem-0">
								<div class="js-headphones">&nbsp;
								</div>
							</div>
						</div>
					</div>
				</template>
				<template v-slot:feedback-1="">
				</template>
			</checkbox-question>
		</div>
	</PerfectScrollbar>
</template>

<style scoped
	   lang="scss"></style>
