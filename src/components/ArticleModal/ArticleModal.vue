<script setup>
import './ArticleModal.scss'
import { articleModal } from '@/contentModalsData/articleModal'

const emit = defineEmits(['closeModal'])

const closeModal = () => {
	emit('closeModal', false)
}
</script>

<template>
	<div class="article-modal"
		 @click.self="closeModal">
		<Transition name="fade-content"
					appear>
			<div class="article-modal__content">
				<div class="article-modal__scroll scroll-container">
					<div class="d-flex jc-space-between">
					<h3 class="mb-rem-1-50 mb-xs-rem-1-0">{{ articleModal.title }}</h3>
						<button class="btn btn_modal-close"
								@click="closeModal">&times;
						</button>
					</div>
					<div v-html="articleModal.content"></div>
				</div>
			</div>
		</Transition>
	</div>
</template>
