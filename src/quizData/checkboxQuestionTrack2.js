export const checkboxQuestionTrack2 = {
	questionId: 3,
	checkRule: {
		type: 'count',
		check: (count) => count < 2,
		correctFeedback: 'feedback-0',
		incorrectFeedback: 'feedback-1',
	},
	answersGrid: {
		gridStyle: {
			'grid-template-columns': '1fr 1fr'
		},
		gridStyleXs: {
			'grid-template-columns': '1fr'
		},
	},
	answers: [
		{
			text: 'Управление исполнением',
			img: '/assets/svg/checkboxQuestion/icon-6.svg',
			correct: true,
			style: {}
		},
		{
			text: 'Управление взаимодействием',
			img: '/assets/svg/checkboxQuestion/icon-7.svg',
			correct: true,
			style: {}
		},
		{
			text: 'Управление ресурсами',
			img: '/assets/svg/checkboxQuestion/icon-8.svg',
			correct: true,
			style: {}
		},
		{
			text: 'Управление стратегией',
			img: '/assets/svg/checkboxQuestion/icon-9.svg',
			correct: true,
			style: {}
		},
	]
}
