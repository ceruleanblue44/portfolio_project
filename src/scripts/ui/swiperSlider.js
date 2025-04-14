import { register } from 'swiper/element/bundle'

register()

export const swiperInit = () => {
	const swiperEls = document.querySelectorAll('swiper-container')

	swiperEls.forEach((el) => {
		const parent = el.closest('.album-slider, .playlist-slider')

		const params =
			el.dataset.swiperType === 'albums'
				? {
					navigation: {
						nextEl: parent.querySelector('.slider__btn-next'),
						prevEl: parent.querySelector('.slider__btn-prev'),
						disabledClass: 'slider__btn_disabled'
					},
					slidesPerView: 4,
					spaceBetween: 24,
					breakpoints: {
						370: { slidesPerView: 2 },
						719: { slidesPerView: 4 }
					},
				}
				: {
					navigation: {
						nextEl: parent.querySelector('.slider__btn-next'),
						prevEl: parent.querySelector('.slider__btn-prev'),
						disabledClass: 'slider__btn_disabled'
					},
					pagination: {
						clickable: false,
						el: parent.querySelector('.slider__pagination')
					},
					slidesPerView: 1,
				}

		Object.assign(el, params)
		el.initialize()
	})
}

