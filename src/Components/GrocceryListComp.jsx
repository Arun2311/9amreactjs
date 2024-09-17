import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

export default function GrocceryListComp() {
  const [grocerydata, setgrocerydata] = useState([]);
  const [input, setinput] = useState("");

  const handlefetch = async () => {
    let res = await axios.get("http://localhost:3000/todoList");
    setgrocerydata(res.data);
  };

  useEffect(() => {
    handlefetch();
  }, []);

  const handleinput = (e) => {
    setinput(e.target.value);
  };

  const handlepost = async () => {
    let body = {
      grocery: input,
    };
    let post = await axios.post("http://localhost:3000/todoList", body);
    alert("success");
    handlefetch();
  };

  const handledelete = async (id) => {
    let de = await axios.delete(`http://localhost:3000/todoList/${id}`);
    handlefetch();
  };

  const handleedit = async (a) => {
    let rs = prompt("enter u text", grocerydata[a].grocery);

    let body = {
      id: grocerydata[a].id,
      grocery: rs,
    };

    let up = await axios.put(
      `http://localhost:3000/todoList/${grocerydata[a].id}`,
      body
    );

    handlefetch();
  };

  return (
    <div>
      {/* http://localhost:3000/todoList */}
      <h1>Groccery List</h1>

      <input onChange={handleinput} placeholder="Enter u r Groccery product" />

      <button onClick={handlepost}>Submit</button>

      {grocerydata.map((da, i) => (
        <div key={i}>
          <h2>
            {" "}
            {i + 1}. {da.grocery}
          </h2>

          <span onClick={() => handleedit(i)}>
            <FaEdit />
          </span>

          <span onClick={() => handledelete(da.id)}>
            <MdDelete />
          </span>
        </div>
      ))}
    </div>
  );
}
