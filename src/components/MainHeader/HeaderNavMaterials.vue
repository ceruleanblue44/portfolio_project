<script setup>

const props = defineProps({
	materials: Array
})

</script>
<template>
	<Transition name="fade"
				appear>
		<div class="header-nav__materials">
			<div class="card card_white">
				<div class="mb-rem-1-50 mb-xs-rem-1-0">
					<h4>Материалы для скачивания</h4>
				</div>
				<div class="materials">
					<div class="materials__btn"
						 v-for="material in props.materials"
						 :key="material.id">
						<a :href="material.link"
						   download>
							<h6>{{ material.title }}</h6>
						</a>
					</div>
				</div>
			</div>
		</div>
	</Transition>
</template>