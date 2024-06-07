"use client";

import { IoLocationSharp } from "react-icons/io5";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { resturantsData } from "@/_data";
import { Suspense, useState } from "react";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const RestaurantContainer = () => {
  const [search, setSearch] = useState("");

  const data = resturantsData.filter((restaurant) =>
    restaurant.location?.toLocaleLowerCase().includes(search)
  );

  
  return (
    <section className="px-3 lg:px-8">
      <div className="bg-black/80 p-10 rounded-xl">
        <h1 className="text-white font-semibold tracking-wider">CHOOSE CITY</h1>
        <input
          name="name"
          type="text"
          className="w-full outline-none border-none text-lg rounded-md px-2 py-2 my-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-10 lg:px-0">
        {data.map((resturant, index) => (
          <motion.div
            className="bg-red-100 h-36 rounded-xl flex flex-col justify-center px-5 shadow"
            key={resturant.id}
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
            <div>
              <div className="flex gap-3 items-center mb-2">
                <div>
                  <SiHomeassistantcommunitystore className=" text-genesis-red text-xl" />
                </div>
                <h2 className="font-semibold text-black tracking-widest">
                  {resturant.city}
                </h2>
              </div>
              <div className="flex gap-3 items-center">
                <div>
                  <IoLocationSharp className="text-gray-300 text-xl" />
                </div>
                <p className=" text-black font-semibold tracking-wider">
                  {resturant.address}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default RestaurantContainer;
