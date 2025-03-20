<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

const emit = defineEmits(['close-menu'])

const props = defineProps({
	navigation: Array
})

const handleSameRoute = (clickedRoute) => {
  if (route.path === clickedRoute) {
	emit('close-menu') // Close menu if clicking the same page
  }
}

</script>
<template>
	<Transition name="fade"
				appear>
		<div class="navigation card card_white">
			<nav class="navigation__tracks">
				<h4 class="w-100 mb-rem-1-50 mb-xs-rem-1-0">Треки</h4>
				<ul class="navigation__links">
					<li class=""
						v-for="navLink in props.navigation"
						:key="navLink.link">
						<RouterLink class="navigation__link"
									:to="navLink.link"
									@click="handleSameRoute(navLink.link)">
							<!-- <div > -->
							<div class="navigation__link__img pos-r mr-rem-1-50 mr-xs-rem-1-50">
								<img class="img_center"
									 :src="navLink.img"
									 alt="navLink.title">
								<img class="navigation__play-icon"
									 src="../../assets/img/menu/tracks/play.svg"
									 alt="navLink.title">



							</div>
							<div class="navigation__link__text ml-0">
								<div class="d-flex ai-center mb-rem-0-25 mb-xs-rem-0-25">
									<h6 class="mr-rem-0-50 mr-xs-rem-0-50">{{ navLink.title }}</h6>
									<div class="navigation__current-marker">
										<p class="text text-xs text-white">Ты здесь</p>
									</div>
								</div>
								<p class="text text-xs text-gray-1">{{ navLink.description }}</p>
							</div>

							<!-- </div> -->
						</RouterLink>
					</li>
				</ul>
			</nav>
		</div>
	</Transition>
</template>