<script setup></script>
<template>
	<div class="header-nav__articles">
		<!-- Slider main container -->
		<div class="header-slider"
			 ref="slider">
			<div class="header-slider__header mb-rem-1-50 mb-xs-rem-1-0">
				<h4 class="w-100">Собираем для вас</h4>
				<!-- If we need navigation buttons -->
				<svg class="slider__btn-prev ml-rem-0-50 ml-xs-rem-0-50 ml-xs-rem-0-50">
					<use xlink:href="user/svg/sprite.svg#slider-btn" />
				</svg>
				<svg class="slider__btn-next ml-rem-0-50 ml-xs-rem-0-50 ml-xs-rem-0-50">
					<use xlink:href="user/svg/sprite.svg#slider-btn" />
				</svg>
			</div>

			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide swiper-slide_fifth swiper-slide_half-xs"
					 v-for="(story, key) in articles">
					<div class="header-slider__slide-content"
						 @click="readStory(story, key)">
						<img :src="story.img"
							 alt=""
							 class="mb-rem-0-50">
						<h6>{{ story.title }}</h6>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>