<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import NavigationButtons from '@/components/NavigationButtons/NavigationButtons.vue'
import SkipButton from '@/components/SkipButton/SkipButton.vue'
import ToggleImg from '@/components/ToggleImg/ToggleImg.vue'
import DoubleQuestion from '@/components/DoubleQuestion/DoubleQuestion.vue'
import ArticleModal from '@/components/ArticleModal/ArticleModal.vue'
import { toggleImg } from '@/toggleAnimationsData/toggleImg'
import { textScrollAnimation } from '@/scripts/ui/textScrollAnimation'
import { textGramophoneAnimation } from '@/scripts/ui/textGramophoneAnimation'
import { trackRecapAnimation } from '@/scripts/ui/trackRecapAnimation'
import { showHiddenContent } from '@/scripts/utils/showHiddenContent'
import { refreshScrollTrigger } from '@/scripts/utils/refreshScrollTrigger'
import { doubleQuestions } from '@/quizData/doubleQuestion'
import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'
import { scrollToElement } from '@/scripts/utils/scrollToElement'
import { useScrollTracker } from '@/composables/useScrollTracker'
import usePagesViewedTracker from '@/composables/usePagesViewedTracker'

const { pageViewed } = usePagesViewedTracker()

const { container } = useScrollTracker()

const isModalOpen = ref(false)

const isSkipButtonVisible = ref(true)

const openModal = () => isModalOpen.value = true

const closeModal = () => isModalOpen.value = false

const svgContent = ref('')

const showAfter = () => {
	refreshScrollTrigger()
	isSkipButtonVisible.value = false

	nextTick(() => {
		headphonesAnimation()
		showHiddenContent(0)
		refreshScrollTrigger()
		scrollToElement(0)
	})
}

const showAfterSkip = () => {
	isSkipButtonVisible.value = false
	refreshScrollTrigger()
	showHiddenContent(0)
	scrollToElement(1)
	// trackRecapAnimation()
}

onMounted(async () => {
	const isMobile = window.matchMedia('(max-width: 719px)').matches
	svgContent.value = await fetchSvg()


	if (!isMobile) {
		textGramophoneAnimation()
		trackRecapAnimation()
	}

	textScrollAnimation()


	// setTimeout(() => {
	// 	if (pageViewed.value === true) {
	// 		trackRecapAnimation()
	// 	}
	// }, 100)
});

</script>

<template>
	<Transition name="fade-page"
				appear>
		<main class="scroll-container"
			  ref="container">
			<MainHeader />
			<div class="container mt-rem-6-50 mt-xs-rem-5-0">
				<h1 class="text-center mb-rem-0-75 mb-xs-rem-0-75">Переключись на&nbsp;новый режим
				</h1>
				<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-3-0" />
			</div>
			<div class="container mb-rem-4-0 mb-xs-rem-2-0">
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<ToggleImg :label-texts="toggleImg.labelTexts"
								   :tweens="toggleImg.tweens">
							<div class="pos-r"><img alt=""
									 id="toggle-img-1-1"
									 src="/assets/img/toggleImg/band.webp" /> <img alt=""
									 class="pos-a"
									 id="toggle-img-1-2"
									 src="/assets/img/toggleImg/baton.png"
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
								которых&nbsp;&mdash; эксперт в&nbsp;своей области.
							</h1>
							<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">Чтобы
								раскрыть их&nbsp;потенциал
							</h1>
							<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">и&nbsp;достичь
								выдающихся результатов,
							</h1>
							<h1 class="text-center mb-rem-2-0 mb-xs-rem-1-50 js-text">нужен
								руководитель.
							</h1>
							<div
								 class="card card_without card_lilac card_center w-fit mb-rem-2-0 mb-xs-rem-1-50 js-text">
								<h1 class="text-center">Теперь это твоя роль!
								</h1>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="container mb-rem-9-75 mb-xs-rem-6-0">
				<div class="container container_with-bg">
					<h1 class="mb-rem-1-50 mb-xs-rem-1-50">Новые приоритеты
					</h1>
					<div class="row mb-rem-3-0 mb-xs-rem-2-0">
						<div class="col-lg-7 col-xs-12">
							<p class="text text-m">Твой главный фокус&nbsp;&mdash; команда. Первостепенное внимание
								уделяй задачам,
								влияющим на&nbsp;её&nbsp;эффективность. Для этого перестрой свой рабочий ритм:
							</p>
						</div>
						<div class="col-lg-5 hide-xs">
						</div>
					</div>
					<div class="hide-xs">
						<div class="mb-rem-3-0">
							<div class="pos-r pt-90 pb-80"
								 style="margin: 0 -60px;"><img alt=""
									 src="/assets/img/track-1/path-1.svg"
									 style="width: 96%" />
								<div class="pos-a"
									 style="left: 121px; top: 0; width: 400px; height: 180px;">
									<div class="card card_gray h-100">
										<div class="d-flex ai-center h-100">
											<p class="text text-l text-center">
												Начинай день с&nbsp;обзора задач, которые стоят
												перед тобой и&nbsp;твоей командой.
											</p>
										</div>
									</div>
								</div>
								<div class="pos-a"
									 style="right: 98px; top: 32%; width: 400px; height: 180px;">
									<div class="card card_gray h-100">
										<div class="d-flex ai-center h-100">
											<p class="text text-l text-center">Команда&nbsp;&mdash; это самое главное.
												Поэтому
												приоритет отдавай вопросам, влияющим на&nbsp;ее&nbsp;работу.
											</p>
										</div>
									</div>
								</div>
								<div class="pos-a"
									 style="left: 187px; bottom: 0; width: 400px; height: 180px;">
									<div class="card card_gray h-100">
										<div class="d-flex ai-center h-100">
											<p class="text text-l text-center">Затем переходи к&nbsp;индивидуальным
												задачам
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
									 src="/assets/img/track-1/path-1-xs.svg"
									 style="top: 0; left: -24px;" />
								<div class="card card_gray mb-xs-rem-1-50">
									<p class="text text-l text-center">В&nbsp;начале дня выпиши все задачи, которые
										стоят
										перед
										тобой и&nbsp;твоей командой.
									</p>
								</div>
								<div class="card card_gray mb-xs-rem-1-50">
									<p class="text text-l text-center">Команда&nbsp;&mdash; это самое главное. Поэтому
										начинай
										с&nbsp;задач, которые влияют на&nbsp;нее.
									</p>
								</div>
								<div class="card card_gray">
									<p class="text text-l text-center">Когда их&nbsp;закончишь, можешь приступать
										к&nbsp;индивидуальным.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div class="card card_medium card-green">
						<p class="text text-l text-white">Каждый член команды вносит свой уникальный вклад. Твоя роль -
							создать среду, где все таланты раскрываются в&nbsp;полной мере.
						</p>
					</div>
				</div>
			</div>

			<div class="container">
				<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Три ключевых вопроса
				</h1>
				<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-1-50" />
				<div class="row">
					<div class="col-lg-2 hide-xs">
					</div>
					<div class="col-lg-8 col-xs-12">
						<p class="text text-l text-center text-xs-left text-gray-1">
							Для создания эффективной команды и&nbsp;управления&nbsp;ею, постоянно держи в&nbsp;фокусе
							три основных
							вопроса:
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>

			<div class="container mb-rem-4-0 mb-xs-rem-3-0">
				<div class="gramophone js-gramophone mb-rem-4-0">
					<div class="gramophone__head">
					</div>
					<div class="gramophone__container js-gramophone-container">
						<div class="gramophone__background">
							<img alt=""
								 class="gramophone__wave hide-xs"
								 src="/assets/img/track-1/gramophone/wave.webp" />
							<img alt="sound wave"
								 class="gramophone__wave hide-lg"
								 src="/assets/img/track-1/gramophone/wave-xs.png" /> <img alt="note"
								 class="gramophone__note-1"
								 src="/assets/img/track-1/gramophone/note-1.svg" /> <img alt="note"
								 class="gramophone__note-2"
								 src="/assets/img/track-1/gramophone/note-2.svg" />
							<img alt="gramophone"
								 class="gramophone__gramophone"
								 src="/assets/img/track-1/gramophone/gramophone.webp" />
						</div>

						<div class="gramophone__text-wrapper hide-lg">
							<div class="text-center mb-xs-rem-1-0">
								<h3 class="text-white mb-xs-rem-0-50">Что делаем?
								</h3>
								<p class="text text-m text-white">Определи цели и&nbsp;желаемые результаты
									команды.
								</p>
							</div>
							<div class="text-center mb-xs-rem-1-0">
								<h3 class="text-white mb-xs-rem-0-50">Кто делает?
								</h3>
								<p class="text text-m text-white">Распредели роли и&nbsp;ответственность.
								</p>
							</div>
							<div class="text-center mb-xs-rem-1-0">
								<h3 class="text-white mb-xs-rem-0-50">За&nbsp;счет чего?
								</h3>
								<p class="text text-m text-white">Создай процессы и&nbsp;обеспечь ресурсы
									для&nbsp;достижения целей.
								</p>
							</div>
						</div>

						<div class="gramophone__text-outer js-gramophone-text-outer hide-xs">
							<div class="gramophone__text-wrapper js-gramophone-text-wrapper">
								<div class="gramophone__text js-gramophone-text w-50">&nbsp;</div>
								<div class="gramophone__text js-gramophone-text">
									<div class="inner">
										<div class="w-50-lg">
											<h1 class="text-white mb-rem-1-50 ">Что делаем?
											</h1>
											<p class="text text-l text-white">Определи цели и&nbsp;желаемые результаты
												команды.
											</p>
										</div>
									</div>
								</div>
								<div class="gramophone__text js-gramophone-text">
									<div class="inner">
										<div class="w-50-lg">
											<h1 class="text-white mb-rem-1-50">Кто делает?
											</h1>
											<p class="text text-l text-white">Распредели роли и&nbsp;ответственность.
											</p>
										</div>
									</div>
								</div>
								<div class="gramophone__text js-gramophone-text">
									<div class="inner">
										<div class="w-35-lg">
											<h1 class="text-white mb-rem-1-50">За&nbsp;счет чего?
											</h1>
											<p class="text text-l text-white">Создай процессы и&nbsp;обеспечь ресурсы
												для&nbsp;достижения
												целей.
											</p>
										</div>
									</div>
								</div>
								<div class="gramophone__text js-gramophone-text w-50">&nbsp;</div>
							</div>
						</div>
						<!-- <div class="container gramophone__text-wrapper ">
							<div class="row gramophone__text js-gramophone-text">
								<div class="col-lg-6 col-xs-10 mb-rem-4-50">
									<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Что делаем?
									</h1>
									<p class="text text-l text-white">Определи цели и&nbsp;желаемые результаты команды.
									</p>
								</div>
							</div>
							<div class="row gramophone__text js-gramophone-text">
								<div class="col-lg-6 col-xs-10 mb-rem-4-50">
									<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Кто делает?
									</h1>
									<p class="text text-l text-white">Распредели роли и&nbsp;ответственность.
									</p>
								</div>
							</div>
							<div class="row gramophone__text js-gramophone-text">
								<div class="col-lg-6 col-xs-10 mb-rem-4-50">
									<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">За&nbsp;счет чего?
									</h1>
									<p class="text text-l text-white">Создай процессы и&nbsp;обеспечь ресурсы для
										достижения
										целей.
									</p>
								</div>
							</div>
						</div> -->
					</div>
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
						<p class="text text-xl text-center">Ответы на&nbsp;эти вопросы помогут тебе создать
							единый гармоничный процесс работы талантливых людей.
						</p>
					</div>
					<div class="col-lg-2 hide-xs">
					</div>
				</div>
			</div>
			<div class="container mb-rem-4-0 mb-xs-rem-3-0">
				<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Найди отличия
				</h1>
				<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-3-0" />
				<div class="row">
					<div class="col-lg-12 col-xs-12">
						<p class="text text-l">Давай посмотрим, насколько ты&nbsp;близок к&nbsp;мышлению руководителя.
							Подумай,
							как
							отвечает на&nbsp;вопросы специалист, а&nbsp;как руководитель.
						</p>
					</div>
				</div>
			</div>
			<div class="mb-rem-4-0 mb-xs-rem-3-0">
				<DoubleQuestion :questions-data="doubleQuestions"
								@complete="showAfter()">
					<template v-slot:feedback-0="">
						<div class="row js-scroll-element"
							 data-scroll-id="0">
							<div class="col-lg-8 col-xs-12">
								<div class="card card_large card_white">
									<p class="text text-l">Видишь, какие два разных подхода к&nbsp;работе. Специалист
										выполняет
										задачи сам. А&nbsp;руководитель, наоборот, делает это с&nbsp;помощью команды
										и&nbsp;помогает ей
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
				</DoubleQuestion>
				<SkipButton v-if="!pageViewed && isSkipButtonVisible"
							@click="showAfterSkip()" />
			</div>
			<section class="hidden js-hidden js-scroll-element"
					 data-scroll-id="1"
					 data-hidden-id="0">
				<div class="container mb-rem-4-0 mb-xs-rem-3-0 js-animation">
					<div class="row">
						<div class="col-lg-6 col-xs-12">
							<h2 class="mb-rem-2-0 mb-xs-rem-1-50">В&nbsp;новом режиме руководителя твои приоритеты
								такие:
							</h2>
							<ul class="list list__ul text text-l text-gray-1">
								<li class="list__ul--item">Формирование команды</li>
								<li class="list__ul--item">Мотивация сотрудников</li>
								<li class="list__ul--item">Помощь в&nbsp;развитии</li>
								<li class="list__ul--item">Контроль выполнения задач</li>
								<li class="list__ul--item">Управление рисками</li>
								<li class="list__ul--item">Коммуникация с&nbsp;заказчиками</li>
							</ul>
						</div>
					</div>
				</div>

				<div class="container container_full-xs mb-xs-rem-6-0">
					<div class="track-recap js-track-recap mb-rem-7-75">
						<div class="track-recap__head">
						</div>
						<div class="track-recap__container js-track-recap-container">
							<div class="track-recap__sticky-top">
								<img class="mr-rem-1-50 mr-xs-rem-1-0"
									 src="/assets/svg/wave.svg"
									 alt="">
								<h4 class="text-white">Ключевые принципы нового подхода:
								</h4>
							</div>
							<div class="track-recap__text-wrapper">
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white w-100 hide-xs">Мой успех измеряется результатами
										команды. Моя эффективность = результаты моей команды.
									</h3>
									<h5 class="text-white mb-xs-rem-1-50 hide-lg">Мой успех измеряется
										результатами
										команды. <br />Моя
										эффективность =
										результаты моей команды.
									</h5>
								</div>
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white w-100 hide-xs">Приоритет&nbsp;&mdash; устранение
										препятствий для работы моей команды.
									</h3>
									<h5 class="text-white mb-xs-rem-1-50 hide-lg">Приоритет&nbsp;&mdash;
										устранение
										препятствий для работы моей команды.
									</h5>
								</div>
								<div class="track-recap__text js-track-recap-text">
									<h3 class="text-white w-100 hide-xs">Я&nbsp;не&nbsp;всегда смогу погружаться
										в&nbsp;задачи
										&mdash;&nbsp;и&nbsp;это не страшно! Делегирование&nbsp;&mdash; основной
										инструмент
										достижения результатов.
									</h3>
									<h5 class="text-white mb-xs-rem-0-50 hide-lg">Я&nbsp;не&nbsp;всегда смогу погружаться
										в&nbsp;задачи
										&mdash;&nbsp;и&nbsp;это не страшно!<br /> Делегирование&nbsp;&mdash; основной
										инструмент
										достижения результатов.
									</h5>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="container mb-rem-9-75 mb-xs-rem-6-0">
					<div class="container container_with-bg mb-rem-1-50">
						<div class="row mb-rem-3-0 mb-xs-rem-2-0">
							<div class="col-lg-3 col-xs-12 mb-xs-rem-2-50">
								<h2>Немного рефлексии
								</h2>
							</div>
							<div class="col-lg-9 col-xs-12">
								<p class="text text-l text-semibold mb-rem-1-50 mb-xs-rem-1-0">Попробуй провести
									самоанализ
									изменения
									роли:
								</p>
								<div class="card card_gray pl-xs-rem-1-0 pr-xs-rem-1-0">
									<p class="text text-m">Подумай, чем еще отличается руководитель от&nbsp;специалиста.
									</p>
									<p class="text text-m">Проанализируй предложенные в&nbsp;файле вопросы
										и&nbsp;заполни
										сравнительную
										таблицу.
									</p>
								</div>
							</div>
						</div>
						<div class="row middle">
							<div class="col-lg-3 col-xs-12 mb-xs-rem-1-50">
								<p class="text text-m">Это упражнение поможет тебе увидеть сходства и&nbsp;различия
									прежней
									и&nbsp;новой
									ролей.
								</p>
							</div>
							<div class="col-lg-9 col-xs-12">
								<div
									 class="d-flex fw-wrap card-download  card-download__bg_green ai-center jc-space-between">
									<h4 class="text-white mb-xs-25">Руководитель VS&nbsp;специалист
									</h4>
									<a class="d-flex card-download__link cursor-pointer"
									   download
									   href="/assets/pdfs/task.pdf">
										<h4 class="text-white text-m mr-xs-15">Скачать
										</h4>
										<img class="ml-rem-1-0"
											 src="/assets/svg/download.svg"
											 alt="">
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="container">
					<div class="row">
						<div class="col-lg-12 col-xs-12">
							<div class="article__container">
								<div class="article__head mb-rem-3-0 mb-xs-rem-3-0">
									<div class="mb-xs-10">
										<h2 class="text-white mb-10 mb-xs-10">Дополнительные материалы
										</h2>
										<p class="text text-m text-white">Углубись в&nbsp;тему управленческих
											приоритетов
										</p>
									</div>
									<div class="hide-xs"> </div>
									<div class="hint text-center">Нажми Play, чтобы прочитать статью
									</div>
								</div>
								<div class="article__picture">
									<img class="img_center"
										 src="/assets/img/menu/articles/article-1-1.png"
										 alt=""
										 @click="openModal">
								</div>
								<div class="article__footer mt-rem-1-50 mt-xs-rem-1-50">
									<div class="hide-xs"> </div>
									<div class="card card_article">
										<p class="text text-m text-white">статья
										</p>
										<p class="text text-xl text-white">Управление приоритетами
										</p>
									</div>
									<div class="hide-xs"> </div>
								</div>

								<ArticleModal v-if="isModalOpen"
											  @closeModal="closeModal" />
							</div>
						</div>
					</div>
				</div>
				<NavigationButtons class="js-nav-buttons" />
			</section>
		</main>
	</Transition>
</template>