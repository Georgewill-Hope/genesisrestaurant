"use client";

import Link from "next/link";
import Table from "../Table/Table";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const cartItemsTotal = useSelector((state) => state.cart.cartItemsTotalPrice);
  const cartItems = useSelector((state) => state.cart.totalCartItems);
  return (
    <div>
      {cartItems.length === 0 && (
        <div className="min-h-[50vh] w-full max-w-6xl mx-auto flex flex-col gap-10 items-center justify-center">
          <p className="text-xl md:text-2xl lg:text-4xl">You cart is empty!</p>
          <Link href="/product">
            <button className="animate-bounce px-5 py-2 bg-genesis-red rounded-md outline-none border-none text-lg lg:text-xl text-white">
              Get a Meal
            </button>
          </Link>
        </div>
      )}

      {cartItems.length > 0 && (
        <div className="w-full max-w-6xl mx-auto min-h-[60vh] py-16">
          <Table />
          <div className="w-[93%] lg:w-96 px-8 py-14 mx-auto lg:mx-0 my-10 rounded-md lg:ml-auto  flex flex-col justify-center items-center gap-6 bg-white">
            <h2 className="font-bold text-xl">Cart Totals</h2>
            <div className="w-full flex justify-between items-center bg-slate-300/20 p-5 rounded-xl font-semibold text-slate-600/60">
              <span>Subtotal </span>
              <span>₦{cartItemsTotal.toLocaleString()}.00</span>
            </div>
            <div className="w-full flex justify-between items-center bg-slate-300/20 p-5 rounded-xl font-bold">
              <span>Total </span>
              <span>₦{cartItemsTotal.toLocaleString()}.00</span>
            </div>
            <button className="bg-genesis-red px-5 py-3 rounded-xl text-white font-semibold">
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartContainer;
