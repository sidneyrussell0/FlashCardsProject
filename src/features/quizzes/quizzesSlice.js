import { createSlice } from '@reduxjs/toolkit';

const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {}, },
    reducers: {
        addQuiz: (state, action) => {
            const { id, name, topicId, cardIds } = action.payload;
            state.quizzes[id] = {id, name, topicId, cardIds };
        },
    },
});


export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
export const selectQuizzes = (state) => state.quizzes.quizzes || {};
export const selectQuizById = (state, quizId) => state.quizzes.quizzes[quizId];
