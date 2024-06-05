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

  const Fallback = () => {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-10 lg:px-0">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div
            className="bg-genesis-red/50 h-36 rounded-xl flex flex-col justify-center px-5"
            key={item}
          >
            <div>
              <div className="flex gap-3 items-center mb-2">
                <div className=" w-[50%] lg:w-[10%]  bg-genesis-red/10 py-4 rounded-md"></div>
                <div className=" w-[50%] lg:w-[100%] bg-genesis-red/10 py-2 rounded-md"></div>
              </div>
              <div className="flex gap-3 items-center">
                <div className=" w-[50%] lg:w-[10%]  bg-genesis-red/10 py-4 rounded-md"></div>
                <div className=" w-[50%] lg:w-[100%] bg-genesis-red/10 py-2 rounded-md"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <section className="px-3 lg:px-8">
      <div className="bg-genesis-red/50 p-10 rounded-xl">
        <h2>CHOOSE CITY</h2>
        <input
          name="name"
          type="text"
          className="w-full outline-none border-none text-lg rounded-md px-2 py-2 my-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <Suspense fallback={Fallback}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-10 lg:px-0">
          {data.map((resturant, index) => (
            <motion.div
              className="bg-genesis-red/50 h-36 rounded-xl flex flex-col justify-center px-5"
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
                    <SiHomeassistantcommunitystore className="text-red-500 text-xl" />
                  </div>
                  <h4 className="font-semibold">{resturant.city}</h4>
                </div>
                <div className="flex gap-3 items-center">
                  <div>
                    <IoLocationSharp className="text-gray-300 text-xl" />
                  </div>
                  <p className="">{resturant.address}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default RestaurantContainer;
