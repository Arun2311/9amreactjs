import React, { useState } from "react";

function NameChange() {


const [name,setname] = useState("Arun")


const handlename = ()=>{

    if(name == "Arun"){
        setname("Luffy")

    }else{
        setname("Arun")

    }



}

  return (
    <div>
      <h1>Name : {name}</h1>

      <button onClick={handlename}>Change</button>


    </div>
  );
}

export default NameChange;
