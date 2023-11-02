import React, { useEffect, useState } from "react";
import axios from "../../util/api";

import MyTable from "../../components/layout/mypage/MyTable";
import "./MyProceeds.css";

const MyProceeds = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/user/myproceeds").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="myProceeds">
      <MyTable data={data} />
    </div>
  );
};

export default MyProceeds;
