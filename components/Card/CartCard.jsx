"use client";

import { DeleteProductFromCart } from "@/Slices/navSlice";
import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";


const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const CartCard = ({ name, pic, quantity, totalPrice,index }) => {
  const dispatch = useDispatch();

  const handleDeleteItem = (name) => {
    dispatch(DeleteProductFromCart(name));
  };

  return (
    <motion.div
      className="flex items-center justify-between gap-2"
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
      <div className="relative h-20 w-14 rounded-md flex-1">
        <Image
          src={pic}
          alt={name}
          fill
          placeholder="blur"
          blurDataURL={pic}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center rounded-md"
        />
      </div>
      <div className="flex-1">
        <p className=" font-normal">
          {quantity} - {name}
        </p>
        <p>₦{totalPrice.toLocaleString()}.00</p>
      </div>
      <div
        className="bg-white shadow-md rounded-full p-1 text-[#FD0000]"
        onClick={() => handleDeleteItem(name)}
      >
        <AiOutlineClose size={14} />
      </div>
    </motion.div>
  );
};

export default CartCard;
