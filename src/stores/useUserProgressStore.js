import { defineStore } from 'pinia'

export const useUserProgressStore = defineStore('userProgress', {
	state: () => ({
		quizAnswers: JSON.parse(localStorage.getItem('quizAnswers')) || {} // Store answers with question IDs as keys
	}),

	actions: {
		saveQuizAnswer(questionId, answer) {
			if (this.quizAnswers[questionId] === answer) {
				return // No need to update if the answer hasn't changed
			}

			this.quizAnswers[questionId] = answer
			localStorage.setItem('quizAnswers', JSON.stringify(this.quizAnswers))
		}
	}
})
