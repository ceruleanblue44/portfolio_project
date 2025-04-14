import { defineStore } from 'pinia'

export const usePagesViewedStore = defineStore('pagesViewed', {
	state: () => ({
		pagesFullyViewed: new Set()
	}),
	actions: {
		markPageFullyViewed(page) {
			this.pagesFullyViewed.add(page)
			this.savePageFullyViewed()
		},
		savePageFullyViewed() {
			localStorage.setItem('pagesFullyViewed', JSON.stringify([...this.pagesFullyViewed]))
		},
		loadPagesFullyViewed() {
			this.pagesFullyViewed = new Set(JSON.parse(localStorage.getItem('pagesFullyViewed'))) || []
		}
	}
})
