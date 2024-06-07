import Image from "next/image";
import React from "react";
import { Container } from "..";

const Download = () => {
  return (
    <article>
      <div className="w-full max-w-7xl mx-auto bg-gradient-to-br from-genesis-red via-black to-genesis-red py-5 md:py-10 my-20 px-5 md:px-20 lg:px-7">
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">
          <div className="text-white">
            <p className="text-2xl font-semibold mb-5">Download our App</p>
            <h3 className="text-3xl font-extrabold">
              WE&apos;LL BRING YOUR FOOD TO YOU
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-5">
            <div className="h-14 w-40 bg-black rounded-lg relative">
              <Image
                src="/images/google.avif"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
            <div className="h-14 w-40 bg-black rounded-lg relative">
              <Image
                src="/images/apple.avif"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Download;
