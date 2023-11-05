import React from "react";
import ProdTd from "./ProdTd";

const ProdTr = ({ info, setInfo }) => {
  const handleRemove = (prod_no) => {
    setInfo((info) => info.filter((infoItem) => infoItem.prod_no !== prod_no));
  };
  return (
    <tbody>
      {info.map((item) => {
        return (
          <ProdTd
            key={item.prod_no}
            item={item}
            setInfo={setInfo}
            handleRemove={handleRemove}
          />
        );
      })}
    </tbody>
  );
};

export default ProdTr;
