import { register } from 'swiper/element/bundle'

register()

export const swiperInit = () => {
		// swiper parameters
		const swiperAlbumsParams = {
			// navigation: true,
			navigation: {
				nextEl: '.slider__btn-next',
				prevEl: '.slider__btn-prev',
				disabledClass: 'slider__btn_disabled',
			},
			slidesPerView: 4,
			breakpoints: {
				370: {
					slidesPerView: 2,
				},
				719: {
					slidesPerView: 4,
				},
			},
			on: {
				init() {
					console.log(987);
				},
			},
		};
	
		const swiperPlaylistParams = {
			// navigation: true,
			navigation: {
				nextEl: '.slider__btn-next',
				prevEl: '.slider__btn-prev',
				disabledClass: 'slider__btn_disabled',
			},
			pagination: {
				clickable: false,
				el: '.slider__pagination'
			},
			slidesPerView: 1,
			on: {
				init() {
					console.log(123);
				},
			},
		};
		
	// swiper element
	const swiperEls = document.querySelectorAll('swiper-container');

	swiperEls.forEach(el => {
		el.dataset.swiperType === 'albums' 
		? Object.assign(el, swiperAlbumsParams) 
		: Object.assign(el, swiperPlaylistParams);
	})
	// console.log(swiperEl.dataset);



	// now we need to assign all parameters to Swiper element
	// Object.assign(swiperEl, swiperParams);

	// and now initialize it
	swiperEls.forEach(el => el.initialize());

}