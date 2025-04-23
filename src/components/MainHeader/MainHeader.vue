<script setup>
import './MainHeader.scss'
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { headerData } from '@/headerData/headerData'
import HeaderNavArticles from './HeaderNavArticles.vue'
import HeaderNavMaterials from './HeaderNavMaterials.vue'
import HeaderNavContents from './HeaderNavContents.vue'
import { useViewStore } from '@/stores/useViewStore'

const router = useRouter()

const route = useRoute()

const view = useViewStore()
const { isMobile } = storeToRefs(view)

const isMenuOpen = ref(false)

const goBack = () => {
	if (window.history.length > 1) {
		router.back()
	} else {
		router.push('/') // Fallback to home if no history exists
	}
};

const currentTab = ref('navigation')

const tabComponents = {
	navigation: HeaderNavContents,
	articles: HeaderNavArticles,
	materials: HeaderNavMaterials
}

const getComponentEvents = () => {
	return currentTab.value === 'navigation' ? { 'close-menu': closeMenu } : {}
}

const getCurrentRouteTitle = computed(() => {
	return headerData.navigation.find(navItem => navItem.link === route.path).title
})

const openMenu = () => {
	isMenuOpen.value = true
}

const closeMenu = () => {
	isMenuOpen.value = false
}

const selectTab = (component) => {
	currentTab.value = component
}

watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>

<template>
	<div
		 :class="['header', {'header_expanded': isMenuOpen}, {'header_expanded-article': isMenuOpen && currentTab === 'article-reader'}]">
		<div class="header__content">
			<div>
				<div class="header__logo">
					<picture>
						<source srcset="/assets/svg/header-logo-xs.svg"
								media="(max-width: 719px), (orientation: landscape) and (max-height: 600px)" />
						<img src="/assets/svg/header-logo.svg"
							 alt="header logo" />
					</picture>
				</div>

				<div class="header__title">
					<div>
						<img src="/assets/svg/header-note.svg"
							 alt="">
						<div class="header__title__text">
							{{ getCurrentRouteTitle }}
						</div>
					</div>
				</div>
			</div>

			<div class="header__progressbar invisible hide">
				<div class="header__progressbar-line"></div>
			</div>

			<button class="header__btn header__btn_secondary ml-rem-1-50 ml-xs-rem-0-50"
					@click="goBack"
					v-show="!isMenuOpen">
				<img src="/assets/svg/back.svg"
					 alt="">
				<span class="hide-xs ml-rem-0-50">Назад</span>
			</button>

			<button class="header__btn ml-rem-1-50 ml-xs-rem-0-50"
					v-show="!isMenuOpen"
					@click="openMenu">
				<span class="hide-xs mr-rem-0-50">Меню</span>
				<img src="/assets/svg/menu.svg"
					 alt="">
			</button>

			<button class="header__btn ml-rem-1-50 ml-xs-rem-0-50"
					v-show="isMenuOpen"
					@click="closeMenu">
				<span class="hide-xs mr-rem-0-50">Закрыть</span>
				<img class=""
					 src="/assets/svg/close.svg"
					 alt="">
			</button>

		</div>

		<div v-show="isMenuOpen"
			 :class="['header-nav', {'scroll-container': isMobile}]"
			 ref="headerNav">
			<div class="header-nav__album-info hide-lg">
				<div class="header-nav__album-name">
					<h3>
						{{ headerData.albumInfo.title }}
					</h3>
				</div>
				<div class="header-nav__album-description">
					<p class="text text-xs" v-html="headerData.albumInfo.description">
				
					</p>
				</div>
			</div>
			<div class="h-lg-100">
				<div class="header-nav__tabs">
					<button @click="selectTab('navigation')"
							:class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'navigation'}]">
						<img class="mr-rem-0-25 mr-xs-rem-0-25"
							 src="/assets/svg/menu/albums.svg"
							 alt="">
						<span>
							Альбом
						</span>
					</button>
					<button @click="selectTab('articles')"
							:class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'articles'}]">
						<img class="mr-rem-0-25 mr-xs-rem-0-25"
							 src="/assets/svg/menu/articles.svg"
							 alt="">
						<span>
							Статьи
						</span>
					</button>
					<button @click="selectTab('materials')"
							:class="['header-nav__tab', {'header-nav__tab_active': currentTab === 'materials'}]">
						<img class="mr-rem-0-25 mr-xs-rem-0-25"
							 src="/assets/svg/menu/materials.svg"
							 alt="">
						<span>
							Материалы
						</span>
					</button>
				</div>
			</div>

			<div class="d-flex-col">
				<div class="header-nav__album-info mb-xs-rem-1-0 hide-xs">
					<div class="header-nav__album-name">
						<h3>
							{{ headerData.albumInfo.title }}
						</h3>
					</div>
					<div class="header-nav__album-description">
						<p class="text text-xs">
							{{ headerData.albumInfo.description }}
						</p>
					</div>
				</div>

				<div class="header-nav__content">
					<component :is="tabComponents[currentTab]"
							   v-if="tabComponents[currentTab]"
							   v-bind:[currentTab]="headerData[currentTab]"
							   v-on="getComponentEvents()" />
				</div>
			</div>
		</div>
	</div>

</template>
