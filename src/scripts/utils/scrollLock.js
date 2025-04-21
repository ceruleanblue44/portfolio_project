export const disableScroll = () => {
	const container = document.querySelector('.scroll-container')
	if (container) {
		container.style.overflow = 'hidden'
	}
}

export const enableScroll = () => {
	const container = document.querySelector('.scroll-container')
	if (container) {
		container.style.overflow = ''
	}
}
