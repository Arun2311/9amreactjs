import React, { useEffect,useState } from 'react'
import PropsComp from './PropsComp'

 function ApiCallWithEffect({name,age}) {

    const [count ,setcount] = useState(0)


    const handlecount = () =>{
      setcount(count+1)
    }


    useEffect(()=>{
        console.log("arim");
        
        return()=>{
            console.log("loged out");
        }


    },[count])




  return (
    <div>
        <h1>Arunachalam - {count}</h1>

        <h2>{name} - {age}</h2>




<PropsComp   names = {["arun" ,"ram" ,"krish" ,]} />

        <button onClick={handlecount}>add</button>
    </div>
  )
}


export default ApiCallWithEffect