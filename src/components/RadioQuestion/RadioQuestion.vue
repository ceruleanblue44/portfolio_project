<script setup>
import './RadioQuestion.scss'
import RadioQuestionGrid from '../RadioQuestionGrid/RadioQuestionGrid.vue';

import { ref, nextTick } from 'vue';

const feedbackShow = ref(false)
const currentAnswer = ref(null)

const props = defineProps({
	answersGrid: { type: Object },
	layoutColumns: { type: Array, default: () => [6, 6] },
	disabled: { type: Boolean, default: false },
	scrolling: Boolean,
})

const emit = defineEmits(['complete'])

const getSavedAnswer = () => {
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

                // if (!this.scrolling) {
                //     gsap.to(ps.element, {
                //         scrollTop: ps.element.scrollTop + this.$refs.feedback.offsetHeight,
                //         duration: 1
                //     });
                // }
                
            });
        }


</script>

<template>
	<div class="">
		<div class="row">
			<div :class="`col-lg-${props.layoutColumns[0]} col-xs-12 mb-xs-rem-2-0`">
				<slot name="question-text"></slot>
			</div>
			<div :class="`col-lg-${props.layoutColumns[1]} col-xs-12`">
				<radio-question-grid :answers="props.answersGrid.answers"
									 :grid-style="props.answersGrid.gridStyle"
									 :grid-style-xs="props.answersGrid.gridStyleXs"
									 :disabled="feedbackShow || disabled"
									 :initial-selected-answer="getSavedAnswer()"
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