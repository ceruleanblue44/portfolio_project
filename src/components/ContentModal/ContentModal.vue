<script setup>
import './ContentModal.scss'

const props = defineProps({
	modelValue: Boolean, // Controls modal visibility
	title: String,
	content: String,
})

const emit = defineEmits(['update:modelValue'])

const closeModal = () => {
	emit('update:modelValue', null)
}
</script>

<template>
	<div v-if="modelValue"
		 class="content-modal"
		 @click.self="closeModal">
		<Transition name="fade-content"
					appear>
			<div class="content-modal__content">
				<h3 class="mb-rem-1-50 mb-xs-rem-1-0">{{ props.title }}</h3>
				<div v-html="props.content"></div>

				<div class="d-flex jc-center">
					<button class="btn_modal"
							@click="closeModal">Закрыть
					</button>
				</div>
			</div>
		</Transition>
	</div>
</template>
