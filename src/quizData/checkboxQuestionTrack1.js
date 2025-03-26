export const checkboxQuestionTrack1 = {
	questionId: 1,
	checkRule: {
		type: 'count',
		check: (count) => count > 0,
		correctFeedback: 'feedback-0',
		incorrectFeedback: 'feedback-1',
	},
	answersGrid: {
		gridStyle: {
			'grid-auto-columns': '1fr',
			'grid-template-areas': `"a a b b c c" "d d d e e e"`
		},
		gridStyleXs: {
			'grid-template-columns': '1fr'
		},
	},
	answers: [
		{
			text: 'реализация идей',
			img: 'src/assets/svg/checkboxQuestion/icon-1.svg',
			correct: true,
			style: {
				'grid-area': 'a'
			}
		},
		{
			text: 'экспертность',
			img: 'src/assets/svg/checkboxQuestion/icon-2.svg',
			correct: true,
			style: {
				'grid-area': 'b'
			}
		},
		{
			text: 'качество работы',
			img: 'src/assets/svg/checkboxQuestion/icon-3.svg',
			correct: true,
			style: {
				'grid-area': 'c'
			}
		},
		{
			text: 'соблюдение дедлайнов',
			img: 'src/assets/svg/checkboxQuestion/icon-4.svg',
			correct: true,
			style: {
				'grid-area': 'd'
			}
		},
		{
			text: 'инициативность',
			img: 'src/assets/svg/checkboxQuestion/icon-5.svg',
			correct: true,
			style: {
				'grid-area': 'e'
			}
		},
	]
}
