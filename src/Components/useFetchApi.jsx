import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [data, setdata] = useState([]);

  const hanldefetch = async () => {
    let res = await axios.get(url);
    setdata(res.data);
  };

  useEffect(() => {
    hanldefetch();
  }, [url]);

  return {data};
};


export default useFetchApi