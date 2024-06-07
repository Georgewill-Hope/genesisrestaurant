"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";
import { routes as NavBarData } from "@/_data";
import { useSelector } from "react-redux";
import CartCard from "../Card/CartCard";

const Cart = ({ showCart, handleShowCart }) => {
  const path = usePathname();

  const data = useSelector((state) => state.cart.totalCartItems);
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);
  const CartItemsTotalPrice = useSelector(
    (state) => state.cart.cartItemsTotalPrice
  );

  return (
    <div className={`px-3 mx-auto`}>
      <div
        className={` right-0 top-0 z-20 flex items-center justify-end fixed duration-1000`}
      >
        <div
          className={`h-screen backdrop-blur-sm  bg-black/50 duration-[1500ms]   ${
            showCart ? "flex-1 w-screen" : "w-0"
          }`}
          onClick={handleShowCart}
        />
        <div
          className={` bg-red-100 h-screen w-72 md:w-80 duration-[1500ms]  overflow-scroll overflow-x-hidden ${
            !showCart && "-mr-96"
          }`}
        >
          <div
            className="p-3 bg-black w-fit mb-5 cursor-pointer"
            onClick={handleShowCart}
          >
            <AiOutlineClose size={16} className="text-white" />
          </div>

          <div className="px-6">
            <h2 className="border-b border-black pb-3 font-bold text-xl">
              CART ITEMS - {cartQuantity}
            </h2>
            {data.length === 0 && (
              <div className="flex flex-col gap-7 items-center justify-center py-8">
                <p className="text-xl">You cart is empty!</p>
                <Link href="/product">
                  <button className="animate-bounce bg-gradient-to-tr tracking-wider from-genesis-red via-black to-genesis-red text-white text-base font-bold px-4 py-2 rounded-lg outline-none">
                    Get a Meal
                  </button>
                </Link>
              </div>
            )}
            <div className="flex flex-col gap-5 py-5">
              {data?.map((item, index) => (
                <CartCard key={item.name} {...item} index={index} />
              ))}
            </div>
            <div className="border-t border-b py-2 flex items-center gap-4">
              <span className="font-semibold">SUB TOTAL:</span>
              <span>₦{CartItemsTotalPrice.toLocaleString()}.00</span>
            </div>

            <div
              className="flex gap-3 items-center justify-center mt-5"
              onClick={handleShowCart}
            >
              <Link href="/cart">
                <button className="bg-gradient-to-tr from-genesis-red via-black to-genesis-red text-sm font-semibold px-4 py-2 rounded-lg text-white hover:bg-black duration-500 outline-none">
                  VIEW CART
                </button>
              </Link>
              <button className="bg-gradient-to-tr from-genesis-red via-black to-genesis-red text-sm font-semibold px-4 py-2 rounded-lg text-white hover:bg-black duration-500 outline-none">
                CHECKOUT
              </button>
            </div>
          </div>
          <ul className="flex flex-col justify-center font-thin px-6 py-7">
            <li>
              <Link
                href="/"
                className={`${
                  path === "/" && "text-[#000000] font-black tracking-widest"
                } border-b border-black pb-2 font-semibold hover:ps-5 duration-500 tracking-wider hover:text-genesis-red flex`}
                onClick={handleShowCart}
              >
                HOME
              </Link>
            </li>
            {NavBarData.map((item) => (
              <li key={item.id} onClick={handleShowCart}>
                <Link
                  className={`border-b border-black py-2 font-semibold tracking-wider hover:ps-5 duration-500 hover:text-[#FD0000] flex ${
                    item.page === path &&
                    " text-[#000000] font-black tracking-widest"
                  }`}
                  href={item.page}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cart;
