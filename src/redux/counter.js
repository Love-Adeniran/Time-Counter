import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'count',
    initialState:{
        number1: 2,
        number2: 34
    },
    reducers : {
        increase :(state)=>{
            if(state.number2 === 59){
                state.number1 += 1
                state.number2 -= 59
            }
            else{
                state.number2 += 1
            }
            
        },
        decrease: (state)=>{
            if(state.number2 === 0){
                state.number1 -= 1
                state.number2 += 59
            }else if(state.number1 === 0){
                state.number1 +=12
            }
            else{
                state.number2 -= 1
            }
        }
    }
})

export const {increase, decrease} = counterSlice.actions
export default counterSlice.reducer