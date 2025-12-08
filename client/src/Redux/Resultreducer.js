import { createSlice } from "@reduxjs/toolkit";

export const resultreducer = createSlice({
    name: 'result',
    initialState: {
        userid: null,
        rollNumber: null,
        result: []
    },
    reducers: {
        setuserid: (state, action) => {
            state.userid = action.payload;
        },
        setRollNumber: (state, action) => {
            state.rollNumber = action.payload;
        },
        pushresultaction: (state, action) => {
            state.result.push(action.payload);
        },
        updateresultaction: (state, action) => {
            const { trace, checked } = action.payload;
            state.result[trace] = checked;
        },
        resetresultaction: () => {
            return {
                userid: null,
                rollNumber: null,
                result: []
            }
        },
        resetQuizData: (state) => {
            state.result = [];
        }
    }
});
export const { setuserid, setRollNumber, pushresultaction, resetresultaction, updateresultaction, resetQuizData } = resultreducer.actions;
export default resultreducer.reducer;
