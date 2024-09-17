import React, { useState } from 'react'

export default function InputComp() {

    const [inputname ,setinputname] = useState("")
    const [inputemail ,setinputemail] = useState("")


    const handleinput = (e) =>{
        setinputname(e.target.value)
    }


    const handleemail = (e) =>{
        setinputemail(e.target.value)
    }



  return (
    <div>
        <h1>Input : {inputname}</h1>


        <input onChange={handleinput} placeholder='enter u r name'/>

        <input onChange={handleemail} placeholder='enter u r email'/>

    </div>
  )
}
