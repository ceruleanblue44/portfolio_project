<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import NavigationButtons from '@/components/NavigationButtons/NavigationButtons.vue'
import SkipButton from '@/components/SkipButton/SkipButton.vue'
import CheckboxQuestion from '@/components/CheckboxQuestion/CheckboxQuestion.vue'
import { checkboxQuestionTrack2 } from '@/quizData/checkboxQuestionTrack2'
import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { showHiddenContent } from '@/scripts/utils/showHiddenContent'
import { refreshScrollTrigger } from '@/scripts/utils/refreshScrollTrigger'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'
import { trackRecapAnimation } from '@/scripts/ui/trackRecapAnimation'
import InstrumentPicker from '@/components/InstrumentPicker/InstrumentPicker.vue'
import { instrumentsModals } from '@/contentModalsData/instrumentsModals'
import { swiperInit } from '@/scripts/ui/swiperSlider'
import ArrowSquareRight from '@/assets/svg/arrow-square-right.svg'
import ArrowSquareLeft from '@/assets/svg/arrow-square-left.svg'
import RangeSliders from '@/components/RangeSliders/RangeSliders.vue'
import { rangeSliders } from '@/rangeSlidersData/rangeSliders'
import { scrollToElement } from '@/scripts/utils/scrollToElement'
import { useScrollTracker } from '@/composables/useScrollTracker'
import usePagesViewedTracker from '@/composables/usePagesViewedTracker'

const { pageViewed } = usePagesViewedTracker()

const { container } = useScrollTracker()

const svgContent = ref('')
const svgContent1 = ref('')
const isSkipButtonVisible1 = ref(true)
const isSkipButtonVisible2 = ref(true)

const disableScrollbar = () => {
	document.body.style.overflow = 'hidden'
}

const enableScrollbar = () => {
	document.body.style.overflow = ''
}

const showAfter = async (isCorrect) => {
	const color = isCorrect ? 'green' : 'red'

	svgContent.value = await fetchSvg(color)
	if (!svgContent.value) return

	nextTick(() => {
		headphonesAnimation(color)
		showHiddenContent(0)
		refreshScrollTrigger()
		scrollToElement(0)
	})
}

const showAfterSkip = () => {
	isSkipButtonVisible1.value = false
	showHiddenContent(0)
	refreshScrollTrigger()
	scrollToElement(2)
}

const rangeSlidersComplete = async () => {
	svgContent1.value = await fetchSvg()

	refreshScrollTrigger()
	nextTick(() => {
		headphonesAnimation()
		refreshScrollTrigger()
		scrollToElement(1)

		if (pageViewed.value === false) {
			showHiddenContent(1)
			scrollToElement(1)
			refreshScrollTrigger()
		}
	})
}

const rangeSlidersSkipped = () => {
	isSkipButtonVisible2.value = false
	refreshScrollTrigger()
	showHiddenContent(1)
	scrollToElement(3)
	trackRecapAnimation()
}

onMounted(() => {
	swiperInit()

	setTimeout(() => {
		if (pageViewed.value === true) {
			trackRecapAnimation()
		}
	}, 300)
})

</script>
<template>
	<Transition name="fade-page"
				appear>
		<main ref="container"
			  class="scroll-container">
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
							<h2 class="text-white mb-rem-2-0 mb-xs-rem-2-0">Из&nbsp;этого трека ты&nbsp;узнаешь:
							</h2>
							<ul class="list list__ul list__ul_monochrome text text-xl text-white-80">
								<li class="list__ul--item">Особенности работы руководителей на&nbsp;разных уровнях
									управления</li>
								<li class="list__ul--item">Принципы распределения управленческих функций между
									руководителями</li>
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
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<p class="text text-l text-center text-xs-left text-gray-1">
							<!-- Руководители разных уровней менеджмента
						фокусируются на определенных вопросах управления, чтобы эффективно справляться со своими
						задачами. -->
							Руководители каждого уровня управления имеют свой фокус внимания. Прежде чем
							мы&nbsp;углубимся
							в&nbsp;тему, определи свои текущие приоритеты.
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>
			<div class="container mb-rem-4-0 mb-xs-rem-3-0"
				 id="question-app">
				<CheckboxQuestion :checkboxQuestionData="checkboxQuestionTrack2"
								  @complete="(isCorrect) => showAfter(isCorrect)">
					<template v-slot:question-text="">
						<h4 class="mb-rem-1-50 mb-xs-rem-1-0">
							На&nbsp;чем сконцентрировано твое внимание сейчас? Какие области управления для тебя
							наиболее
							важные?
						</h4>
						<p class="text text-m text-gray-1">Выбери один или несколько вариантов.
						</p>
					</template>
					<template v-slot:feedback-0="">
						<div class="row js-scroll-element"
							 data-scroll-id="0">
							<div class="col-lg-8 col-xs-12">
								<div class="card card_medium card_white">
									<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-primary">Отличный выбор!
									</h3>
									<p class="text text-l">
										Каждый уровень менеджмента имеет свою ключевую область ответственности.
										Начинающие
										руководители часто пытаются охватить все сферы, что приводит к&nbsp;быстрому
										выгоранию. Сейчас мы&nbsp;разберем основные зоны ответственности для каждого
										уровня
										управления.
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
						<div class="row js-scroll-element"
							 data-scroll-id="0">
							<div class="col-lg-8 col-xs-12">
								<div class="card card_medium card_white">
									<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-red">Не&nbsp;совсем так
									</h3>
									<p class="text text-l">Конечно, руководителям нужно обращать внимание на&nbsp;все
										области
										управления, но&nbsp;для каждого есть одна ключевая. Начинающие руководители
										часто
										пытаются охватить все сферы, что приводит к&nbsp;быстрому выгоранию. Сейчас
										мы&nbsp;разберем основные зоны ответственности для каждого уровня управления.
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
				</CheckboxQuestion>
				<SkipButton v-if="!pageViewed  && isSkipButtonVisible1"
							@click="showAfterSkip()" />
			</div>
			<section class="hidden js-hidden js-scroll-element"
					 data-scroll-id="2"
					 data-hidden-id="0">
				<div class="container mt-rem-9-75 mb-rem-9-75 mt-xs-rem-6-0 mb-xs-rem-6-0">
					<div class="row">
						<div class="col-lg-12 col-xs-12">
							<div class="block-music">
								<div class="block-music__text">
									<div class="text-64-40">Определи <span class="text-gray-2">свою ключевую</span>
										область
										управления
										<span class="text-gray-2">и&nbsp;сфокусируйся на&nbsp;ней!</span>
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
							<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Композиция управления
							</h1>
							<hr class="hr hr_neutral-16" />
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 hide-xs">
						</div>
						<div class="col-lg-8 col-xs-12">
							<p class="text text-l text-center text-xs-left text-gray-1">
								Эффективное распределение областей управления позволяет каждому уровню менеджмента
								сконцентрироваться на&nbsp;своих ключевых задачах.
							</p>
						</div>
						<div class="col-lg-2 hide-xs">
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
										<p class="text text-l">Как обеспечить эффективную работу всех участников
											команды?
										</p>
									</div>
								</div>
								<div class="block-double__right"><img alt=""
										 src="../assets/img/track-2/cards/card-1.png" />
									<h2 class="h2 text-center">Линейный
										<br />
										менеджмент
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
										<p class="text text-l">Как добиться того, чтобы люди и&nbsp;подразделения
											эффективно
											работали
											совместно?
										</p>
									</div>
								</div>
								<div class="block-double__right"><img alt=""
										 src="../assets/img/track-2/cards/card-2.png" />
									<h2 class="h2 text-center">Менеджмент
										<br />
										среднего звена
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
										<p class="text text-l">Как оптимально распределить ресурсы организации?
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
										<p class="text text-l">Как определить направление развития компании?
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
					<p class="text text-l">Одновременно заниматься вопросами управления на&nbsp;своем
						и&nbsp;&laquo;чужих&raquo;
						уровнях
						&mdash;
						неэффективно. Поэтому для каждого руководителя отводится одна основная область управления.
					</p>
				</div>

				<InstrumentPicker :modals-data="instrumentsModals" />

				<div class="container mb-rem-3-0 mb-xs-rem-2-50">
					<div class="row mb-rem-1-50 mb-xs-rem-1-50">
						<div class="col-lg-12 col-xs-12">
							<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Баланс управления
							</h1>
							<hr class="hr hr_neutral-16" />
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 hide-xs">
						</div>
						<div class="col-lg-8 col-xs-12">
							<p class="text text-l text-center text-xs-left text-gray-1">
								Хотя участники в&nbsp;музыкальной группе играют на
								разных инструментах, все они вносят свой вклад в&nbsp;создание песни.
								Каждый уровень имеет свой основной фокус, но&nbsp;все руководители в&nbsp;определенной
								степени
								участвуют во&nbsp;всех аспектах управления.
							</p>
							<p class="text text-l text-center text-xs-left text-gray-1">Вот как это выглядит
								количественно:
							</p>
						</div>
						<div class="col-lg-2 hide-xs">
						</div>
					</div>
				</div>

				<div
					 class="container container_full container_full-xs container_with-bg-img-black mb-rem-3-0 mb-xs-rem-2-50">
					<div class="container pr-0 mt-rem-5-0 mb-rem-5-0 mt-xs-rem-2-0 mb-xs-rem-2-0">
						<div class="playlist-slider js-playlist-slider">
							<div class="playlist-slider__header mt-rem-5-0">
								<ArrowSquareLeft
												 class="slider__btn-prev slider__btn-prev_white hide-xs mr-rem-0-50 mr-xs-rem-0-50" />
								<ArrowSquareRight class="slider__btn-next slider__btn-next_white hide-xs" />
								<div class="slider__pagination ml-rem-1-50 ml-xs-rem-0-50">
								</div>
							</div>
							<swiper-container data-swiper-type="playlist"
											  init="false">
								<swiper-slide class="swiper-slide">
									<div class="playlist-slider__slide-content">
										<div class="">

											<h1 class="mb-rem-3-0 text-white">Линейный
												<br />
												менеджмент
											</h1>
											<div class="row mt-xs-rem-2-0 mb-xs-rem-2-0">
												<div class="hide-lg col-xs-12">
													<div class="hint text-center">Листай влево или вправо, чтобы узнать
														больше
														информации
													</div>
												</div>
											</div>
											<img alt=""
												 class="hide-xs"
												 src="../assets/img/track-2/slider/slide-1.svg" /> <img alt=""
												 class="hide-lg"
												 src="../assets/img/track-2/slider/slide-xs-1.svg" />
										</div>
									</div>
								</swiper-slide>
								<swiper-slide class="swiper-slide">
									<div class="playlist-slider__slide-content">
										<div class="">

											<h1 class="mb-rem-3-0 text-white">Менеджмент
												<br />
												среднего звена
											</h1>
											<div class="row mt-xs-rem-2-0 mb-xs-rem-2-0">
											</div>
											<img alt=""
												 class="hide-xs"
												 src="../assets/img/track-2/slider/slide-2.svg" /> <img alt=""
												 class="hide-lg"
												 src="../assets/img/track-2/slider/slide-xs-2.svg" />
										</div>
									</div>
								</swiper-slide>
								<swiper-slide class="swiper-slide">
									<div class="playlist-slider__slide-content">
										<div class="">

											<h1 class="mb-rem-3-0 text-white">ТОП-менеджмент
											</h1>
											<div class="row mt-xs-rem-2-0 mb-xs-rem-2-0">
											</div>
											<img alt=""
												 class="hide-xs"
												 src="../assets/img/track-2/slider/slide-3.svg" /> <img alt=""
												 class="hide-lg"
												 src="../assets/img/track-2/slider/slide-xs-3.svg" />
										</div>
									</div>
								</swiper-slide>
								<swiper-slide class="swiper-slide">
									<div class="playlist-slider__slide-content">
										<div class="">

											<h1 class="mb-rem-3-0 text-white hide-xs">Стратегический<br />менеджмент
											</h1>
											<h1 class="mb-rem-3-0 text-white hide-lg">
												Стратеги&mdash;<br />ческий<br />менеджмент
											</h1>
											<div class="row mt-xs-rem-2-0 mb-xs-rem-2-0">
											</div>
											<img alt=""
												 class="hide-xs"
												 src="../assets/img/track-2/slider/slide-4.svg" /> <img alt=""
												 class="hide-lg"
												 src="../assets/img/track-2/slider/slide-xs-4.svg" />
										</div>
									</div>
								</swiper-slide>
							</swiper-container>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row mb-155 mb-xs-95">
						<div class="col-lg-2 hide-xs">
						</div>
						<div class="col-lg-8 col-xs-12">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="../assets/svg/star.svg"
								 alt="">
							<div class="text text-xl text-center">Это базовое распределение. Оно может варьироваться в
								зависимости
								от&nbsp;множества факторов: масштаба организации, специфики бизнеса, уровня зрелости
								компании,
								рыночной позиции и
								др.
							</div>
						</div>
						<div class="col-lg-2 hide-xs">
						</div>
					</div>
					<div class="row mb-rem-3-0 mb-xs-rem-2-50">
						<div class="col-lg-12 col-xs-12">
							<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Определи свой профиль
							</h1>
							<hr class="hr hr_neutral-16" />
						</div>
					</div>
				</div>

				<div class="container mb-rem-4-0 mb-rem-xs-3-0">
					<div class="container container_with-bg">
						<div class="row mb-rem-3-0 mb-xs-rem-2-0">
							<div class="col-lg-7 col-xs-12 mb-xs-rem-2-0">
								<div class="text text-xl">
									Основываясь на&nbsp;полученных знаниях, распредели области управления для своей
									позиции.
								</div>
							</div>
							<div class="col-lg-5 col-xs-12">
								<div class="hint text-center">
									Передвинь ползунок влево или вправо, чтобы распределить области
									управления.
								</div>
							</div>
						</div>
						<RangeSliders :settings="rangeSliders"
									  @disable-scrollbar="disableScrollbar"
									  @enable-scrollbar="enableScrollbar"
									  @complete="rangeSlidersComplete()">
							<template v-slot:sliders-feedback="">
								<div class="row js-scroll-element"
									 data-scroll-id="1">
									<div class="col-lg-8 col-xs-12">
										<div class="card card_medium card_white">
											<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-primary">Отлично!
											</h3>
											<p class="text text-l">Помни: попытка охватить все уровни управления может
												снизить
												эффективность.
												Сделать все самому&nbsp;&mdash; это неверный путь. Поэтому сфокусируйся
												на&nbsp;своей
												ключевой
												области управления и&nbsp;определи, какими вопросами нужно заниматься.
											</p>
										</div>
									</div>
									<div class="col-lg-4 hide-xs">
										<div class="card card_medium card_white h-100">
											<div class="headphones svg-container"
												 v-html="svgContent1">
											</div>
										</div>
									</div>
								</div>
							</template>
						</RangeSliders>
					</div>
					<SkipButton v-if="!pageViewed && isSkipButtonVisible2"
								@click="rangeSlidersSkipped()" />
				</div>
			</section>
			<section class="hidden js-hidden js-scroll-element"
					 data-scroll-id="3"
					 data-hidden-id="1">
				<!-- <div class="container mb-rem-4-75 mb-xs-rem-3-0">
					<div class="row">
						<div class="col-lg-8 col-xs-12">
							<div class="card card_medium card_white">
								<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-primary">Отлично!
								</h3>
								<p class="text text-l">Помни: попытка охватить все уровни управления может снизить
									эффективность.
									Сделать все самому&nbsp;&mdash; это неверный путь. Поэтому сфокусируйся
									на&nbsp;своей
									ключевой
									области управления и&nbsp;определи, какими вопросами нужно заниматься.
								</p>
							</div>
						</div>
						<div class="col-lg-4 hide-xs">
							<div class="card card_medium card_white h-100">
								<div class="headphones svg-container"
									 v-html="svgContent1">
								</div>
							</div>
						</div>
					</div>
				</div> -->
				<div class="container container_full-xs mb-xs-rem-6-0">
					<div class="track-recap js-track-recap mb-rem-7-75">
						<div class="track-recap__head">
						</div>
						<div class="track-recap__container js-track-recap-container">
							<div class="track-recap__sticky-top">
								<img class="mr-rem-1-50 mr-xs-rem-1-0"
									 src="../assets/svg/wave.svg"
									 alt="">
								<h4 class="text-white">Ключевые принципы и&nbsp;выводы:
								</h4>
							</div>
							<div class="track-recap__text-wrapper">
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white text-xs-center w-100">Мои обязанности определяются ключевой
										областью
										управления. Мне не&nbsp;нужно заниматься всем и&nbsp;сразу.
									</h3>
								</div>
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white text-xs-center w-100">Важно четко определить границы своей
										ответственности, чтобы эффективно управлять процессом.
									</h3>
								</div>
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white text-xs-center w-100">Линейные менеджеры и&nbsp;менеджеры
										среднего
										звена
										тоже включены в&nbsp;стратегию компании, это помогает мотивировать команду
										и&nbsp;показать
										значение работы.
									</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
				<NavigationButtons class="js-nav-buttons" />
			</section>
		</main>
		<!-- </VueLenis> -->
	</Transition>
</template>