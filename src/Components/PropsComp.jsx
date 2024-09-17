import React, { useState } from 'react'

export default function PropsComp(props) {


    let {names,}  =  props


  return (
    <div>
        {names.map((d)=>(
          <h1>{d}</h1>
        ))}
    </div>
  )
}



