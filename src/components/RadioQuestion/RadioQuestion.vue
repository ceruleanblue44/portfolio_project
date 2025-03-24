<script setup>
import './RadioQuestion.scss'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue'
import { useUserProgressStore } from '@/stores/useUserProgressStore';

const userProgressStore = useUserProgressStore();

// userProgressStore.loadQuizAnswers();

import { ref, nextTick, onMounted} from 'vue';

const feedbackShow = ref(false)
const currentAnswer = ref(null)

const props = defineProps({
	radioQuestionIntro: { type: Object},
	// answersGrid: { type: Object },
	layoutColumns: { type: Array, default: () => [6, 6] },
	disabled: { type: Boolean, default: false },
})

const { questionId, answersGrid, answers } = props.radioQuestionIntro

const emit = defineEmits(['complete'])

const getSavedAnswer = () => {
	return userProgressStore.quizAnswers[questionId]
	// if (useUserProgressStore.quizAnswers.questionId) {
	// 			currentAnswer.value = useUserProgressStore.quizAnswers[questionId]
	// 		}
	// try {
	//     return CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${this.$root.$el.id}-answer`];
	// } catch (error) {
	//     console.warn('CLV not defined!');
	//     return null;
	// }

}



const setCurrentAnswer = (newAnswer) => {
        currentAnswer.value = newAnswer;

		console.log(newAnswer);

		userProgressStore.saveQuizAnswer(questionId, currentAnswer.value)

            // if (this.useClv) {
            //     try {
            //         CLV.oGlobal[`practice-simple-question-${getFramePosition().current}-${this.$root.$el.id}-answer`] = this.currentAnswer;
            //     } catch (error) {
            //         console.warn('CLV not defined!');
            //     }
            // }
        }

   const acceptAnswer = () => {
            feedbackShow.value = true;

            nextTick(() => {
                emit('complete', currentAnswer.value.correct);           
            });
        }

		onMounted(() => {
			if (userProgressStore.quizAnswers.questionId) {
				currentAnswer.value = userProgressStore.quizAnswers[questionId]
			} 
		})

</script>

<template>
	<div class="">
		<div class="row">
			<div :class="`col-lg-${props.layoutColumns[0]} col-xs-12 mb-xs-rem-2-0`">
				<slot name="question-text"></slot>
			</div>
			<div :class="`col-lg-${props.layoutColumns[1]} col-xs-12`">
				<radio-question-grid :answers="answers"
									 :grid-style="answersGrid.gridStyle"
									 :grid-style-xs="answersGrid.gridStyleXs"
									 :disabled="feedbackShow || disabled"
									 :previous-answer="getSavedAnswer()"
									 @select-answer="setCurrentAnswer($event)">
				</radio-question-grid>
				<button class="btn w-100 mt-rem-2-50 mt-xs-rem-2-0"
						:disabled="!currentAnswer || feedbackShow || disabled"
						@click="acceptAnswer()">
					Ответить
				</button>
			</div>
		</div>
		<div class="row mt-rem-3-75 mt-xs-rem-2-0"
			 v-if="feedbackShow"
			 ref="feedback">
			<div class="col-lg-12 col-xs-12">
				<slot :name="`feedback-${currentAnswer.feedbackId}`"></slot>
			</div>
		</div>
	</div>

</template>