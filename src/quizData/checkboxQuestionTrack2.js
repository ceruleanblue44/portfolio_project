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
			img: 'src/assets/svg/checkboxQuestion/icon-6.svg',
			correct: true,
			style: {
				// 'grid-row': '1 / 4'
			}
		},
		{
			text: 'Управление взаимодействием',
			img: 'src/assets/svg/checkboxQuestion/icon-7.svg',
			correct: true,
			style: {}
		},
		{
			text: 'Управление ресурсами',
			img: 'src/assets/svg/checkboxQuestion/icon-8.svg',
			correct: true,
			style: {}
		},
		{
			text: 'Управление стратегией',
			img: 'src/assets/svg/checkboxQuestion/icon-9.svg',
			correct: true,
			style: {}
		},
	]
}
