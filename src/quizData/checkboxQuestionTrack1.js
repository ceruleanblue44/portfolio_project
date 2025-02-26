export const checkboxQuestionTrack1 = {
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
		answers: [
			{
				text: 'воплощения идей',
				img: 'user/img/album-1/track-1/icon/icon-1-1.svg',
				correct: true,
				style: {
					'grid-area': 'a'
				}
			},
			{
				text: 'экспертности',
				img: 'user/img/album-1/track-1/icon/icon-1-2.svg',
				correct: true,
				style: {
					'grid-area': 'b'
				}
			},
			{
				text: 'качественной работы',
				img: 'user/img/album-1/track-1/icon/icon-1-3.svg',
				correct: true,
				style: {
					'grid-area': 'c'
				}
			},
			{
				text: 'соблюдения сроков',
				img: 'user/img/album-1/track-1/icon/icon-1-4.svg',
				correct: true,
				style: {
					'grid-area': 'd'
				}
			},
			{
				text: 'инициативности',
				img: 'user/img/album-1/track-1/icon/icon-1-5.svg',
				correct: true,
				style: {
					'grid-area': 'e'
				}
			},
		]
	}
}
