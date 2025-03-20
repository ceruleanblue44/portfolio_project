<script setup>
import { ref } from 'vue';
import ArticleModal from '../ArticleModal/ArticleModal.vue'

const isModalOpen = ref(false)

const props = defineProps({
	articles: Array
})

const openModal = () => isModalOpen.value = true

const closeModal = () => isModalOpen.value = false

</script>
<template>
	<Transition name="fade"
				appear>
		<div class="header-nav__articles">
			<div class="card card_white">
				<div class="mb-rem-1-50 mb-xs-rem-1-0">
					<h4>Статьи</h4>
				</div>

				<div class="article-wrapper">
					<div v-for="article in props.articles"
						 :key="article.id"
						 @click="openModal">
						<img :src="article.img"
							 alt=""
							 class="cursor-pointer mb-rem-1-0 mb-xs-rem-0-50">
						<h6>{{ article.title }}</h6>
					</div>
				</div>
			</div>
			<ArticleModal v-if="isModalOpen"
						  @closeModal="closeModal" />
		</div>
	</Transition>
</template>