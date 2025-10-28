"use client";

import React, { useState } from "react";
import BannerBgImg from "@/assets/banner_bg.jpg";
import { motion } from "motion/react";
import { useRouter } from "next/navigation"; 

const Banner = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"size">("size");
  const [sizeInput, setSizeInput] = useState<string>(""); 
  // const [activeTab, setActiveTab] = useState<"size" | "vehicle">("size");
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const size = sizeInput.trim();
    if (!size) return;
    // navigate to inventory page and pass size as query param
    router.push(`/inventary?size=${encodeURIComponent(size)}`);
  };

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center px-6 md:px-12 lg:px-20"
      style={{ backgroundImage: `url(${BannerBgImg.src})` }} // replace with your image
    >
      {/* Overlay (optional for darkening background) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative container mx-auto px-8 lg:px-14 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center z-10">
        {/* Left Side */}
        <motion.div
          className="text-white space-y-6"
         
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.4, ease: "easeOut", delay: 0.15 }}
          
      // transition={{ duration, delay, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
           Find the perfect tires for your ride.
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-lg">
            Certified customer is the best business strategy of all.
          </p>
        </motion.div>

        {/* Right Side */}
        <motion.div className="flex justify-end" 
         initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{duration: 0.4, ease: "easeOut", delay: 0.15 }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 text-center">
              Search Tires
            </h2>
            {/* <p className="text-gray-600 text-center mb-6">
              Sign up today and start your journey with us.
            </p> */}
            <div className="flex justify-center items-center py-2 gap-4">
              <button
                onClick={() => setActiveTab("size")}
                className={`px-4 py-1 rounded-lg cursor-pointer border transition ${
                  activeTab === "size"
                    ? "bg-[#2d1070] text-white border-[#2d1070]"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                By Size
              </button>
              {/* <button
                onClick={() => setActiveTab("vehicle")}
                className={`px-4 py-1 rounded-lg cursor-pointer border transition ${
                  activeTab === "vehicle"
                    ? "bg-[#2d1070] text-white border-[#2d1070]"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                By Vehicle
              </button> */}
            </div>
            
            {/* <form className="space-y-4 mt-4">
              {activeTab === "size" && (
                <>
                  <p className="text-gray-600 text-center mb-4">
                    Search tires by entering the size details.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Size"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d1070]"
                  />
                </>
              )} */}

              {/* {activeTab === "vehicle" && (
                <>
                  <p className="text-gray-600 text-center mb-4">
                    Search tires by entering your vehicle name.
                  </p>
                  <input
                    type="text"
                    placeholder="Enter Vehicle Name"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d1070]"
                  />
                </>
              )} */}

              {/* <button
                type="submit"
                className="w-full bg-[#2d1070] text-white py-2 rounded-lg font-medium hover:bg-[#46228a] transition cursor-pointer"
              >
                Submit
              </button>
            </form> */}

            <form className="space-y-4 mt-4" onSubmit={onSubmit}>
      {activeTab === "size" && (
        <>
          <p className="text-gray-600 text-center mb-4">
            Search tires by entering the size details.
          </p>
          <input
            type="text"
            placeholder="Enter Size"
            value={sizeInput}
            onChange={(e) => setSizeInput(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2d1070]"
          />
        </>
      )}

      <button
        type="submit"
        className="w-full bg-[#2d1070] text-white py-2 rounded-lg font-medium hover:bg-[#46228a] transition cursor-pointer"
      >
        Submit
      </button>
    </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
