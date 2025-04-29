<script setup>
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import NavigationButtons from '@/components/NavigationButtons/NavigationButtons.vue'
import { useScrollTracker } from '@/composables/useScrollTracker'
import usePagesViewedTracker from '@/composables/usePagesViewedTracker'
import PageLoader from '@/components/PageLoader/PageLoader.vue'

const { pageViewed } = usePagesViewedTracker()
const { container } = useScrollTracker()
</script>

<template>
	<Transition name="fade-page"
				appear>
		<main class="scroll-container"
			  ref="container">
			<PageLoader />
			<MainHeader />
			<div class="container hero-section">
				<div class="row pt-rem-6-0 pb-rem-8-0 pt-xs-rem-2-0 mb-xs-rem-2-0">
					<div class="col-lg-7 col-xs-12">
						<h3 class="mb-rem-1-0 mb-xs-rem-0-75">Проект</h3>
						<h1 class="h1-64-36 mb-rem-1-0 mb-xs-rem-0-75">Leadership Beats</h1>
						<h3 class="mb-rem-1-0 hide-xs">музыкальное руководство по&nbsp;менеджменту</h3>
						<h5 class="mb-rem-1-0 hide-lg mb-xs-rem-11-0">музыкальное <br />руководство<br />
							по&nbsp;менеджменту</h5>
					</div>
					<div class="col-lg-1 hide-xs"> </div>
					<div class="col-lg-4 col-xs-12">
						<picture>
							<source srcset="/assets/img/about/dev-xs.png"
									media="(max-width: 719px), (orientation: landscape) and (max-height: 600px)" />
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="/assets/img/about/dev.png"
								 alt="header logo" />
						</picture>
						<h3 class="text-center">Марина Готовцева</h3>
						<h4 class="text-center text-light">frontend developer</h4>
					</div>
				</div>
			</div>
			<div class="container mb-rem-3-50 mb-xs-rem-3-0">
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<div class="card_extrasmall card_border-violet card_white">
							<p class="text-center text-xl text-bold text-secondary hide-xs">Адаптационный электронный
								курс для&nbsp;начинающего руководителя</p>
							<p class="text-center text-l text-bold text-secondary hide-lg">Адаптационный электронный
								курс для&nbsp;начинающего руководителя</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container mb-rem-3-50 mb-xs-rem-3-0">
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<img class="img_center mb-rem-3-50 mb-xs-rem-2-50"
							 src="/assets/svg/star.svg"
							 alt="">
						<div class="card_medium card_border-gradient card_white">
							<p class="text-l mb-rem-0-50 mb-xs-rem-0-50">Курс создан для тех, кто только начинает свой
								путь в&nbsp;роли руководителя. Переход на&nbsp;управленческую позицию часто
								сопровождается стрессом, неуверенностью и&nbsp;множеством вопросов:
								&laquo;Справлюсь&nbsp;ли я?&raquo;, &laquo;Как найти общий язык с&nbsp;командой?&raquo;,
								&laquo;Что делать, если я&nbsp;допущу ошибку?&raquo;.</p>
							<p class="text-l mb-rem-1-0 mb-xs-rem-1-0">Курс призван не&nbsp;только помочь развить
								управленческие навыки, но&nbsp;и&nbsp;справиться с&nbsp;эмоциональными вызовами новой
								роли. Курс создает пространство, где начинающие руководители могут учиться без страха
								и&nbsp;давления.</p>
							<p class="text-l text-bold mb-rem-0-50 mb-xs-rem-0-50">Почему музыка?</p>
							<p class="text-l">Музыка&nbsp;&mdash; это универсальный язык, который объединяет людей и&nbsp;помогает справиться со&nbsp;стрессом.</p>
						</div>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>
			<div class="container mb-rem-3-50 hide-xs">
				<div class="row">
					<div class="col-lg-2">
					</div>
					<div class="col-lg-8">
						<img class="img_center mb-rem-3-50 mb-xs-rem-2-50"
							 src="/assets/svg/star.svg"
							 alt="">
						<div class="card_medium card_border-neutral-12 card_white">
							<h5 class="text-bold mb-rem-2-0 mb-xs-rem-1-50">Особенности курса</h5>

							<ul class="list list__ul text text-l">
								<li class="list__ul--item">Практические инструменты для решения реальных управленческих
									задач</li>
								<li class="list__ul--item">Интерактивные упражнения, помогающие освоить новые навыки
								</li>
								<li class="list__ul--item">Вдохновляющие истории успеха из&nbsp;мира музыки
									и&nbsp;бизнеса</li>
								<li class="list__ul--item">Визуальные элементы с&nbsp;музыкальной тематикой для лучшего
									усвоения</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-2">
					</div>
				</div>
			</div>
			<div class="container container_bg-band mb-rem-1-0 hide-xs">
				<div class="row">
					<div class="col-lg-2">
					</div>
					<div class="col-lg-8">
						<div class="card_medium card_border-neutral-12 card_blur">
							<p class="text-l mb-rem-1-0">Музыкальные метафоры -это инструмент для
								объяснения управленческих концепций:</p>
							<ul class="list list__ul text text-l mb-rem-1-0">
								<li class="list__ul--item">Руководитель как дирижёр оркестра</li>
								<li class="list__ul--item">Команда как ансамбль разных инструментов</li>
								<li class="list__ul--item">Рабочие процессы как музыкальные композиции</li>
								<li class="list__ul--item">Коммуникация как гармония звуков</li>
							</ul>
							<p class="text-l">Они помогают лучше усваивать информацию, создают лёгкую атмосферу, делают
								процесс обучения приятным и&nbsp;эффективным.</p>
						</div>
					</div>
					<div class="col-lg-2">
					</div>
				</div>
			</div>
			<div class="container mb-xs-rem-3-0 hide-lg">
				<div class="row">
					<div class="col-xs-12">
						<img src="/assets/img/about/band-xs.png"
							 class="img_center"
							 alt="band"
							 style="opacity: .7;">
					</div>
				</div>
			</div>

			<div class="container mb-xs-rem-3-0 hide-lg">
				<div class="row">
					<div class="col-xs-12">
						<img class="img_center mb-rem-2-50 mb-xs-rem-2-50"
							 src="/assets/svg/star.svg"
							 alt="">
						<div class="card_medium card_border-neutral-12 card_white">
							<p class="text-l mb-rem-1-0 mb-xs-rem-0-75">Музыкальные метафоры -это инструмент для
								объяснения управленческих концепций:</p>

							<ul class="list list__ul text text-l mb-rem-1-0 mb-xs-rem-0-75">
								<li class="list__ul--item">Руководитель как дирижёр оркестра</li>
								<li class="list__ul--item">Команда как ансамбль разных инструментов</li>
								<li class="list__ul--item">Рабочие процессы как музыкальные композиции</li>
								<li class="list__ul--item">Коммуникация как гармония звуков</li>
							</ul>
							<p class="text-l">Они помогают лучше усваивать информацию, создают лёгкую атмосферу, делают
								процесс обучения приятным и&nbsp;эффективным.</p>
						</div>
					</div>
				</div>
			</div>

			<div class="container mb-rem-7-0 mb-xs-rem-4-0">
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<img class="img_center mb-rem-3-50 mb-xs-rem-2-50"
							 src="/assets/svg/star.svg"
							 alt="">
						<div class="card_medium card_border-neutral-12 card_white">
							<h5 class="text-bold mb-rem-2-0 mb-xs-rem-1-50">По&nbsp;окончании курса участники:</h5>

							<ul class="list list__ul text text-l">
								<li class="list__ul--item">Освоят ключевые инструменты управления командой</li>
								<li class="list__ul--item">Научатся эффективно коммуницировать с&nbsp;подчинёнными</li>
								<li class="list__ul--item">Разовьют уверенность в&nbsp;принятии решений</li>
								<li class="list__ul--item">Смогут справляться со&nbsp;стрессом и&nbsp;давлением</li>
								<li class="list__ul--item">Найдут свой уникальный стиль руководства</li>
							</ul>
						</div>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row mb-rem-7-0 mb-xs-rem-4-0">
					<div class="col-lg-12 col-xs-12">
						<div class="icon-row">
							<img class=""
								 src="/assets/svg/note-pink.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/play-green.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/volume.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/disc.svg"
								 alt="">

							<img class=""
								 src="/assets/svg/mic.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/double-note.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/headphones-pink.svg"
								 alt="">
							<img class=""
								 src="/assets/svg/disc.svg"
								 alt="">
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<p class="text-l">Здесь представлена сокращенная версия курса: вступление и&nbsp;два первых
							трека.</p>
						<p class="text-l">Рекомендуется просматривать курс на&nbsp;компьютере, так как некоторые
							анимации доступны только в&nbsp;десктопной версии.</p>
					</div>
				</div>
			</div>

			<NavigationButtons class="js-nav-buttons" />
		</main>
	</Transition>
</template>