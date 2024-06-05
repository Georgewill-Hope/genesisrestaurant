"use client";
import { useState } from "react";
import { Button } from "@/components";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "@/Slices/navSlice";

const ProductPageCard = ({ name, price, pic }) => {
    const [productQuantity, setProductQuantity] = useState(0);
    const dispatch = useDispatch();

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
    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
      
        <div className="relative h-72 w-[100%] lg:h-[400px] lg:w-[400px]">
          <Image
            src={pic}
            alt={name}
            fill
            placeholder="blur"
            blurDataURL={pic}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover object-center rounded-lg"
          />
        </div>
      
      <div className="w-full md:w-fit">
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2 md:mb-4">{name}</h1>
          <p className="text-xl lg:text-2xl mb-1 font-bold">
            ₦{price.toLocaleString()}.00
          </p>

          <div className="flex items-center gap-1 md:gap-2 lg:gap-5">
            <div className="bg-genesis-red/30 font-bold w-max py-2 lg:py-3 px-3 lg:px-6 rounded-lg flex items-center justify-center gap-2 md:gap-7 shadow">
              <span className="text-sm md:text-base lg:text-lg">QUANTITY</span>
              <div className="md:text-lg lg:text-xl flex items-center  justify-center md:gap-2">
                <button onClick={() => handleProductQuantity("decrease")}>
                  -
                </button>
                <div className="w-7 text-center">{productQuantity}</div>
                <button onClick={() => handleProductQuantity("increase")}>
                  +
                </button>
              </div>
            </div>
            <div>
              <Button
                text="ADD TO CART"
                ability={() =>
                  handleAddToCart({
                    name,
                    pic,
                    price,
                    quantity: productQuantity,
                    totalPrice: 0,
                  })
                }
              />
            </div>
          </div>
          <p className="mt-2 font-semibold">Share this product</p>
        </div>

        <div className="flex items-center gap-3 mt-1 lg:mt-2">
          <div className="w-10 h-10 bg-[#232228] rounded-lg flex items-center justify-center group cursor-pointer hover:bg-[#FD0000] transition duration-500">
            <FaFacebookF
              size={15}
              className="text-gray-400 group-hover:text-white transition duration-500"
            />
          </div>
          <div className="w-10 h-10 bg-[#232228] rounded-lg flex items-center justify-center group cursor-pointer hover:bg-[#FD0000] transition duration-500">
            <FaInstagram
              size={15}
              className="text-gray-400 group-hover:text-white transition duration-500"
            />
          </div>
          <div className="w-10 h-10 bg-[#232228] rounded-lg flex items-center justify-center group cursor-pointer hover:bg-[#FD0000] transition duration-500">
            <FaWhatsapp
              size={15}
              className="text-gray-400 group-hover:text-white transition duration-500"
            />
          </div>
          <div className="w-10 h-10 bg-[#232228] rounded-lg flex items-center justify-center group cursor-pointer hover:bg-[#FD0000] transition duration-500">
            <FaXTwitter
              size={15}
              className="text-gray-400 group-hover:text-white transition duration-500"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPageCard;
