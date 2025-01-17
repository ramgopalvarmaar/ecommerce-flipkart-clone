import React from "react";
import { BiRupee } from "react-icons/bi";

/**
 * @author
 * @function Price
 **/

const Price = (props) => {
  return (
    <div
      style={{
        fontWeight: "bold",
        margin: "5px 0",
      }}
    >
      <BiRupee />
      {props.value}
    </div>
  );
};

export default Price;
