<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'

import { vinylAnimation } from '@/scripts/ui/vinylAnimation'
import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'
import { observeAnimation } from '@/scripts/ui/observeAnimation'
import PlayCircle from '@/assets/svg/play-circle.svg'

import { tabsInit } from '@/scripts/ui/tabs'
import { accordionInit } from '@/scripts/ui/accordion'

const svgContent = ref('');

onMounted(async () => {

	svgContent.value = await fetchSvg()

	await nextTick();

	vinylAnimation()
	tabsInit()
	accordionInit()
	observeAnimation(headphonesAnimation, 0.4, true)


})

</script>
<template>
	<main class="scroll-container">
		<MainHeader />
		<div class="container mt-rem-9-75 mt-xs-rem-6-0 mb-rem-9-75 mb-xs-rem-6-0">
			<div class="row">
				<div class="col-lg-2 hide-xs">
				</div>
				<div class="col-lg-8 col-xs-12">
					<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
						 src="../assets/svg/star.svg"
						 alt="">
					<p class="text text-xl text-center">Добро пожаловать в&nbsp;роль руководителя! Как&nbsp;исполнитель
						перед
						важным выступлением, ты&nbsp;сейчас переживаешь особенный момент. В&nbsp;альбоме
						&laquo;Хиты&raquo; ты
						найдешь все инструменты для успешного старта.
					</p>
				</div>
				<div class="col-lg-2 hide-xs">
				</div>
			</div>
		</div>
		<div class="container mb-rem-9-75 mb-xs-rem-6-0">
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
					<div class="col-xs-12 hide-lg">
						<div class="icon-row icon-row-xs">
							<img class=""
								 src="../assets/svg/note-pink.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/play-green.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/volume.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/playlist.svg"
								 alt="">

							<img class=""
								 src="../assets/svg/mic.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/double-note.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/headphones-pink.svg"
								 alt="">
							<img class=""
								 src="../assets/svg/disc.svg"
								 alt="">
						</div>
					</div>
					<div class="col-lg-10 col-xs-12 mt-40 mt-xs-60 pl-xs-0 pr-xs-0">
						<div class="vinyl__container-center mb-xs-120">
							<h1 class="h1-80-48 text-center text-primary">Сделай <span class="text-gray-3">свою
									<br />
									новую</span> роль ХИТОМ!
							</h1>
							<div class="hint vinyl__hint text-l text-center">Твоя цель
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
		<div class="container mb-rem-4-0 mb-xs-rem-4-0">
			<div class="row mb-rem-4-0 mb-xs-rem-4-0">
				<div class="col-lg-12 col-xs-12">
					<h1 class="h1 mb-rem-0-75 mb-xs-rem-0-75">Треки альбома
					</h1>
					<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-1-50" />
					<p class="text text-l text-gray-1">Этот альбом поможет тебе сформировать понимание своей новой роли
						и&nbsp;создать прочную основу для профессионального развития.
					</p>
					<p class="text text-l text-gray-1">Посмотри, какие треки тебя ждут.
					</p>
				</div>
			</div>


			<div class="tab tab_playlist js-tab-with-placeholder hide-xs">
				<div class="row">
					<div class="col-lg-4 col-xs-12">
						<div class="tab__items">
							<div class="tab__placeholder js-tab-placeholder">
								<div class="hint text-center text-m mt-rem-2-50">Нажимай на&nbsp;название трека, чтобы
									узнать о&nbsp;нем больше.
								</div>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Изменения при переходе на&nbsp;новую должность
								</h2>
								<p class="text-l text-gray-1">Познакомься с&nbsp;ожиданиями и&nbsp;стандартами
									эффективности в&nbsp;новой роли.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Уровни управления
								</h2>
								<p class="text-l text-gray-1">Изучи структуру менеджмента и&nbsp;определи свою зону
									ответственности.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Профиль руководителя
								</h2>
								<p class="text-l text-gray-1">Исследуй ключевые компетенции успешного лидера
									и&nbsp;спланируй
									свое развитие.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Первые шаги
								</h2>
								<p class="text-l text-gray-1">Освой стратегии быстрой интеграции и&nbsp;создания
									продуктивных
									отношений в&nbsp;команде.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Работа над ошибками
								</h2>
								<p class="text-l text-gray-1">Изучи распространенные сложности начинающих руководителей
									и&nbsp;способы их&nbsp;преодоления.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Командная динамика
								</h2>
								<p class="text-l text-gray-1">Выстрой эффективное взаимодействие в&nbsp;команде и&nbsp;с
									коллегами-руководителями.
								</p>
							</div>
							<div class="tab__item pt-rem-2-0 js-tab-item animate__animated animate__fadeInUp">
								<h2 class="mb-rem-1-25 mb-xs-rem-0-75">Новый формат
								</h2>
								<p class="text-l text-gray-1">Научись грамотно выстраивать отношения с&nbsp;бывшими
									коллегами
									в&nbsp;роли руководителя.
								</p>
							</div>
						</div>
					</div>
					<div class="col-lg-8 col-xs-12">
						<ol class="tab__list">
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>Changes
										</h2>
										<p class="text-s">Tupac Shakur</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>The Climb
										</h2>
										<p class="text-s">Miley Cyrus</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>Eye of&nbsp;the Tiger
										</h2>
										<p class="text-s">Survivor</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>Walk
										</h2>
										<p class="text-s">Foo Fighters</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>Try
										</h2>
										<p class="text-s">Pink</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>On&nbsp;Top of&nbsp;the World
										</h2>
										<p class="text-s">Imagine Dragons</p>
									</div>
									<PlayCircle />
								</div>
							</li>
							<li class="tab__list-item js-tab-link">
								<div class="d-flex jc-space-between w-100">
									<div>
										<h2>Look Around
										</h2>
										<p class="text-s">Red Hot Chili Peppers</p>
									</div>
									<PlayCircle />
								</div>
							</li>

						</ol>
					</div>
				</div>
			</div>
			<div class="hide-lg">
				<div class="row mb-60 mb-xs-30">
					<div class="col-lg-12 col-xs-12">
						<div class="hint text-center text-m mb-xs-25">Нажимай на&nbsp;название трека, чтобы узнать
							о&nbsp;нем больше.
						</div>
						<div class="accordion js-accordion"
							 data-collapse="true">
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">01
									</div>
									<div>
										<h3>Changes
										</h3>
										<p class="text-s">Tupac Shakur</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Изменения при переходе на&nbsp;новую
											должность
										</p>
										<p class="text-l text-gray-1">Познакомься с&nbsp;ожиданиями и&nbsp;стандартами
											эффективности в&nbsp;новой роли.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">02
									</div>
									<div>
										<h3>The Climb
										</h3>
										<p class="text-s">Miley Cyrus</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Уровни управления
										</p>
										<p class="text-l text-gray-1">Изучи структуру менеджмента и&nbsp;определи свою
											зону
											ответственности.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">03
									</div>
									<div>
										<h3>Eye of&nbsp;the Tiger
										</h3>
										<p class="text-s">Survivor</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Профиль руководителя
										</p>
										<p class="text-l text-gray-1">Исследуй ключевые компетенции успешного лидера
											и&nbsp;спланируй
											свое развитие.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">04
									</div>
									<div>
										<h3>Walk
										</h3>
										<p class="text-s">Foo Fighters</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Первые шаги
										</p>
										<p class="text-l text-gray-1">Освой стратегии быстрой интеграции и&nbsp;создания
											продуктивных отношений в&nbsp;команде.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">05
									</div>
									<div>
										<h3>Try
										</h3>
										<p class="text-s">Pink</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Работа над ошибками
										</p>
										<p class="text-l text-gray-1">Изучи распространенные сложности начинающих
											руководителей
											и&nbsp;способы их&nbsp;преодоления.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">06
									</div>
									<div>
										<h3>On&nbsp;Top of&nbsp;the World
										</h3>
										<p class="text-s">Imagine Dragons</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Командная динамика
										</p>
										<p class="text-l text-gray-1">Выстрой эффективное взаимодействие в&nbsp;команде
											и&nbsp;с
											коллегами-руководителями.
										</p>
									</div>
								</div>
							</div>
							<div class="accordion__item">
								<div class="accordion__title">
									<div class="accordion__num mr-xs-30">07
									</div>
									<div>
										<h3>Look Around
										</h3>
										<p class="text-s">Red Hot Chili Peppers</p>
									</div>
									<PlayCircle />
								</div>
								<div class="accordion__container animate__animated animate__fadeIn">
									<div class="accordion__content">
										<hr class="hr hr_neutral-16 mb-20 mb-xs-10" />
										<p class="text-28 text-bold mb-xs-rem-0-75">Новый формат
										</p>
										<p class="text-l text-gray-1">Научись грамотно выстраивать отношения
											с&nbsp;бывшими
											коллегами
											в&nbsp;роли руководителя.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="container mb-rem-4-0 mb-xs-rem-4-0">
			<div class="row">
				<div class="col-lg-8 col-xs-12">
					<div class="card card_medium card_white h-100 d-flex ai-center">
						<p class="text text-l">Нажми кнопку &laquo;Продолжить&raquo; чтобы перейти к&nbsp;первому треку.
							Если хочешь
							начать с&nbsp;другого, открой меню и&nbsp;выбери понравившийся трек.
						</p>
					</div>
				</div>
				<div class="col-lg-4 hide-xs">
					<div class="card card_medium card_white h-100">
						<div class="headphones svg-container js-animation"
							 v-html="svgContent">
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="container btn-container btn-container_center mb-rem-2-50 mb-xs-rem-2-0">
			<button class="btn btn_next"
					type="button"><span class="btn__text">Продолжить</span>
			</button>
		</div>
	</main>
</template>

<style scoped
	   lang="scss"></style>