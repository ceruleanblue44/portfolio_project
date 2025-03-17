<script setup>

const props = defineProps({
	materials: Array
})

</script>
<template>
	<div class="header-nav__materials">
		<div class="card card_white">
			<div class="mb-rem-1-50 mb-xs-rem-1-0">
				<h4>Материалы для скачивания</h4>
			</div>
			<div class="materials">
				<div class="materials__btn"
					 v-for="material in props.materials"
					 :key="material.id">
					<!-- <img :src="material.img"
							 alt=""
							 class=""> -->
					<a :href="material.link"
					   download>
						<h6>{{ material.title }}</h6>
					</a>
				</div>
				<!-- 
			<div class="swiper-slide swiper-slide_fourth swiper-slide_full-xs " v-for="(materialItem, key) in materials">
                    <div class="header-slider__slide-content">
                        <p class="text text-xs text-white">{{ materialItem.title }}</p>
                    </div>
                </div> -->
			</div>
		</div>
	</div>

</template>