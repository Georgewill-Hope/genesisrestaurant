"use client";

import React from "react";
import TableRow from "./TableRow";
import { useSelector } from "react-redux";

const Table = () => {
    const data = useSelector((state) => state.cart.totalCartItems);

  return (
    <div className="overflow-x-auto bg-white rounded-lg px-7 mx-3 md:mx-14 shadow-md">
      <table className="w-full">
        <thead>
          <tr className="">
            <th className="px-7 py-5 text-start">PRODUCT</th>
            <th className="px-7 py-5 text-start">PRICE</th>
            <th className="px-7 py-5 text-start">QUANTITY</th>
            <th className="px-7 py-5 text-start">SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={item.name} {...item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
