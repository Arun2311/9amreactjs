import React, { useEffect, useState } from "react";

function ApiCall() {
  const [apidata, setapidata] = useState([]);

  const [count, setcount] = useState(0);

  const handlecount = () => {
    setcount(count + 1);
  };

  useEffect(() => {
    handlefetch();
  }, [count]);

  const handlefetch = async () => {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      setapidata(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log("finally");
    }
  };

  return (
    <div>
      <h1>Api Call </h1>

      <button onClick={handlecount}>Add {count} </button>
      {/* <button onClick={handlefetch}>Click</button> */}

      {apidata.map((da) => (
        <div key={da.id}>
          <h1>{da.title}</h1>

          <h1>{da.price}</h1>

          <img height={200} width={200} src={da.image} />
        </div>
      ))}
    </div>
  );
}

export default ApiCall;
