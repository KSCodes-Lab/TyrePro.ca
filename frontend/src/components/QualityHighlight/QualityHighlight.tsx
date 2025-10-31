import React from 'react';
import QualityHighlightImg from "@/assets/mechanic.jpg";
import Image from 'next/image';

const QualityHighlight = () => {
  return (
      <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14 space-y-20">
        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Left */}
          <div className="flex justify-center md:justify-start">
            <Image
              src={QualityHighlightImg}
              alt="Quality Meets Convenience"
              className="rounded-xl border-4 shadow-lg object-cover w-full h-[300px] md:h-[400px]"
            />
          </div>

          {/* Content Right */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#2d1070] mb-6">
              Where Quality Meets Convenience
            </h2>
            <p className=" leading-relaxed">
              At <em className='text-[#2d1070]'>TyrePro</em>, we pride ourselves on offering a seamless blend
              of <strong className='text-[#2d1070]'>quality</strong> and <strong className='text-[#2d1070]'>convenience</strong> to our valued
              customers. With a focus on delivering{" "}
              <strong className='text-[#2d1070]'>top-notch products and services</strong>, we strive to exceed
              expectations while providing an effortless and hassle-free
              experience. From our expertly curated selection of tires to our
              comprehensive <strong className='text-[#2d1070]'>automotive services</strong>, we ensure that every
              aspect of your visit is tailored to meet your needs with utmost
              convenience. Experience the perfect balance of{" "}
              <strong className='text-[#2d1070]'>quality</strong> and <strong className='text-[#2d1070]'>convenience</strong> at{" "}
              <em>TyrePro</em>, where your satisfaction is our top priority.
            </p>
          </div>
        </div>
        </div>
        </section>

        
  )
}

export default QualityHighlight
