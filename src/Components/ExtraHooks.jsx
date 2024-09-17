import React, { useEffect, useLayoutEffect, useRef } from 'react'

export default function ExtraHooks() {

    const inputref =  useRef(null)


    useEffect(()=>{
        inputref.current.focus()
    },[])


    useEffect(()=>{
        console.log("useEffect");

    },[])


    
    useLayoutEffect(()=>{
console.log("useLayoutEffect");

    },[])

  return (
    <div>
        <h1>Useref </h1>
        <input ref={inputref} placeholder='enter u r name'/>
        <button>add</button>
    </div>
  )
}
