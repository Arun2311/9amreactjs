import React, { useState } from "react";
import "./listrender.css"

function ListRender() {
  const [data, setdata] = useState(
    [
    {
      name: "luffy",
      role: "yonko",
      img: "https://i.pinimg.com/1200x/b0/b6/29/b0b629922c3a95da5bc35921bcf2983c.jpg",
    },
    {
      name: "shanks",
      role: "yonko",
      img: "https://i.pinimg.com/736x/3d/cc/9e/3dcc9e1670ad277064afba4eca33e6f3.jpg",
    },
    {
      name: "black beard",
      role: "yonko",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2018/08/Blackbeard-One-Piece.jpg",
    },
  ]
);

  return (
    <div>
      <h1>One Piece </h1>

      {data.map((ch,i) => (
        <div key={i}>
          <img className="one" src={ch.img} height={200} width={200} />

          <h1>
            {ch.name} - {ch.role}
          </h1>
        </div>
      ))}






    </div>
  );
}
export default ListRender;

