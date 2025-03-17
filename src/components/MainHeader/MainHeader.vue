<script setup>
import './MainHeader.scss'
import { ref } from 'vue';

const isMenuOpen = ref(false)

const openMenu = () => {
	isMenuOpen.value =! isMenuOpen.value
}

</script>

<template>
	<div class="header">
		<div class="header__content">
			<div>
				<div class="header__logo">
					<picture>
						<source srcset="../../assets/svg/header-logo-xs.svg"
								media="(max-width: 719px)" />
						<img src="../../assets/svg/header-logo.svg"
							 alt="header logo" />
					</picture>
				</div>

				<div class="header__title">
					<div>
						<img src="../../assets/svg/header-note.svg"
							 alt="">
						<div class="header__title__text js-header-title">
							Intro to a new life
						</div>
					</div>
				</div>
			</div>

			<div class="header__progressbar invisible hide">
				<div class="header__progressbar-line"></div>
			</div>

			<button class="header__btn header__btn_secondary ml-rem-1-50 ml-xs-rem-0-50">
				<img src="../../assets/svg/back.svg"
					 alt="">
				<span class="hide-xs ml-rem-0-50">Назад</span>
			</button>

			<button class="header__btn ml-rem-1-50 ml-xs-rem-0-50" v-show="!isMenuOpen" @click="openMenu">
				<span class="hide-xs mr-rem-0-50">Меню</span>
				<img src="../../assets/svg/menu.svg"
					 alt="">
			</button>

			<button class="header__btn ml-rem-1-50 ml-xs-rem-0-50" v-show="isMenuOpen" @click="openMenu">
				<span class="hide-xs mr-rem-0-50">Закрыть</span>
				<img class="" src="../../assets/svg/close.svg"
					 alt="">
			</button>

		</div>
	<!-- </div> -->

	<div v-show="isMenuOpen" class="container header-nav" ref="headerNav">
            <div class="h-100 hide-xs">
            <!-- <div class="h-100 hide-xs" v-if="currentTab !== 'home' && currentTab !== 'story-reader'"> -->
                <div class="header-nav__tabs">
                    <button @click="selectTab('navigation')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'navigation'}]">
						<img class="mr-rem-0-25" src="../../assets/svg/menu/albums.svg" alt="">
                        <span>
                            Альбом
                        </span>
                    </button>
                    <button @click="selectTab('articles')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'articles'}]">
						<img class="mr-rem-0-25" src="../../assets/svg/menu/articles.svg" alt="">
                        <span>
                            Статьи
                        </span>
                    </button>
                    <button @click="selectTab('materials')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'materials'}]">
						<img class="mr-rem-0-25" src="../../assets/svg/menu/materials.svg" alt="">
                        <span>
                            Материалы
                        </span>
                    </button>
                </div>
            </div>
            <!-- <div :class="['header-nav__content',
                {'header-nav__content_home': currentTab === 'home'},
                {'header-nav__content_story': currentTab === 'story-reader'},
                ]">
                <v-home v-if="currentTab === 'home'" @select-tab="selectTab($event)"></v-home>
                <v-article
                    v-else-if="currentTab === 'story-reader'"
                    :article="$slots[currentStory.articleLink]"
                    :title="currentStory.title"
                    @close="showNav()">
                </v-article>
                <div v-else>
                    <div class="header-nav__album-info mb-xs-rem-1-0">
                        <template v-if="currentTab === 'navigation' && displayGroup === null">
                            <div class="header-nav__album-name" v-if="currentGroup">
                                <h3>
                                    Альбомы
                                </h3>
                            </div>
                            <div class="header-nav__album-description" v-if="currentGroup">
                                <p class="text text-xs">
                                    Альбом — это собрание треков по одной из тем, которые помогут тебе адаптироваться в новой роли и стать эффективным руководителем.
                                </p>
                            </div>
                        </template>
                        <template v-else-if="currentTab === 'navigation' && displayGroup !== null">
                            <div class="header-nav__album-name" v-if="currentGroup">
                                <h3>
                                    {{ displayGroup.title }}
                                </h3>
                            </div>
                            <div class="header-nav__album-description" v-if="currentGroup">
                                <p class="text text-xs">
                                    {{ displayGroup.description }}
                                </p>
                            </div>
                        </template>
                        <template v-else>
                            <div class="header-nav__album-name" v-if="currentGroup">
                                <h3>
                                    {{ currentGroup.title }}
                                </h3>
                            </div>
                            <div class="header-nav__album-description" v-if="currentGroup">
                                <p class="text text-xs">
                                    {{ currentGroup.description }}
                                </p>
                            </div>
                        </template>
                    </div>
    
                    <div class="hide-lg mb-xs-rem-1-0" v-if="currentTab !== 'home' && currentTab !== 'story-reader'">
                        <div class="header-nav__tabs">
                            <button @click="selectTab('navigation')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'navigation'}]">
								<img class="mr-xs-rem-0-50" src="../../assets/svg/menu/albums.svg" alt="">
                                <span>
                                    Альбом
                                </span>
                            </button>
                            <button @click="selectTab('articles')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'articles'}]">
								<img class="mr-xs-rem-0-50" src="../../assets/svg/menu/articles.svg" alt="">
                                <span>
									Дополнительные материалы
                                </span>
                            </button>
                            <button @click="selectTab('materials')" :class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'materials'}]">
								<img class="mr-xs-rem-0-50" src="../../assets/svg/menu/materials.svg" alt="">
                                <span>
                                    Материалы для скачивания
                                </span>
                            </button>
                        </div>
                    </div>
                    
                    <div class="card card_white mt-rem-2-0 ml-rem-1-50">
                        <navigation :nav-items="navigation" :content-show="content.show" :current-group="currentGroup" @updateContentShow="updateContentShow" v-if="currentTab === 'navigation'" @updateDisplayGroup="updateDisplayGroup($event)"></navigation>
                        <v-articles v-if="currentTab === 'articles'" :articles="articles" @read-story="openStory($event);"></v-articles>
                        <materials v-if="currentTab === 'materials'" :materials="materials"></materials>
                    </div>
                </div> -->
            </div>
        </div>


</template>


