import { defineStore } from 'pinia';

export const useUserProgressStore = defineStore('userProgress', {
	state: () => ({
		quizAnswers: {} // Store answers with question IDs as keys
	}),
	actions: {
		saveQuizAnswer(questionId, answer) {
			this.quizAnswers[questionId] = answer;
			// localStorage.setItem('quizAnswers', JSON.stringify(this.quizAnswers));
		},
		
		loadQuizAnswers() {
			this.quizAnswers = JSON.parse(localStorage.getItem('quizAnswers')) || {};
		}
	}
});
