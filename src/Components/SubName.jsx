import React, { useCallback, useMemo } from "react";

function SubName() {


  const expensiveopertion = () =>{
    console.log("time taking process");
    
  }

 /* `useMemo` is a React hook that is used for memoization. It helps to optimize
  // performance by memoizing the result of a function so that it is only recomputed when
  // its dependencies change. In the provided code snippet, `useMemo` is being used to
  // memoize the result of the `expensiveoperation` function so that it is only executed
  // once when the component mounts. */

  // let memo = // useMemo(()=>{
  //   expensiveopertion()
  // },[])


  /* `useCallback` is a React hook that is used to memoize functions, similar to how `useMemo` is used
  to memoize values. When you wrap a function with `useCallback`, it will return a memoized version
  of the function that only changes if one of the dependencies has changed. This can be useful for
  optimizing performance in scenarios where you need to pass callbacks to child components that rely
  on reference equality to prevent unnecessary re-renders. */
  // useCallback(()=>{
  //   expensiveopertion()
  // },[])



  return (
    <>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque
        explicabo, modi illum hic quae ratione unde ullam. Culpa eius tempora, a
        cupiditate ducimus doloremque assumenda ullam, molestiae dolores illo
        quibusdam.
      </p>
    </>
  );
}

export default/* `React.memo` is a higher-order component provided by React that is used for optimizing
functional components by preventing unnecessary re-renders. When you wrap a functional
component with `React.memo`, it memoizes the component based on its props. This means
that the component will only re-render if its props have changed. If the props remain
the same, React will reuse the memoized version of the component, thus improving
performance by avoiding unnecessary renders. */
 React.memo(SubName);
