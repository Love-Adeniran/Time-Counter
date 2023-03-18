import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import loader from '../assets/images/200.webp'

const NewPost = () => {
    const title = useRef()
    const more = useRef()
const [isloading, setisloading] = useState(false)

    const submitForm = () =>{
        const data ={
            title: title.current.value,
            more: more.current.value
        }
        setisloading(true)
        // console.log(data)
        axios.post('http://localhost:5000/home',data).then(res=>{
            console.log(res);
            setisloading(false)
        }).catch(err=>{
            console.log(err);
            setisloading(false)
        })
    }
  return (
    <div>
        <div className='container p-4'>
        <div className='container p-4 m-2'>
            <h1 className='text-center'>New Post</h1>
                <input type="text" ref={title} className='form-control m-2' placeholder='title'/>
                <textarea name="" id=""  ref={more} className='form-control m-2' placeholder='more'></textarea>
                <button onClick={submitForm} disabled= {isloading} className="btn btn-primary w-100" >{isloading? <img src={loader} style={{height:'100px'}}/>: 'Add'}</button>
        </div>
           <div>
                <h1>Display</h1>
                
            </div> 
        </div>
    </div>
  )
}

export default NewPost