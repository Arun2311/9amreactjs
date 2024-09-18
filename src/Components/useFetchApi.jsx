import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [data, setdata] = useState([]);
  const [isloading, setisloading] = useState(false);
  const hanldefetch = async () => {

    setisloading(true)
    let res = await axios.get(url);
    setdata(res.data);
    setisloading(false)


  };

  useEffect(() => {
    hanldefetch();
  }, [url]);

  return {data,isloading};
};


export default useFetchApi