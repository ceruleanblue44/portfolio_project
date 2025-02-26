<script setup>
import { onMounted, nextTick } from 'vue';
import MainHeader from '@/components/MainHeader/MainHeader.vue';

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initLottieScroll } from '@/scripts/ui/lottieScroll';
import wordsJson from '@/assets/lottie/words.json?url';

import { highlightBlocks } from '@/scripts/ui/highlightBlocks';
import { textAnimation } from '@/scripts/ui/textAnimation';

import CheckboxQuestion from '@/components/CheckboxQuestion/CheckboxQuestion.vue';
import { checkboxQuestionTrack1 } from "@/quizData/checkboxQuestionTrack1"


onMounted(async () => {
	// Wait for the DOM to be fully updated
	await nextTick();

	// Select the Lottie container and set its data-src attribute
	const lottieElement = document.querySelector('.js-lottie-scroll');

	if (lottieElement) {
		lottieElement.dataset.src = wordsJson;
	}
	// Initialize the Lottie animation
	initLottieScroll();

	highlightBlocks()

	setTimeout(() => {
		ScrollTrigger.refresh();
	}, 500);

	textAnimation()
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

		<div class="container mb-rem-7-0 mb-xs-rem-6-0">
			<div class="card_large card_border-neutral-12 js-text-card">
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<!-- <div class="icon-row icon-row-xs">
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
            </div> -->
					</div>
					<div class="col-lg-12 col-xs-12 d-flex ai-center">
						<div class="pt-80 pb-60 pb-xs-60 pt-xs-60 w-100">
							<p class="text-64-32 text-uppercase text-center mb-25 mb-xs-15 js-text-1"><i>Что со мной не
									так?</i>
							</p>
							<h1 class="text-bold text-uppercase h1-96-40 text-center js-text-2">Все нормально!
							</h1>
						</div>
					</div>
					<div class="col-lg-12 col-xs-12">
						<!-- <div class="icon-row">
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
            </div> -->
					</div>
				</div>
			</div>
		</div>
		<!-- Highlight Blocks -->
		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<div class="card_large card_border-neutral-12">
				<div class="row mb-10 mb-xs-10">
					<div class="col-lg-4 col-xs-12 mb-xs-rem-3-0">
						<div class="sticky"
							 style="top: 35%;">
							<h2 class="h2">Сложности &mdash; это норма
							</h2>
						</div>
					</div>
					<div class="col-lg-2 hide-xs">&nbsp;
					</div>
					<div class="col-lg-6 col-xs-12">
						<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
							<p class="text text-l">В роли исполнителя нужно было выполнять конкретные задачи. А теперь
								приходится делегировать, контролировать и принимать решения.
							</p>
						</div>
						<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
							<p class="text text-l">На новый режим сложно перестроиться, поэтому кажется, что лучше
								сделать все самому.
							</p>
						</div>
						<div class="card_medium card_neutral-12 js-block">
							<p class="text text-l">Но теперь тебе нужно не выполнять задачи, а управлять процессом, то
								есть смотреть на свою работу под другим углом.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container mb-rem-4-0 mb-xs-rem-2-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Смена мышления
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Все начинается со&nbsp;смены мышления,
						твоего восприятия. Теперь все действия и&nbsp;решения надо направлять на&nbsp;развитие команды.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container container_full container_full-xs pos-r mb-rem-4-0 mb-xs-rem-2-0">
			<img alt=""
				 class="hide-xs"
				 src="../assets/img/track-1/zipper.png" /> <img alt=""
				 class="hide-lg"
				 src="" />
			<div class="pos-a hide-xs"
				 style="left: 80px; bottom: 32%; width: 35%;">
				<p class="text text-xl text-semibold">Возможно, сейчас ты пытаешься совместить в себе две роли:
					специалиста и руководителя.
				</p>
				<p class="text text-xl text-semibold">Но пришло время их разделить.
				</p>
			</div>
			<div class="pos-a hide-lg"
				 style="left: 12px; bottom: -6px; width: 209px;">
				<p class="text text-xl text-semibold">Возможно, сейчас&nbsp;ты пытаешься совместить в себе две роли:
					специалиста и руководителя.
				</p>
				<p class="text text-xl text-semibold">Но пришло время их разделить.
				</p>
			</div>
		</div>
		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
						 src="../assets/svg/star.svg"
						 alt="">
					<p class="text text-xl text-center">Сразу поменять мышление и перестроиться сложно.
						Но&nbsp;постепенно обучаясь и&nbsp;делая маленькие шаги, ты&nbsp;заметишь результат.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>

		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">А как было раньше?
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Сначала нужно осознать свою новую роль и
						обязанности. Чтобы почувствовать разницу, посмотри на предыдущую роль.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>


		<div class="container mb-rem-4-0 mb-xs-rem-3-0"
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

		<div class="container mt-rem-9-75 mt-xs-rem-6-0 mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row mb-rem-1-50 mb-xs-rem-1-50">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">В чем разница?
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Сейчас от тебя ждут не личных
						достижений, а результата труда твоей команды. Она решает задачи, качественно выполняет работу и
						соблюдает сроки. А ты ей с этим помогаешь.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<!-- Highlight Blocks -->
		<div class="container mb-rem-5-0 mb-xs-rem-4-0">
			<div class="card_large card_border-neutral-12">
				<div class="row mb-rem-3-0 mb-xs-rem-2-0">
					<div class="col-lg-4 col-xs-12 mb-xs-rem-2-0">
						<div class="sticky"
							 style="top: 35%;">
							<h3 class="h3">В роли руководителя ты...
							</h3>
						</div>
					</div>
					<div class="col-lg-2 hide-xs">&nbsp;
					</div>
					<div class="col-lg-6 col-xs-12">
						<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
							<p class="text-l">Развиваешься не только сам, а нанимаешь высококлассных экспертов
							</p>
						</div>
						<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
							<p class="text-l">Не сам выполняешь все, а создаешь командный процесс, чтобы росло качество
								выполнения задач
							</p>
						</div>
						<div class="card_medium card_neutral-12 js-block">
							<p class="text-l">Определяешь не свой темп работы, а планируешь работу группы людей и
								просчитываешь риски
							</p>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<h4>Ты достигаешь результатов не сам, а с помощью команды. <span class="text-red">Твоя
								задача</span> &mdash; выстроить процесс так, <span class="text-red">чтобы</span> у нее
							<span class="text-red">все получилось</span>.
						</h4>
					</div>
				</div>
			</div>
		</div>

		<div class="container mb-rem-5-0 mb-xs-rem-4-0"><img alt=""
				 class="hide-xs"
				 src="../assets/img/track-1/dj.png" />
			<!-- <img alt="" class="hide-lg" src="user/img/album-1/track-1/dj-xs.png" /> -->
		</div>
		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<svg class="text-color-secondary icon-svg icon icon_xl img_center mb-rem-1-50 mb-xs-rem-1-0">
						<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
							 src="../assets/svg/star.svg"
							 alt="">
					</svg>
					<p class="text text-xl text-center">В основе правильных действий, результатов и&nbsp;решений лежит
						управленческое мышление&nbsp;&mdash; взгляд и отношение к&nbsp;ситуациям в команде.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 mb-rem-0-75 mb-xs-rem-0-75">Теперь главное &mdash; перейти на&nbsp;новый режим!
					</h1>
					<hr class="hr hr_neutral-16" />
				</div>
			</div>
		</div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<div class="bg-black-block">
						<div class="bg-black-block__text pb-0 pr-rem-1-50">
							<h3 class="h3 mb-25 mb-xs-25 text-white">Больше открытий
							</h3>
							<div class="text text-l text-white mb-5 mb-xs-5">Мальчик уехал на&nbsp;выходные
								и&nbsp;больше не&nbsp;вернулся, а&nbsp;теперь входит в книгу рекордов Гиннесса как самый
								популярный артист в&nbsp;мире.
							</div>
							<div class="text text-l text-white">Эйбель Тесфайе начинал c R&#39;n&#39;B &mdash;
								жизнерадостной танцевальной музыки. Но&nbsp;по&nbsp;предложению продюсера певец изменил
								концепцию на&nbsp;меланхоличную, с&nbsp;замедленным битом и&nbsp;обилием басов. Это
								и&nbsp;дало толчок блестящему будущему артиста, которого сейчас мы&nbsp;знаем как the
								Weeknd.
							</div>
						</div>
						<div class="bg-black-block__img">
							<img alt=""
								 src="../assets/img/track-1/img-1.png" />
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container btn-container btn-container_center mt-rem-9-75 mb-rem-2-50 mt-xs-rem-6-0 mb-xs-rem-2-50">
			<button class="btn btn_back"
					type="button"><span class="btn__text">Назад</span>
			</button>
			<button class="btn btn_next"
					type="button"><span class="btn__text">Продолжить</span>
			</button>
		</div>


	</PerfectScrollbar>
</template>

<style scoped></style>