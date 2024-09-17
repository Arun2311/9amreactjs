import React, { useState } from "react";

import "./bdlist.css";

export default function BdProject() {
  const [bdlist, setbdlist] = useState([
    {
      id: 1,
      name: "Bertie Yates",
      age: 29,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    },
    {
      id: 2,
      name: "Hester Hogan",
      age: 32,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg",
    },
    {
      id: 3,
      name: "Larry Little",
      age: 36,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    },
    {
      id: 4,
      name: "Sean Walsh",
      age: 34,
      image:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    },
  ]);

  const handleclear =()=>{
    setbdlist([])
  }
  return (
    <div>
      <h1>{bdlist.length} Birthday list Today</h1>

      {bdlist.map((daa) => (
        <div>
          <img className="ImageCss" src={daa.image} />

          <h2>{daa.name}</h2>

          <h3>{daa.age} years</h3>
        </div>
      ))}

      <button onClick={handleclear}>Clear All</button>
    </div>
  );
}
