import {createSlice} from "@reduxjs/toolkit";

const defaultState = {
    value: 20,
    defaultChangeCounter: 10,
    lesson: {
        lecture: 10,
        topic: 'Redux Toolkit'
    }
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: defaultState,
    reducers: {
        increaseCounterAction: (state) => {
            state.value += Number(defaultState.defaultChangeCounter);
        },
        decreaseCounterAction: (state) => {
            state.value -= Number(defaultState.defaultChangeCounter);
        }
    }
})

export const { increaseCounterAction, decreaseCounterAction
     } = counterSlice.actions;
export default counterSlice.reducer;