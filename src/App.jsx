import React, { Suspense, useState } from "react";
import "./App.css"
import CountComp from "./Components/CountComp";
import SubName from "./Components/SubName";
import NameChange from "./Components/NameChange";
import ListRender from "./Components/ListRender";
import ApiCall from "./Components/ApiCall";
import ApiCallWithEffect from "./Components/ApiCallWithEffect";
import InputComp from "./Components/InputComp";
import BdProject from "./Components/BdProject";
import ExtraHooks from "./Components/ExtraHooks";
import HomeComp from "./Components/Pages/HomeComp";
import ProductsComp from "./Components/Pages/ProductsComp";
import AboutComp from "./Components/Pages/AboutComp";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ReducerCounter from "./Components/ReducerCounter";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import ProductCompi from "./Components/ProductCompi";

const MyProductComp = React.lazy(()=> import("./Components/ProductCompi"))

function App() {
  const [islog, setislog] = useState(false);

  // const [Comp,setComp]= useState(null)


  // const dynamicimport  = async () =>{
  //   let LoadedComponent =  await import("./Components/GrocceryListComp")

  //   setComp(()=>LoadedComponent.default)


  // }





  const handlelogout = () => {
    setislog(true);
  };
  return (
    <>
      {/* <h1>Arun</h1> */}

      {/* <CountComp/> */}

      {/* <SubName/> */}

      {/* <NameChange/> */}

      {/* <ListRender/> */}

      {/* <ApiCall/> */}

      {/* <ApiCallWithEffect age={26} name={"Arun"} /> */}

      {/* <InputComp/> */}

      {/* <BdProject/> */}
      {/* <ExtraHooks/> */}

{/*       
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>

      <Link to="/about">About</Link> */}

      {/* <Routes>
        <Route path="/" element={<HomeComp />} />

        <Route path="/product" element={<ProductsComp />} />

        <Route path="/about" element={<AboutComp />} />
      </Routes> */}




{/* <ReducerCounter/> */}

{/* <ProductsComp/>

{Comp ? 
<Comp/>
:""
} */}

{/* <button onClick={dynamicimport}>Todo List</button> */}

{/* <Suspense fallback={<span class="loader">ss</span>}> */}

{/* <MyProductComp/> */}
{/* </Suspense> */}

<ProductCompi/>


    </>
  );
}

export default App;
