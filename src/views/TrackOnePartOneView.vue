<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import NavigationButtons from '@/components/NavigationButtons/NavigationButtons.vue'
import SkipButton from '@/components/SkipButton/SkipButton.vue'
// import { initLottieScroll } from '@/scripts/ui/lottieScroll'
// import wordsJson from '@/assets/lottie/words.json?url'
import { highlightBlocks } from '@/scripts/ui/highlightBlocks'
import { textAnimation } from '@/scripts/ui/textAnimation'
import CheckboxQuestion from '@/components/CheckboxQuestion/CheckboxQuestion.vue'
import { checkboxQuestionTrack1 } from "@/quizData/checkboxQuestionTrack1"
import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'
import { showHiddenContent } from '@/scripts/utils/showHiddenContent'
import { refreshScrollTrigger } from '@/scripts/utils/refreshScrollTrigger'
import { scrollToElement } from '@/scripts/utils/scrollToElement'
import { useScrollTracker } from '@/composables/useScrollTracker'
import usePagesViewedTracker from '@/composables/usePagesViewedTracker'
import { observeAnimation } from '@/scripts/ui/observeAnimation'
import { lottieWords } from '@/scripts/ui/lottieWords'

const { pageViewed } = usePagesViewedTracker()

const { container } = useScrollTracker()

const svgContent = ref('')


const showAfter = () => {
	refreshScrollTrigger()
	showHiddenContent(0)
	headphonesAnimation()
	scrollToElement(0)
}


onMounted(async () => {
	await nextTick()
	svgContent.value = await fetchSvg()
	observeAnimation(lottieWords, 0.4, false)
	highlightBlocks()
	refreshScrollTrigger()
	textAnimation()
})
</script>

<template>
	<Transition name="fade-page"
				appear>
		<main class="scroll-container"
			  ref="container">
			<MainHeader />
			<div class="container mt-rem-6-50 mt-xs-rem-5-0 mb-rem-7-0 mb-xs-rem-6-0">
				<div class="row">
					<div class="col-lg-12 col-xs-12"><img alt=""
							 class="hide-xs"
							 src="/assets/img/track-1/track-1-top.svg" /> <img alt=""
							 class="hide-lg w-100"
							 src="/assets/img/track-1/track-1-top-xs.svg" />
					</div>
				</div>
			</div>

			<div class="container mb-rem-7-0 mb-xs-rem-6-0">
				<div class="container container_with-bg-img-black w-100">
					<div class="row">
						<div class="col-lg-5 col-xs-12 mb-xs-rem-3-50">
							<div class="card card_track-dark mr-rem-2-50"><img alt=""
									 class="mb-rem-2-0 mb-xs-rem-1-0"
									 src="/assets/img/track-1/track-1-1.png" />
								<p class="text text-s text-center text-white mb-rem-1-0 mb-xs-rem-0-50">Трек 1
								</p>
								<div class="d-flex jc-center ai-center">
									<img src="/assets/svg/wave.svg"
										 class="flex-shrink-0 mr-rem-1-0 mr-xs-rem-1-0"
										 alt="">
									<h2 class="text-white">Changes
									</h2>
								</div>
							</div>
						</div>
						<div class="col-lg-7 col-xs-12">
							<h2 class="text-white mt-rem-2-0 mb-rem-2-0 mb-xs-rem-2-0">В&nbsp;этом треке
								ты&nbsp;изучишь:
							</h2>
							<ul class="list list__ul list__ul_monochrome text-regular text-xl text-white-80">
								<li class="list__ul--item">В&nbsp;чем принципиальное отличие роли руководителя
									от&nbsp;специалиста?
								</li>
								<li class="list__ul--item">Какие изменения происходят при переходе на&nbsp;руководящую
									позицию?
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
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<p class="text text-l text-center text-xs-left text-gray-1">При переходе на&nbsp;позицию
							руководителя часто возникает ощущение, что задачи усложнились, времени стало меньше,
							а&nbsp;результаты не&nbsp;соответствуют ожиданиям.
							Знакомые мысли?
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>

			<div class="container">
				<div class="lottie-scroll js-lottie js-animation"
					 data-preserve-aspect-ratio="xMidYMid meet"
					 style="width: 100%;">
				</div>
			</div>

			<div class="container mb-rem-7-0 mb-xs-rem-6-0">
				<div class="card_large card_border-neutral-12 js-text-card">
					<div class="row">
						<div class="col-lg-12 col-xs-12">
							<div class="icon-row icon-row-xs">
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
						<div class="col-lg-12 col-xs-12 d-flex ai-center">
							<div class="pt-80 pb-60 pb-xs-60 pt-xs-60 w-100">
								<p class="text-64-32 text-uppercase text-center mb-25 mb-xs-15 js-text-1"><i>Что
										я&nbsp;делаю не&nbsp;так?</i>
								</p>
								<h1 class="text-bold text-uppercase h1-96-40 text-center js-text-2">Все нормально!
								</h1>
							</div>
						</div>
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
				</div>
			</div>
			<!-- Highlight Blocks -->
			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<div class="card_large card_border-neutral-12">
					<div class="row mb-10 mb-xs-10">
						<div class="col-lg-5 col-xs-12 mb-xs-rem-3-0">
							<div class="sticky"
								 style="top: 35%;">
								<h2 class="h2">Переходный период необходим
								</h2>
							</div>
						</div>
						<div class="col-lg-1 hide-xs">
						</div>
						<div class="col-lg-6 col-xs-12">
							<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
								<p class="text text-l">Раньше твоя роль заключалась в&nbsp;выполнении конкретных задач.
									Теперь ты&nbsp;учишься делегировать, контролировать процессы и&nbsp;принимать
									стратегические решения.
								</p>
							</div>
							<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
								<p class="text text-l">Адаптация к&nbsp;новому ритму требует времени &mdash;
									поэтому возникает желание вернуться к&nbsp;привычному выполнению задач
									самостоятельно.
								</p>
							</div>
							<div class="card_medium card_neutral-12 js-block">
								<p class="text text-l">Однако твоя новая роль&nbsp;&mdash; не&nbsp;исполнение,
									а&nbsp;организация процессов. Пора взглянуть на&nbsp;работу с&nbsp;новой
									перспективы.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container mb-rem-4-0 mb-xs-rem-2-0">
				<div class="row mb-rem-1-50 mb-xs-rem-1-50">
					<div class="col-lg-12 col-xs-12">
						<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Смена парадигмы
						</h1>
						<hr class="hr hr_neutral-16" />
					</div>
				</div>
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<p class="text text-l text-center text-xs-left text-gray-1">
							Все начинается с&nbsp;трансформации мышления. Теперь твой фокус&nbsp;&mdash; развитие
							команды и&nbsp;процессов.
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>
			<div class="container container_full container_full-xs pos-r mb-rem-4-0 mb-xs-rem-2-0">
				<img alt=""
					 class="hide-xs"
					 src="/assets/img/track-1/zipper.webp" /> <img alt=""
					 class="hide-lg"
					 src="/assets/img/track-1/zipper-xs.png" />
				<div class="pos-a hide-xs"
					 style="left: 80px; bottom: 32%; width: 35%;">
					<p class="text text-xl text-semibold">Возможно, сейчас ты&nbsp;пытаешься совместить в&nbsp;себе две
						роли: специалиста и&nbsp;руководителя.
					</p>
					<p class="text text-xl text-semibold">Но&nbsp;пришло время их&nbsp;разделить.
					</p>
				</div>
				<div class="pos-a hide-lg"
					 style="left: 12px; bottom: -6px; width: 206px;">
					<p class="text text-xl text-semibold">Возможно, сейчас ты&nbsp;пытаешься совместить в&nbsp;себе две
						роли: специалиста и&nbsp;руководителя.
					</p>
					<p class="text text-xl text-semibold">Но&nbsp;пришло время их&nbsp;разделить.
					</p>
				</div>
			</div>
			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
							 src="/assets/svg/star.svg"
							 alt="">
						<p class="text text-xl text-center">Изменение мышления происходит постепенно. Шаг за&nbsp;шагом,
							через обучение и&nbsp;практику, ты&nbsp;увидишь результаты.
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>

			<div class="container mb-rem-4-0 mb-xs-rem-3-0">
				<div class="row mb-rem-1-50 mb-xs-rem-1-50">
					<div class="col-lg-12 col-xs-12">
						<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Взгляд в&nbsp;прошлое
						</h1>
						<hr class="hr hr_neutral-16" />
					</div>
				</div>
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<p class="text text-l text-center text-xs-left text-gray-1">
							Для понимания новой роли и&nbsp;обязанностей важно осознать разницу с&nbsp;предыдущей
							позицией.
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>


			<div class="container mb-rem-4-0 mb-xs-rem-3-0">
				<CheckboxQuestion :checkboxQuestionData="checkboxQuestionTrack1"
								  @complete="showAfter()">
					<template v-slot:question-text="">
						<div class="row">
							<div class="col-lg-6 col-xs-12">
								<h4 class="mb-rem-1-50 mb-xs-rem-1-50">Какие ожидания от&nbsp;тебя были на&nbsp;прежней
									должности?
								</h4>
								<p class="text text-m text-gray-1">Выбери один или несколько ответов.
								</p>
							</div>
						</div>
					</template>
					<template v-slot:feedback-0="">
						<div class="row js-scroll-element"
							 data-scroll-id="0">
							<div class="col-lg-8 col-xs-12">
								<div class="card card_medium card_white">
									<h3 class="mb-rem-1-0 mb-xs-rem-1-0 text-primary">Все верно!
									</h3>
									<p class="text text-l">От&nbsp;специалиста требуется профессионализм, высокое
										качество и&nbsp;своевременность выполнения задач.
									</p>
									<p class="text text-l">К&nbsp;руководителю похожие требования, но&nbsp;есть
										существенное отличие.
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
					</template>
				</CheckboxQuestion>
				<SkipButton v-if="!pageViewed"
							@click="showHiddenContent(0); scrollToElement(1)" />
			</div>
			<section class="hidden js-hidden js-scroll-element"
					 data-hidden-id="0"
					 data-scroll-id="1">
				<div class="container mt-rem-9-75 mt-xs-rem-6-0 mb-rem-4-0 mb-xs-rem-3-0">
					<div class="row mb-rem-1-50 mb-xs-rem-1-50">
						<div class="col-lg-12 col-xs-12">
							<h1 class="h1 text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Ключевое различие
							</h1>
							<hr class="hr hr_neutral-16" />
						</div>
					</div>
					<div class="row">
						<div class="col-lg-2 hide-xs">
						</div>
						<div class="col-lg-8 col-xs-12">
							<p class="text text-l text-center text-xs-left text-gray-1">Теперь успех измеряется
								не&nbsp;личными
								достижениями, а&nbsp;результатами команды. Команда решает задачи, обеспечивает качество
								и&nbsp;соблюдает сроки. Твоя роль&nbsp;&mdash; создавать условия для их&nbsp;успеха.
							</p>
						</div>
						<div class="col-lg-2 hide-xs">
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
									<h3 class="h3">В&nbsp;роли руководителя&nbsp;ты:
									</h3>
								</div>
							</div>
							<div class="col-lg-2 hide-xs">
							</div>
							<div class="col-lg-6 col-xs-12">
								<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
									<p class="text-l">Развиваешься не&nbsp;только сам, но&nbsp;и&nbsp;привлекаешь
										сильных
										профессионалов
									</p>
								</div>
								<div class="card_medium card_neutral-12 mb-rem-1-50 mb-xs-rem-1-0 js-block">
									<p class="text-l">
										Не&nbsp;исполняешь задачи сам, а&nbsp;выстраиваешь эффективные процессы
										в&nbsp;команде
									</p>
								</div>
								<div class="card_medium card_neutral-12 js-block">
									<p class="text-l">
										Планируешь не&nbsp;только свое рабочее время, а&nbsp;организуешь работу команды
										с&nbsp;учетом рисков
									</p>
								</div>
							</div>
						</div>
						<div class="row">
							<div class="col-lg-12 col-xs-12">
								<h4>Твой результат теперь достигается через успех команды. <span class="text-red">Твоя
										задача</span>&nbsp;&mdash; выстроить процесс так, чтобы <span
										  class="text-red">обеспечить
										этот успех</span>.
								</h4>
							</div>
						</div>
					</div>
				</div>

				<div class="container mb-rem-5-0 mb-xs-rem-4-0"><img alt="dj"
						 class="hide-xs"
						 src="/assets/img/track-1/dj.webp"
						 width="1200" />
					<img alt="dj"
						 class="hide-lg"
						 src="/assets/img/track-1/dj-xs.webp"
						 width="343" />
				</div>
				<div class="container mb-rem-9-75 mb-xs-rem-6-0">
					<div class="row">
						<div class="col-lg-2 hide-xs">
						</div>
						<div class="col-lg-8 col-xs-12">
							<img class="img_center mb-rem-1-50 mb-xs-rem-1-0"
								 src="/assets/svg/star.svg"
								 alt="">
							<p class="text text-xl text-center">В&nbsp;основе эффективного управления лежит лидерское
								мышление&nbsp;&mdash; способность видеть общую картину и&nbsp;принимать решения
								в&nbsp;интересах
								команды.
							</p>
						</div>
						<div class="col-lg-2 hide-xs">
						</div>
					</div>
				</div>
				<div class="container mb-rem-4-0 mb-xs-rem-3-0">
					<div class="row">
						<div class="col-lg-12 col-xs-12">
							<h1 class="h1 mb-rem-0-75 mb-xs-rem-0-75">Время освоить новый ритм!
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
									<div class="text-regular text-m text-white mb-5 mb-xs-5">
										В&nbsp;начале карьеры молодой музыкант Abel Tesfaye создавал традиционную
										жизнерадостную
										R&rsquo;n&rsquo;B музыку.
										Все изменилось, когда он&nbsp;принял рискованное предложение продюсера
										и&nbsp;полностью
										трансформировал свой стиль, создав уникальное звучание с&nbsp;медленным темпом,
										глубокими
										басами и&nbsp;меланхоличным настроением.
									</div>
									<div class="text-regular text-m text-white">Сегодня мы&nbsp;знаем его как The
										Weeknd&nbsp;&mdash; он&nbsp;входит в&nbsp;книгу рекордов Гиннесса как самый
										популярный
										артист в&nbsp;мире. Его история напоминает нам: иногда именно готовность
										к&nbsp;переменам
										открывает путь к&nbsp;невероятным достижениям.
									</div>
								</div>
								<div class="bg-black-block__img">
									<img alt=""
										 src="/assets/img/track-1/img-1.png" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<NavigationButtons class="js-nav-buttons" />
			</section>
		</main>
	</Transition>
</template>

<style scoped></style>