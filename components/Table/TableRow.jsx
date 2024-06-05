"use client";

import { ChangeProductQuantity, DeleteProductFromCart } from "@/redux/Slices/navSlice";
import Image from "next/image";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const TableRow = ({ name, pic, price, totalPrice, quantity, index }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (name) => {
    dispatch(DeleteProductFromCart(name));
  };

  const handleProductQuantity = ({ name, ability }) => {
    dispatch(ChangeProductQuantity({ name, ability }));
  };

  return (
    <motion.tr
      className="border-solid border-t"
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
    >
      <td className="px-7 py-5">
        <div className="flex items-center gap-5">
          <div className="relative w-28 h-20 flex-1">
            <Image
              src={pic}
              alt={name}
              fill
              className="object-cover object-center rounded-md"
            />
          </div>
          <button
            className="text-red-500 font-semibold"
            onClick={() => handleDeleteItem(name)}
          >
            X
          </button>
          <span className="text-base md:text-lg flex-1">{name}</span>
        </div>
      </td>
      <td className="px-7 py-5 text-base md:text-lg">
        <div>₦{price.toLocaleString()}.00</div>
      </td>
      <td className="px-7 py-5 text-base md:text-lg ">
        <div className="">
          <button
            onClick={() => handleProductQuantity({ name, ability: "decrease" })}
          >
            -
          </button>
          <span className="mx-3">{quantity}</span>
          <button
            onClick={() => handleProductQuantity({ name, ability: "increase" })}
          >
            +
          </button>
        </div>
      </td>
      <td className="px-7 py-5 text-base md:text-lg">
        ₦{totalPrice.toLocaleString()}.00
      </td>
    </motion.tr>
  );
};

export default TableRow;
