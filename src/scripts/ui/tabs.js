export const tabsInit = () => {
	// document.querySelector('.btn_next').classList.add('disabled');
	// if (typeof CLV !== 'undefined') {
	//     if (CLV.oGlobal['tabs' + getFramePosition().current]) {
	//         document.querySelector('.btn_next').classList.remove('disabled');
	//     }
	// }

	const tabs = document.querySelectorAll('.js-tab')
	const tabsWithPlaceholder = document.querySelectorAll('.js-tab-with-placeholder')
	// const showHint = document.querySelector()

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

		// получаем массив всех вкладок
		this.tabsBtns = this.tabsContainer.querySelectorAll('.js-tab-link')
		// получаем массив всех блоков вкладок
		this.tabsContents = this.tabsContainer.querySelectorAll('.js-tab-item')

		// запускаем цикл и добавляем событие на каждую вкладку
		for (let i = 0; i < this.tabsBtns.length; i++) {
			this.tabsBtns[i].addEventListener('click', () => {
				this.openTab(i)
			})
		}
	}

	openTab(tabIndex) {
		// в цикле перебираем все вкладки + блоки этих вкладок и удаляем у них класс active
		for (let t = 0; t < this.tabsBtns.length; t++) {
			this.tabsBtns[t].classList.remove('active')
			this.tabsContents[t].classList.remove('active')
		}
		// добавляем вкладкам класс active и visited
		this.tabsBtns[tabIndex].classList.add('active')
		this.tabsBtns[tabIndex].classList.add('visited')
		// добавляем блокам вкладок класс active
		this.tabsContents[tabIndex].classList.add('active')

		// получаем просмотренные вкладки
		let tabsBtns_visited = this.tabsContainer.querySelectorAll('.js-tab-link.visited')

		if (this.tabsBtns.length === tabsBtns_visited.length) {
			this.onAllTabsVisited()
		}
	}

	onAllTabsVisited() {
		// if (typeof CLV !== 'undefined') {
		//     CLV.oGlobal['tabs' + getFramePosition().current] = true;
		//     document.querySelector('.btn_next').classList.remove('disabled');
		// }
	}
}

/**
 * Табы, открывающиеся на первой вкладке при иницализации
 */
class TabsWithFirstItemActive extends BaseTabs {
	constructor(tabs, params) {
		super(tabs, params)

		// получаем первую вкладку
		this.tabCur = this.tabsContainer.querySelector('.tab__nav > ul, li')
		// добавляем первой вкладке класс visited, т.к она уже активная
		this.tabCur.classList.add('visited')
	}
}

/**
 * Табы с отдельной placeholder-вкладкой, которая отображается изначально перед открытием любой другой вкладки
 */
class TabsWithPlaceholder extends BaseTabs {
	constructor(tabs, params) {
		super(tabs, params)

		this.tabsPlaceholder = this.tabsContainer.querySelector('.js-tab-placeholder')
	}

	openTab(tabIndex) {
		super.openTab(tabIndex)

		this.tabsPlaceholder.classList.add('hide')
	}

	onAllTabsVisited() {}
}
