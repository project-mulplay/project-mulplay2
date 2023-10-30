import React from "react";
import ProdTd from "./ProdTd";

const ProdTr = ({ info, handleRemove }) => {
  return (
    <tbody>
      {info.map((item) => {
        return (
          <ProdTd key={item.prod_no} item={item} handleRemove={handleRemove} />
        );
      })}
    </tbody>
  );
};

export default ProdTr;
