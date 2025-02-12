<template>
	<div class="header">
		<div class="header__content">
			<div>
				<div class="header__logo">
					<img src="../../assets/svg/header-logo.svg"
						 alt="">
				</div>

				<div class="header__title">
					<div>
						<img src="../../assets/svg/header-note.svg"
							 alt="">
						<div class="header__title__text js-header-title">
							Intro to a new life
						</div>
					</div>
				</div>
			</div>

			<div class="header__progressbar invisible hide">
				<div class="header__progressbar-line"></div>
			</div>

			<button class="header__btn header__btn_secondary ml-rem-1-50 ml-xs-rem-0-50">
				<img src="../../assets/svg/back.svg"
					 alt="">
				<span class="hide-xs">Назад</span>
			</button>

			<button class="header__btn ml-rem-1-50 ml-xs-rem-0-50">
				<span class="hide-xs">Меню</span>
				<img src="../../assets/svg/close.svg"
					 alt="">
				<img src="../../assets/svg/menu.svg"
					 alt="">
			</button>

		</div>
	</div>
</template>

<script setup>
import './MainHeader.scss'

</script>
