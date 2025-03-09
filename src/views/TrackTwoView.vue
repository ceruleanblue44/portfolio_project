<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import CheckboxQuestion from '@/components/CheckboxQuestion/CheckboxQuestion.vue'
import { checkboxQuestionTrack2 } from '@/quizData/checkboxQuestionTrack2'

import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'

const svgContent = ref('')

const showAfter = async (isCorrect) => {
	console.log(isCorrect);
	const color = isCorrect ? 'green' : 'red'
	svgContent.value = await fetchSvg(color)
	if (!svgContent.value) return

	nextTick(() => {
		headphonesAnimation(color)
	})
}

onMounted(async () => {

})

</script>
<template>
	<PerfectScrollbar>
		<MainHeader />
		<div class="container mt-rem-6-50 mt-xs-rem-5-0 mb-rem-7-0 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12"><img alt=""
						 class="hide-xs"
						 src="../assets/img/track-2/track-2-top.svg" /> <img alt=""
						 class="hide-lg w-100"
						 src="../assets/img/track-2/track-2-top-xs.svg" />
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-6-0">
			<div class="container container_with-bg-img-black w-100">
				<div class="row">
					<div class="col-lg-5 col-xs-12 mb-xs-rem-1-50">
						<div class="card card_track-dark mr-rem-2-50"><img alt=""
								 class="img_center mb-rem-2-0 mb-xs-rem-1-0"
								 src="../assets/img/track-2/track-2.png" />
							<p class="text text-s text-center text-white">Трек 2
							</p>
							<div class="d-flex jc-center ai-center">
								<img src="../assets/svg/wave.svg"
									 class="flex-shrink-0 mr-rem-1-0 mr-xs-rem-1-0"
									 alt="">
								<h2 class="text-white">The Climb
								</h2>
							</div>
						</div>
					</div>
					<div class="col-lg-7 col-xs-12">
						<h2 class="text-white mb-rem-2-0 mb-xs-rem-2-0">Из этого трека ты узнаешь:
						</h2>
						<ul class="list list__ul list__ul_monochrome text text-xl text-white-80">
							<li class="list__ul--item">Чем занимаются руководители на разных уровнях управления?</li>
							<li class="list__ul--item">Как распределяются области управления между руководителями?</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Твои приоритеты
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Руководители разных уровней менеджмента
						фокусируются на определенных вопросах управления, чтобы эффективно справляться со своими
						задачами.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0"
			 id="question-app">
			<checkbox-question :answers-grid="checkboxQuestionTrack2.answersGrid"
							   :check-rule="checkboxQuestionTrack2.checkRule"
							   :use-clv="true"
							   v-on:complete="showAfter">
				<template v-slot:question-text="">
					<h4 class="mb-rem-1-50 mb-xs-rem-1-0">Перед тем как изучить эту тему, подумай, чему ты уделяешь
						большую часть своего внимания. Какие области управления для тебя наиболее важные?
					</h4>
					<p class="text text-m text-gray-1">Выбери один или несколько ответов.
					</p>
				</template>
				<template v-slot:feedback-0="">
					<div class="row">
						<div class="col-lg-8 col-xs-12">
							<div class="card card_large card_white">
								<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-color-primary">Нам нравится твой ответ!
								</h3>
								<p class="text text-l">У каждого уровня менеджмента есть своя ключевая область
									управления. Но иногда начинающие руководители могут взять на себя все обязанности,
									из-за чего быстро устают. Сейчас ты узнаешь основную область управления каждого
									руководителя.
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
				<template v-slot:feedback-1="">
					<div class="row">
						<div class="col-lg-8 col-xs-12">
							<div class="card card_large card_white">
								<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-red">Не совсем так
								</h3>
								<p class="text text-l">Конечно, руководителям нужно обращать внимание на все области
									управления, но для каждого есть одна ключевая. Взяв на себя много обязанностей,
									можно быстро устать и не справиться с ними. Сейчас ты узнаешь основную область
									управления каждого руководителя.
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
			</checkbox-question>
		</div>
		<div class="container mt-rem-9-75 mb-rem-9-75 mt-xs-rem-6-0 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<div class="block-music">
						<div class="block-music__text">
							<div class="text-64-40">Определи <span class="text-gray-2">свою ключевую</span> область
								управления
								<span class="text-gray-2">и&nbsp;сосредоточься на ней!</span>
							</div>
						</div>
						<div class="block-music__img hide-xs"><img alt=""
								 src="../assets/img/track-2/img-1.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-rem-3-0 mb-xs-rem-2-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Партии руководите&shy;лей
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Разделение областей управления позволяет
						определить, какими вопросами должны заниматься менеджеры на своих уровнях и на чем им
						фокусироваться,
						чтобы эффективно справляться со своими задачами.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-3-75 mb-xs-rem-2-50">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<div class="block-double">
						<div class="block-double__left">
							<div class="text-gray-1">
								<h5 class="mb-rem-1-50 mb-xs-rem-1-0"><span class="text-bold">Управление
										исполнением</span>
								</h5>
								<p class="text text-l">Как добиться того, чтобы команда и&nbsp;люди в ней работали
									эффективно?
								</p>
							</div>
						</div>
						<div class="block-double__right"><img alt=""
								 src="../assets/img/track-2/cards/card-1.png" />
							<h2 class="h2 text-center">Менеджмент
								<br />
								начального уровня
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<div class="block-double">
						<div class="block-double__left">
							<div class="text-gray-1">
								<h5 class="mb-rem-1-50 mb-xs-rem-1-0"><span class="text-bold">Управление
										взаимодействием</span>
								</h5>
								<p class="text text-l">Как добиться того, чтобы люди и&nbsp;подразделения эффективно
									работали
									совместно?
								</p>
							</div>
						</div>
						<div class="block-double__right"><img alt=""
								 src="../assets/img/track-2/cards/card-2.png" />
							<h2 class="h2 text-center">Менеджмент
								<br />
								среднего уровня
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<div class="block-double">
						<div class="block-double__left">
							<div class="text-gray-1">
								<h5 class="mb-rem-1-50 mb-xs-rem-1-0"><span class="text-bold">Управление
										ресурсами</span>
								</h5>
								<p class="text text-l">Как добиться эффективного распределения ресурсов?
								</p>
							</div>
						</div>
						<div class="block-double__right"><img alt=""
								 src="../assets/img/track-2/cards/card-3.png" />
							<h2 class="h2 text-center">Топ-менеджмент
							</h2>
						</div>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<div class="block-double">
						<div class="block-double__left">
							<div class="text-gray-1">
								<h5 class="mb-rem-1-50 mb-xs-rem-1-0"><span class="text-bold">Управление
										стратегией</span>
								</h5>
								<p class="text text-l">Куда направить усилия организации в целом?
								</p>
							</div>
						</div>
						<div class="block-double__right"><img alt=""
								 src="../assets/img/track-2/cards/card-4.png" />
							<h2 class="h2 text-center text-white">Стратегический
								<br />
								менеджмент
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container mb-rem-3-75 mb-xs-rem-2-50">
			<p class="text text-l">Одновременно заниматься вопросами управления на своем и &laquo;чужих&raquo; уровнях
				&mdash;
				неэффективно. Поэтому для каждого руководителя отводится одна основная область управления.
			</p>
		</div>
	</PerfectScrollbar>
</template>