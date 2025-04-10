export const tabsInit = () => {
	const tabs = document.querySelectorAll('.js-tab')
	const tabsWithPlaceholder = document.querySelectorAll('.js-tab-with-placeholder')

	tabs.forEach((tab) => {
		new TabsWithFirstItemActive(tab)
	})

	tabsWithPlaceholder.forEach((tab) => {
		new TabsWithPlaceholder(tab)
	})
}

class BaseTabs {
	constructor(tabs) {
		this.tabsContainer = tabs
		this.tabsBtns = this.tabsContainer.querySelectorAll('.js-tab-link')
		this.tabsContents = this.tabsContainer.querySelectorAll('.js-tab-item')

		for (let i = 0; i < this.tabsBtns.length; i++) {
			this.tabsBtns[i].addEventListener('click', () => {
				this.openTab(i)
			})
		}
	}

	openTab(tabIndex) {
		for (let t = 0; t < this.tabsBtns.length; t++) {
			this.tabsBtns[t].classList.remove('active')
			this.tabsContents[t].classList.remove('active')
		}

		this.tabsBtns[tabIndex].classList.add('active')
		this.tabsBtns[tabIndex].classList.add('visited')
		this.tabsContents[tabIndex].classList.add('active')
	}
}

class TabsWithFirstItemActive extends BaseTabs {
	constructor(tabs, params) {
		super(tabs, params)
		this.tabCur = this.tabsContainer.querySelector('.tab__nav > ul, li')
		this.tabCur.classList.add('visited')
	}
}

class TabsWithPlaceholder extends BaseTabs {
	constructor(tabs, params) {
		super(tabs, params)
		this.tabsPlaceholder = this.tabsContainer.querySelector('.js-tab-placeholder')
	}

	openTab(tabIndex) {
		this.tabsPlaceholder.classList.add('hide')
		super.openTab(tabIndex)
	}
}
