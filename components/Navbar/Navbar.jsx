"use client";
import React, { useEffect, useState } from "react";
import DesktopNavBar from "./desktop/DesktopNavBar";
import MobileNavBar from "./mobile/MobileNavBar";
import Cart from "../Cart/Cart";

const Navbar = () => {
  const [ShowNavBarDynamicClassNames, setShowNavBarDynamicClassNames] =
    useState(false);
  const [windowHeight, setWindowHeight] = useState(0);
  const [showCart, setShowCart] = useState(false)

  const handleShowCart = () => {
    setShowCart(!showCart)
  }

  useEffect(() => {
    const navColor = () => {
      windowHeight >= 200
        ? setShowNavBarDynamicClassNames(true)
        : windowHeight >= 190
        ? setShowNavBarDynamicClassNames(false)
        : setShowNavBarDynamicClassNames(false);
    };

    window.addEventListener("scroll", () => {
      setWindowHeight(window.scrollY);
      navColor();
    });
    return () => window.removeEventListener("scroll", () => {});
  }, [windowHeight]);
  return (
    <nav
      className={`w-full ${
        ShowNavBarDynamicClassNames && "bg-white fixed ease-in-out"
      }  right-0 left-0 lg:top-0 z-10 duration-1000 ease-in-out py-5`}
    >
      <DesktopNavBar handleShowCart={handleShowCart} />
      <MobileNavBar handleShowCart={handleShowCart} />
      <Cart handleShowCart={handleShowCart} showCart={showCart} />
    </nav>
  );
};

export default Navbar;
