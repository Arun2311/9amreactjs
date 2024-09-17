import React, { useReducer, useState } from "react";



export default function ReducerCounter() {
  //   const [count, setcount] = useState(0);
  //   const Handleadd = () => {
  //     try {
  //       setcount(count + 1);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };

  function arith(state, action) {
    if (action.type == "increment") {
      return { count: state.count + 1 };
    }
  
    if (action.type == "decrement") {
      return { count: state.count - 1 };
    }
  
    if (action.type == "reset") {
      return { count: 0 };
    }
  }

  const [state, dispatch] = useReducer(arith, { count: 0 });

  const Handleadd = () => {
    dispatch({ type: "increment" });
  };

  const handlesub = () => {
    dispatch({ type: "decrement" });
  };

  const handlereset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <div>
      <h1>Count - {state.count}</h1>

      <button onClick={Handleadd}>Addd</button>

      <button onClick={handlesub}>sub</button>

      <button onClick={handlereset}>reset</button>
    </div>
  );
}
