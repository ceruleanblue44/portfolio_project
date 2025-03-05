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
import { headphonesAnimation } from '@/scripts/ui/headphonesAnimation'

const svgContent = ref('')

const showAfter = () => {
	console.log('showing after')

	headphonesAnimation()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500);
}

onMounted(async () => {

	const response = await fetch('/src/assets/svg/headphones.svg');
	svgContent.value = await response.text();

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textScrollAnimation()

	setTimeout(() => {
		ScrollTrigger.refresh()
	}, 500)

	textGramophoneAnimation()

	trackRecapAnimation()
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
					<h2 class="mb-rem-2-0 mb-xs-rem-1-50">Итак, в новом режиме руководителя твоя работа выглядит таким
						образом:
					</h2>
					<ul class="list list__ul text text-l text-gray-1">
						<li class="list__ul--item">Формируешь команду</li>
						<li class="list__ul--item">Мотивируешь</li>
						<li class="list__ul--item">Помогаешь развиваться</li>
						<li class="list__ul--item">Контролируешь выполнение задач</li>
						<li class="list__ul--item">Рассчитываешь риски</li>
						<li class="list__ul--item">Общаешься с внутренними заказчиками</li>
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
						<h4 class="text-white">Подпевай, как припеву любимой песни
						</h4>
					</div>
					<div class="track-recap__text-wrapper">
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Теперь я работаю на благо команды. Моя
								эффективность =
								результаты моей команды.
							</h3>
						</div>
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Я решаю в первую очередь проблемы, которые
								мешают моей
								команде.
							</h3>
						</div>
						<div class="track-recap__text js-track-recap-text">
							<h3 class="text-white text-xs-center w-100">Я не всегда смогу погружаться в задачи &mdash; и
								это не
								страшно! У меня есть для этого команда.
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
            <h2>Небольшая рефлексия
            </h2>
          </div>
          <div class="col-lg-9 col-xs-12">
            <p class="text text-l text-semibold mb-rem-1-50 mb-xs-rem-1-0">Попробуй самостоятельно посмотреть, как поменялась твоя роль.
            </p>
            <div class="balloon balloon_gray pl-xs-rem-1-0 pr-xs-rem-1-0">
              <p class="text text-m">Подумай, чем еще отличается руководитель от специалиста.
              </p>
              <p class="text text-m">Проанализируй предложенные в файле вопросы и заполни таблицу.
              </p>
              <p class="text text-m">Ты можешь поделиться решением этого задания на учебном портале. Загрузи файл с таблицей и нажми кнопку &laquo;Выполнено&raquo;.
              </p>
            </div>
          </div>
        </div>
        <div class="row middle">
          <div class="col-lg-3 col-xs-12 mb-xs-rem-1-50">
            <p class="text text-m">Эта практика поможет тебе увидеть сходства и различия на новой роли.
            </p>
          </div>
          <div class="col-lg-9 col-xs-12">
            <div class="d-flex fw-wrap download-file__background download-file__background_green ai-center jc-space-between">
              <h4 class="text-white mb-xs-25">Руководитель VS специалист
              </h4>
              <h4 class="text-white text-m mr-xs-15"><a class="track-recap__sticky-top d-flex download-file__background download-file__link cursor-pointer" download="" href="user/materials/album-1/Rukovoditel_VS_specialist.pdf">Скачать </a>
              </h4>
              <a class="track-recap__sticky-top d-flex download-file__background download-file__link cursor-pointer" download="" href="user/materials/album-1/Rukovoditel_VS_specialist.pdf">
                <!-- <svg class="icon icon-svg icon_xl ml-rem-1-0"> 
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
          <div class="new-story__container">
            <div class="new-story__head mb-rem-3-0 mb-xs-rem-3-0">
              <div class="mb-xs-10">
                <h2 class="text-white mb-10 mb-xs-10">Собираем для вас
                </h2>
                <p class="text text-m text-white">Погрузись в&nbsp;плейлист еще больше и&nbsp;изведай тайны музыки.
                </p>
              </div>
              <div class="balloon text-center">Нажми на &laquo;Плей&raquo;, чтобы прочитать статью
              </div>
            </div>
            <div class="new-story__picture">
				<!-- <img alt="" class="img_center" onclick="openStory('article-0')" src="user/img/menu/stories/story-1-1.png" /> -->
            </div>
            <div class="new-story__footer mt-rem-1-50 mt-xs-rem-1-50">
              <div class="balloon balloon_new-story">
                <p class="text text-m text-white">статья
                </p>
                <p class="text text-xl text-white">Смена приоритетов
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

		<!-- <div style="height: 100vh"></div> -->
	</PerfectScrollbar>
</template>