import React, { useState } from "react";
import SubName from "./SubName";

function CountComp() {
  // hook
  const [count, setcount] = useState(2)

  const handladd = () => {
    setcount(count + 1);
  }

  return (
    <>
      <h2>Anime Name : One Piece 1</h2>


      <SubName />


      <h1>Ticket Count - {count} </h1>


      <button onClick={handladd}> add</button>


    </>
  );
}

export default CountComp;
