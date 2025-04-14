import { defineStore } from 'pinia'

export const useUserProgressStore = defineStore('userProgress', {
	state: () => ({
		quizAnswers: JSON.parse(localStorage.getItem('quizAnswers')) || {}
	}),

	actions: {
		saveQuizAnswer(questionId, answer) {
			if (this.quizAnswers[questionId] === answer) {
				return
			}

			this.quizAnswers[questionId] = answer
			localStorage.setItem('quizAnswers', JSON.stringify(this.quizAnswers))
		}
	}
})
