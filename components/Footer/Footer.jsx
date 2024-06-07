import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto py-10 px-3 lg:px-7">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-5 pb-20">
        <div className="flex flex-col gap-6">
          <div className="w-44 h-20 relative">
            <Image
              src="/images/logo.webp"
              alt="logo"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain"
            />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-20 w-20 rounded-lg bg-[#FD0000]"></div>
            <div>
              <h4 className="font-bold">OPENING HOURS</h4>
              <ul>
                <li>Mon - Sat (8:30AM - 5:30PM)</li>
                <li>Sundays - (11:00AM - 5:30PM)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h3 className="font-bold text-xl">CONTACT US</h3>
          <p className="font-bold">
            LAGOS | ABUJA | ENUGU | WARRI
            <br />
            PORT HARCOURT | OWERRI
          </p>
          <p>MAIL: georgewillhopeolilenya@gmail.com</p>
          <p>PHONE: +2348051073722, +2349******570</p>
        </div>
        <div>
          <h3 className="font-bold text-xl">HELP & SUPPORT</h3>
          <ul className="flex flex-col gap-4 mt-3">
            <li>About Us</li>

            <li>Find A Store</li>

            <li>Share Your Feedback</li>

            <li>Outdoor Catering</li>

            <li>News & BLog</li>

            <li>Admin</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  lg:gap-5 border-t border-black pt-8">
        <p className="text-black">Terms of Service | Privacy Policy</p>
        <p className="text-black">
          © Copyright 2024 Georgewill Hope All Rights Reserved
        </p>
        <div className="flex items-center lg:justify-center gap-3">
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
    </footer>
  );
};

export default Footer;
