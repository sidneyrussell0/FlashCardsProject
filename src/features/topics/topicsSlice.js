import { createSlice } from '@reduxjs/toolkit';

const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {}, },
    reducers: {
        addTopic: (state, action) => {
            const { id, name, icon, quizIds } = action.payload;
            state.topics[id] = {id, name, icon, quizIds };
        },
        addQuizToTopic: (state, action) => {
            const { id: quizId, topicId } = action.payload;
            const topic = state.topics[topicId];
            if (topic) {
                if (!topic.quizIds) {
                    topic.quizIds = [];
                }
                if (!topic.quizIds.includes(quizId)) {
                    topic.quizIds.push(quizId);
                }
            }
        },
    },
});


export const { addTopic, addQuizToTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
export const selectTopics = (state) => state.topics.topics;
