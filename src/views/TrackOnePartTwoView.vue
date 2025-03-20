<script setup>
import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import ToggleImg from '@/components/ToggleImg/ToggleImg.vue'
import { toggleImg } from '@/toggleAnimationsData/toggleImg'
import { textScrollAnimation } from '@/scripts/ui/textScrollAnimation'
import { textGramophoneAnimation } from '@/scripts/ui/textGramophoneAnimation'
import { trackRecapAnimation } from '@/scripts/ui/trackRecapAnimation'

import DoubleQuestion from '@/components/DoubleQuestion/DoubleQuestion.vue'
import { doubleQuestions } from '@/quizData/doubleQuestion'
import { fetchSvg } from '@/scripts/utils/fetchSvg'
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'

import ArticleModal from '@/components/ArticleModal/ArticleModal.vue'

const isModalOpen = ref(false)

const openModal = () => isModalOpen.value = true

const closeModal = () => isModalOpen.value = false

const svgContent = ref('')

const showAfter = () => {
	console.log('showing after')

	headphonesAnimation()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500);
}

onMounted(async () => {

	svgContent.value = await fetchSvg()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textScrollAnimation()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textGramophoneAnimation()

	trackRecapAnimation()

	// await nextTick()
});

</script>

<template>
	<main class="scroll-container">
		<MainHeader />
		<div class="container mt-rem-6-50 mt-xs-rem-5-0">
			<h1 class="text-center mb-rem-0-75 mb-xs-rem-0-75">Переключись на новый режим
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-3-0" />
		</div>
		<!-- <div class="container mb-rem-4-0 mb-xs-rem-3-0">
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
		</div> -->
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
				<h1 class="mb-rem-1-50 mb-xs-rem-1-50">Новые приоритеты
				</h1>
				<div class="row mb-rem-3-0 mb-xs-rem-2-0">
					<div class="col-lg-7 col-xs-12">
						<p class="text text-m">Твой главный фокус - команда. Первостепенное внимание уделяй задачам,
							влияющим на её эффективность. Для этого перестрой свой рабочий ритм:
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
										<p class="text text-l text-center">
											Начинай день с обзора задач, которые стоят
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
											приоритет отдавай вопросам, влияющим на ее работу.
										</p>
									</div>
								</div>
							</div>
							<div class="pos-a"
								 style="left: 187px; bottom: 0; width: 400px; height: 180px;">
								<div class="card card_gray h-100">
									<div class="d-flex ai-center h-100">
										<p class="text text-l text-center">Затем переходи к индивидуальным задачам
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
					<p class="text text-l text-white">Каждый член команды вносит свой уникальный вклад. Твоя роль -
						создать среду, где все таланты раскрываются в полной мере.
					</p>
				</div>
			</div>
		</div>

		<div class="container">
			<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Три ключевых вопроса
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-1-50 mb-xs-rem-1-50" />
			<div class="row">
				<div class="col-lg-2 hide-xs">&nbsp;
				</div>
				<div class="col-lg-8 col-xs-12">
					<p class="text text-l text-center text-xs-left text-gray-1">
						Для создания эффективной команды и управления ею, постоянно держи в фокусе три основных вопроса:
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
								<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Что делаем?
								</h1>
								<p class="text text-l text-white">Определи цели и желаемые результаты команды.
								</p>
							</div>
						</div>
						<div class="row gramophone__text js-gramophone-text">
							<div class="col-lg-6 col-xs-10 mb-rem-4-50">
								<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">Кто делает?
								</h1>
								<p class="text text-l text-white">Распредели роли и ответственность.
								</p>
							</div>
						</div>
						<div class="row gramophone__text js-gramophone-text">
							<div class="col-lg-6 col-xs-10 mb-rem-4-50">
								<h1 class="text-white mb-rem-1-50 mb-xs-rem-1-0">За счет чего?
								</h1>
								<p class="text text-l text-white">Создай процессы и обеспечь ресурсы для достижения
									целей.
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
			<h1 class="text-center text-xs-left mb-rem-0-75 mb-xs-rem-0-75">Найди отличия
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
		<div class="mb-rem-4-0 mb-xs-rem-3-0">
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

		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row">
				<div class="col-lg-6 col-xs-12">
					<h2 class="mb-rem-2-0 mb-xs-rem-1-50">В новом режиме руководителя твои приоритеты такие:
					</h2>
					<ul class="list list__ul text text-l text-gray-1">
						<li class="list__ul--item">Формирование команды</li>
						<li class="list__ul--item">Мотивация сотрудников</li>
						<li class="list__ul--item">Помощь в развитии</li>
						<li class="list__ul--item">Контроль выполнения задач</li>
						<li class="list__ul--item">Управление рисками</li>
						<li class="list__ul--item">Коммуникация с заказчиками</li>
					</ul>
				</div>
			</div>
		</div>

		<div class="container container_full-xs mb-xs-rem-6-0">
			<div class="track-recap js-track-recap mb-rem-7-75">
				<div class="track-recap__head">&nbsp;
				</div>
				<div class="track-recap__container js-track-recap-container">
					<div class="track-recap__sticky-top">
						<img class="mr-rem-1-50 mr-xs-rem-1-0"
							 src="../assets/svg/wave.svg"
							 alt="">
						<h4 class="text-white">Ключевые принципы нового подхода:
						</h4>
					</div>
					<div class="track-recap__text-wrapper">
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Мой успех измеряется результатами команды. Моя
								эффективность =
								результаты моей команды.
							</h3>
						</div>
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Приоритет - устранение препятствий для работы
								моей
								команды.
							</h3>
						</div>
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Я не всегда смогу погружаться в задачи &mdash; и
								это не
								страшно! Делегирование - основной инструмент достижения результатов.
							</h3>
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
						<p class="text text-l text-semibold mb-rem-1-50 mb-xs-rem-1-0">Попробуй провести самоанализ
							изменения
							роли:
						</p>
						<div class="card card_gray pl-xs-rem-1-0 pr-xs-rem-1-0">
							<p class="text text-m">Подумай, чем еще отличается руководитель от специалиста.
							</p>
							<p class="text text-m">Проанализируй предложенные в файле вопросы и заполни сравнительную
								таблицу.
							</p>
						</div>
					</div>
				</div>
				<div class="row middle">
					<div class="col-lg-3 col-xs-12 mb-xs-rem-1-50">
						<p class="text text-m">Это упражнение поможет тебе увидеть сходства и различия прежней и новой
							ролей.
						</p>
					</div>
					<div class="col-lg-9 col-xs-12">
						<div class="d-flex fw-wrap card-download  card-download__bg_green ai-center jc-space-between">
							<h4 class="text-white mb-xs-25">Руководитель VS специалист
							</h4>
							<a class="d-flex card-download__link cursor-pointer"
							   download
							   href="../assets/pdfs/task.pdf">
								<h4 class="text-white text-m mr-xs-15">Скачать
								</h4>
								<img class="ml-rem-1-0"
									 src="../assets/svg/download.svg"
									 alt="">
								<!-- <svg class="icon icon-svg icon_xl"> 
                  <use xlink:href="user/svg/sprite.svg#download-file"> 
                  </use> 
                </svg>  -->
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
								<p class="text text-m text-white">Углубись в тему управленческих приоритетов
								</p>
							</div>
							<div class="hide-xs">&nbsp;</div>
							<div class="hint text-center">Нажми Play, чтобы прочитать статью
							</div>
						</div>
						<div class="article__picture">
							<img class="img_center"
								 src="../assets/img/menu/articles/article-1-1.png"
								 alt=""
								 @click="openModal">
						</div>
						<div class="article__footer mt-rem-1-50 mt-xs-rem-1-50">
							<div class="hide-xs">&nbsp;</div>
							<div class="card card_article">
								<p class="text text-m text-white">статья
								</p>
								<p class="text text-xl text-white">Управление приоритетами
								</p>
							</div>
							<div class="hide-xs">&nbsp;</div>
						</div>

						<ArticleModal v-if="isModalOpen"
						  @closeModal="closeModal" />
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
	</main>
</template>