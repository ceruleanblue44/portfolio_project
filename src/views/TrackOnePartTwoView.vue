<script setup>
// import { ref, onMounted, nextTick } from 'vue'
import MainHeader from '@/components/MainHeader/MainHeader.vue'
import ToggleImg from '@/components/ToggleImg/ToggleImg.vue'
import { toggleImg } from '@/toggleAnimationsData/toggleImg';


// onMounted(() => {

// })

</script>

<template>
	<PerfectScrollbar>
		<MainHeader />
		<div class="container mt-rem-6-50 mt-xs-rem-5-0">
			<h1 class="text-center mb-rem-0-75 mb-xs-rem-0-75">Переключись на новый режим
			</h1>
			<hr class="hr hr_neutral-16 mb-rem-4-0 mb-xs-rem-3-0" />
		</div>
		<div class="container mb-rem-4-0 mb-xs-rem-3-0">
			<div class="row">
				<div class="col-lg-4 hide-xs">&nbsp;
				</div>
				<div class="col-lg-4 col-xs-12">
					<div class="hint text-center">Нажми на кнопку, чтобы перейти дальше
					</div>
				</div>
				<div class="col-lg-4 hide-xs">&nbsp;
				</div>
			</div>
		</div>
		<div class="container mb-rem-4-0">
			<div class="row mb-60 mb-xs-30">
				<div class="col-lg-12 col-xs-12">
					<ToggleImg :label-texts="toggleImg.labelTexts" :tweens="toggleImg.tweens">
						<div class="pos-r"><img alt=""
								 id="toggle-img-1-1"
								 src="../assets/img/toggleImg/band.png" /> <img alt=""
								 class="pos-a"
								 id="toggle-img-1-2"
								 src="../assets/img/toggleImg/baton.png"
								 style="right: 0; top: 0; max-width: 17%;" />
						</div>
					</ToggleImg>
				</div>
			</div>
		</div>
	</PerfectScrollbar>
</template>