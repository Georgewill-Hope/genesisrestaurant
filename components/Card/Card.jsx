"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "@/redux/Slices/navSlice";
import { toast } from "react-toastify";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};


const Card = ({ name, pic, price, index }) => {
  const dispatch = useDispatch();
  const [productQuantity, setProductQuantity] = useState(0);


  const handleProductQuantity = (value) => {
    if (value === "increase") {
      if (productQuantity + 1 === 11) {
        toast.error(`${productQuantity} ${name} at a time`);
      }
      if (productQuantity < 10) {
        setProductQuantity((prev) => prev + 1);
      }
    } else if (value === "decrease") {
      if (productQuantity > 0) {
        setProductQuantity((prev) => prev - 1);
      }
    }
  };

  const handleAddToCart = ({ name, pic, price, quantity, totalPrice }) => {
    const data = { name, pic, price, quantity, totalPrice };
    if (productQuantity === 0) return;
    dispatch(AddProductToCart(data));
    setProductQuantity(0);
  };


  return (
    <motion.div
      className="w-72 shadow-lg rounded-md"
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
      <div className="relative w-full h-52">
        <Image
          src={pic}
          alt={name}
          fill
          placeholder="blur"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
          className="object-cover object-center rounded-md"
        />
      </div>
      <div className="px-2 py-4 w-full">
        <Link href={`product/${name}`}>
          <h3 className="font-semibold text-2xl">{name}</h3>
        </Link>
        <p className="mb-4 font-medium">Price : ₦{price.toLocaleString()}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-1 font-bold bg-red-600 rounded-md hover:bg-red-600/80 duration-500 ease-in-out"
              onClick={() => handleProductQuantity("decrease")}
            >
              -
            </button>
            <div className="font-semibold w-9 text-center">
              {productQuantity}
            </div>
            <button
              className="px-4 py-1 font-bold bg-red-600 rounded-md hover:bg-red-600/80 duration-500 ease-in-out"
              onClick={() => handleProductQuantity("increase")}
            >
              +
            </button>
          </div>
          <button
            className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-md hover:bg-red-600/80 duration-500 ease-in-out outline-none border-none"
            onClick={() =>
              handleAddToCart({
                name,
                pic,
                price,
                quantity: productQuantity,
                totalPrice: 0,
              })
            }
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
