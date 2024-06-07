import { routes as NavBarData } from "@/_data";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoPersonOutline } from "react-icons/io5";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import logo from "@/public/images/logo.avif";

const MobileNavBar = ({ handleShowCart }) => {
  const [showNavMenu, setShowNavMenu] = useState(false);
  const path = usePathname();
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  const handleShowNavMenu = () => {
    setShowNavMenu(!showNavMenu);
  };

  return (
    <div className="lg:hidden px-3 w-full max-w-2xl mx-auto">
      <div className="flex items-center justify-between">
        <div className="w-28 h-16 relative">
          <Image
            src={logo}
            alt="logo"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, "
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-center gap-3">
          <div className="p-4 bg-white shadow-sm rounded-full">
            <IoPersonOutline size={17} />
          </div>
          <div
            className="p-4 bg-white shadow-sm rounded-full relative"
            onClick={handleShowCart}
          >
            <RiShoppingBasket2Line size={17} />
            {cartQuantity > 0 && (
              <div className="absolute font-semibold left-8 right-0 -top-2 bottom-0 text-[11px] bg-[#FD0000] h-fit w-fit py-1 px-2 rounded-full text-white">
                <p>{cartQuantity}</p>
              </div>
            )}
          </div>
          <div
            className="p-4 bg-white shadow-sm rounded-full"
            onClick={handleShowNavMenu}
          >
            <AiOutlineMenu size={17} />
          </div>
        </div>
      </div>
      <div
        className={`right-0 top-0 z-20 flex items-center justify-end fixed duration-1000`}
      >
        <div
          className={`h-screen backdrop-blur-sm  bg-black/50 duration-[1500ms]  ${
            showNavMenu ? "flex-1 w-screen" : "w-0"
          }`}
          onClick={handleShowNavMenu}
        />
        <div
          className={` bg-red-100 h-screen w-72 md:w-80 duration-[1500ms]  ${
            !showNavMenu && "-mr-96"
          }`}
        >
          <div className="p-3 bg-black w-fit mb-5" onClick={handleShowNavMenu}>
            <AiOutlineClose size={16} className="text-white" />
          </div>
          <ul className="flex flex-col justify-center gap-3 font-thin px-6">
            <li
              className={`${
                path === "/" && "text-[#000000] font-black tracking-widest"
              } border-b border-black pb-2 font-semibold tracking-wider`}
              onClick={handleShowNavMenu}
            >
              <Link href="/">HOME</Link>
            </li>
            {NavBarData.map((item) => (
              <li
                key={item.id}
                className={`${
                  path === item.page &&
                  " text-[#000000] font-black tracking-widest"
                } border-b border-black pb-2 font-semibold tracking-wider`}
                onClick={handleShowNavMenu}
              >
                <Link href={item.page}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
