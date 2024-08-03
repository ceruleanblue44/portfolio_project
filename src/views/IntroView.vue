<script setup>
import { PerfectScrollbar } from 'vue3-perfect-scrollbar';

function onScrollEvent(event) {
  console.log(event);
}
</script>

<template>

	<PerfectScrollbar @ps-scroll-y="onScrollEvent">
		<div class="container" style="height: 400vh;">
			<div class="row zoom-text__group custom-cursor-area js-custom-cursor-area"
				 data-cursor-class="cursor_arrow-down"
				 onclick="scrollToContent(3);">
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1>Все можно<br>пережить </h1>
				</div>
				<div class="col-lg-6 col-xs-12 zoom-text__container">
					<h1 class="text-right text-color-primary mb-40 mb-xs-rem-2-0">Просто подбери<br>нужную песню
					</h1>
				</div>
			</div>
		</div>
	</PerfectScrollbar>
</template>
 
<style></style>
