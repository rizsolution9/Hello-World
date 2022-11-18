import { createSlice } from "@reduxjs/toolkit";

const msgSlice = createSlice({
    name:"counter",
    initialState: {
        value: 3
    },
        reducers:{
            addMsgToHeader: (state) =>{
                state.value += 1;
            }
        }

})

export const { addMsgToHeader } = msgSlice.actions;
export default msgSlice.reducer;