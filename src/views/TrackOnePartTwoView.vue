<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ToggleImg from '@/components/ToggleImg/ToggleImg.vue'
import { toggleImg } from '@/toggleAnimationsData/toggleImg'
import { textScrollAnimation } from '@/scripts/ui/textScrollAnimation'
import { textGramophoneAnimation } from '@/scripts/ui/textGramophoneAnimation'

onMounted(() => {

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textScrollAnimation()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textGramophoneAnimation()
});

</script>

<template>
	<PerfectScrollbar>
		<MainHeader />
		<div class="container mt-rem-6-50 mt-xs-rem-5-0">
			<h1 class="text-center mb-rem-0-75 mb-xs-rem-0-75">Переключись на новый режим
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-3-0" />
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row">
				<div class="col-lg-4 hide-xs">&nbsp;
				</div>
				<div class="col-lg-4 col-xs-12">
					<div class="hint text-center">Нажми на кнопку, чтобы перейти дальше
					</div>
				</div>
				<div class="col-lg-4 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-2-0">
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<ToggleImg :label-texts="toggleImg.labelTexts"
							   :tweens="toggleImg.tweens">
						<div class="pos-r"><img alt=""
								 id="toggle-img-1-1"
								 src="../assets/img/toggleImg/band.png" /> <img alt=""
								 class="pos-a"
								 id="toggle-img-1-2"
								 src="../assets/img/toggleImg/baton.png"
								 style="right: 0; top: 0; max-width: 17%;" />
						</div>
					</ToggleImg>
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row js-text-container">
				<div class="col-lg-12 col-xs-12 d-flex ai-center">
					<div class="pt-100 pb-80 pb-xs-60 pt-xs-60 w-100">
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">Сейчас под твоим
							началом
						</h1>
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">множество талантливых людей,
						</h1>
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">каждый из
							которых &mdash; эксперт в своей области.
						</h1>
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">Чтобы
							раскрыть их потенциал
						</h1>
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">и достичь
							выдающихся результатов,
						</h1>
						<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">нужен
							руководитель.
						</h1>
						<div class="card card_without card_lilac card_center w-fit mb-rem-2-0 mb-xs-rem-1-50 js-text">
							<h1 class="text-center">Теперь это твоя роль!
							</h1>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<div class="container container_with-bg">
				<h1 class="mb-rem-1-50 mb-xs-rem-1-50">Смена приоритетов
				</h1>
				<div class="row mb-rem-3-0 mb-xs-rem-2-0">
					<div class="col-lg-7 col-xs-12">
						<p class="text text-m">Твой главный приоритет &mdash; это команда. Поэтому в первую очередь
							разрешай те проблемы, которые сильно влияют на ее эффективность. Для этого поменяй свой
							распорядок дня. Работа должна строиться так:
						</p>
					</div>
					<div class="col-lg-5 hide-xs">&nbsp;
					</div>
				</div>
				<div class="hide-xs">
					<div class="mb-rem-3-0">
						<div class="pos-r pt-90 pb-80"
							 style="margin: 0 -60px;"><img alt=""
								 src="../assets/img/track-1/path-1.svg" />
							<div class="pos-a"
								 style="left: 121px; top: 0; width: 400px; height: 180px;">
								<div class="card card_gray h-100">
									<div class="d-flex ai-center h-100">
										<p class="text text-l text-center">В начале дня выпиши все задачи, которые стоят
											перед тобой и твоей командой.
										</p>
									</div>
								</div>
							</div>
							<div class="pos-a"
								 style="right: 98px; top: 32%; width: 400px; height: 180px;">
								<div class="card card_gray h-100">
									<div class="d-flex ai-center h-100">
										<p class="text text-l text-center">Команда &mdash; это самое главное. Поэтому
											начинай с&nbsp;задач, которые влияют на нее.
										</p>
									</div>
								</div>
							</div>
							<div class="pos-a"
								 style="left: 187px; bottom: 0; width: 400px; height: 180px;">
								<div class="card card_gray h-100">
									<div class="d-flex ai-center h-100">
										<p class="text text-l text-center">Когда их закончишь, можешь приступать
											к&nbsp;индивидуальным.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="hide-lg">
					<div class="mb-xs-rem-2-0">
						<div class="pos-r pt-90 pb-80"><img alt=""
								 class="pos-a mt-xs-85"
								 src="../assets/img/track-1/path-1-xs.svg"
								 style="top: 0; left: -24px;" />
							<div class="card card_gray mb-xs-rem-1-50">
								<p class="text text-l text-center">В начале дня выпиши все задачи, которые стоят перед
									тобой и твоей командой.
								</p>
							</div>
							<div class="card card_gray mb-xs-rem-1-50">
								<p class="text text-l text-center">Команда &mdash; это самое главное. Поэтому начинай
									с&nbsp;задач, которые влияют на нее.
								</p>
							</div>
							<div class="card card_gray">
								<p class="text text-l text-center">Когда их закончишь, можешь приступать
									к&nbsp;индивидуальным.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="card card_medium card-green">
					<p class="text text-l text-white">Каждый член команды играет свою роль. А под твоим руководством
						должна создаться неповторимая и завораживающая музыкальная композиция.
					</p>
				</div>
			</div>
		</div>

		<div class="container">
			<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Ключевые вопросы
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-1-50" />
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">Чтобы сформировать эффективную команду и
						управлять ею, тебе надо всегда искать ответы на 3 ключевых вопроса.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>

		<div class=" mb-rem-4-0 mb-xs-rem-3-0">
			<div class="gramophone js-gramophone mb-rem-4-0 mb-xs-rem-3-0">
				<div class="gramophone__head">&nbsp;
				</div>
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
						<img alt=""
							 class="gramophone__gramophone"
							 src="../assets/img/track-1/gramophone/gramophone.png" />
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
		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
						 src="../assets/svg/star.svg"
						 alt="">
					<p class="text text-xl text-center">Ответы на эти вопросы помогут тебе создать
						единый&nbsp;гармоничный процесс работы талантливых&nbsp;людей.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Почувствуй разницу
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-3-0" />
			<div class="row">
				<div class="col-lg-12 col-xs-12">
					<p class="text text-l">Давай посмотрим, насколько ты близок к мышлению руководителя. Подумай, как
						отвечает на вопросы специалист, а как руководитель.
					</p>
				</div>
			</div>
		</div>
		<div style="height: 100vh"></div>
	</PerfectScrollbar>
</template>