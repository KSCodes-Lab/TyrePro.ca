import React from 'react';
import Image from 'next/image';
import ShopImg from "@/assets/banner_bg.jpg";
import Link from 'next/link';

const InfoSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
            Quality New and Used Tires in{" "}
            <span className="text-[#2d1070]">Stoney Creek</span>, Near Hamilton
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            At TyrePro, we offer quality new and used tires, branded tires, and
            automotive services in Stoney Creek, conveniently located near
            Hamilton. Our selection includes top-quality tires for all vehicles,
            along with expert services such as tire installation, balancing,
            wheel alignments, and more. Visit us today to experience our
            exceptional service firsthand.
          </p>

          <Link href="/services">
          <button className="bg-[#2d1070] text-white px-6 py-3 rounded-xl shadow hover:bg-[#46228a] transition cursor-pointer">
            Learn More
          </button>
          </Link>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src={ShopImg}
            alt="Quality Tires at TyrePro"
            className="rounded-2xl shadow-lg object-cover w-full h-[300px] md:h-[400px]"
          />
        </div>
      </div>
    </section>
  )
}

export default InfoSection
