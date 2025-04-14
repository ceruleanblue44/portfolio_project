export const accordionInit = () => {
	const accordionBtn = document.querySelectorAll('.accordion__title'),
		accordionContainer = document.querySelectorAll('.accordion__container')

	accordionBtn.forEach((btn) => {
		const collapse = btn.closest('.js-accordion').hasAttribute('data-collapse')

		const container = btn.nextElementSibling

		if (collapse) {
			btn.addEventListener('click', () => {
				btn.classList.add('vis')
				if (container.classList.contains('show')) {
					container.classList.remove('show')
				} else {
					accordionContainer.forEach((el) => {
						el.classList.remove('show')
					})
					container.classList.add('show')
				}
			})

		} else {
			btn.addEventListener('click', () => {
				btn.classList.add('vis')
				if (container.classList.contains('show')) {
					container.classList.remove('show')
				} else {
					container.classList.add('show')
				}
			})
		}
	})
}
