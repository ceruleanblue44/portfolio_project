import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
	state: () => ({
		lastVisitedPage: null,
		scrollPositions: {}
	}),
	actions: {
		saveLastVisitedPage(page) {
			this.lastVisitedPage = page;
			localStorage.setItem('lastVisitedPage', page);
		},

		saveScrollPosition(page, position) {
			this.scrollPositions[page] = position;
			localStorage.setItem('scrollPositions', JSON.stringify(this.scrollPositions));
		},

		loadNavigationState() {
			this.lastVisitedPage = localStorage.getItem('lastVisitedPage') || null;
			this.scrollPositions = JSON.parse(localStorage.getItem('scrollPositions')) || {};
		}
	}
});