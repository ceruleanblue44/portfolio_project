export const showHiddenContent = (hiddenId) => {
	const hiddenElements = document.querySelectorAll('.js-hidden');

    hiddenElements.forEach(element => {
        if (String(hiddenId) === String(element.dataset.hiddenId)) {
            element.classList.remove('hidden');
        }
    });

}