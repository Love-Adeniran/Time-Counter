import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increase, decrease } from '../redux/counter'
const Fish = () => {
    let firstNumber = useSelector(state=>state.counterReducer.number1)
    let secondNumber = useSelector(state=>state.counterReducer.number2)
    let dispatch = useDispatch()
  return (
    <>
        <div className='container w-75 backg2 p-5 rounded-pill'>
            <div className='w-50 p-4 border mx-auto bg-dark text-light'>
                <div className='w-100 border text-center'>
                    <span className='text-warning shadow p-3 mb-5 '>{firstNumber}: {secondNumber} PM</span>
                </div>
                <div className='p-2 mx-auto w-50'>
                    <button className=' btn btn-primary rounded-circle' onClick={()=>dispatch(increase())}>+</button>
                    <button className='btn btn-danger rounded-circle' onClick={()=>dispatch(decrease())}>-</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Fish