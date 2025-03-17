<script setup>

const props = defineProps({
	articles: Array
})

</script>
<template>
	<div class="header-nav__articles">
		<div class="card card_white">
			<div class="mb-rem-1-50 mb-xs-rem-1-0">
				<h4>Статьи</h4>
			</div>

			<div v-for="article in props.articles" :key="article.id">
				<img :src="article.img"
							 alt=""
							 class="mb-rem-1-0 mb-xs-rem-0-50">
						<h6>{{ article.title }}</h6>
			</div>
		</div>
	</div>

</template>