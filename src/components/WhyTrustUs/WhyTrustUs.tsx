import React from 'react';
import Image from 'next/image';
import WhyTrustUsImg from "@/assets/banner_bg.jpg";

const WhyTrustUs = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content Left */}
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl text-[#2d1070] font-extrabold mb-6">
              Experience Unmatched Service Excellence
            </h2>
            <p className="leading-relaxed">
              At <em className="text-[#2d1070]">TyrePro</em>, we set the standard for service excellence in the
              automotive industry. Our dedicated team goes above and beyond to
              deliver <strong className="text-[#2d1070]">unmatched quality and expertise</strong> at every step of
              your journey with us. From the moment you walk through our doors,
              you&apos;ll experience a level of{" "}
              <strong className="text-[#2d1070]">professionalism and care</strong> that is second to none.
              Whether you&apos;re seeking tire sales, installations, or comprehensive
              repairs, our commitment to excellence ensures that your experience
              with us is nothing short of exceptional. Trust <em className="text-[#2d1070]">TyrePro</em> for{" "}
              <strong className="text-[#2d1070]">unparalleled service excellence</strong> and discover a new
              standard of automotive care.
            </p>
          </div>

          {/* Image Right */}
          <div className="flex justify-center md:justify-end order-1 md:order-2">
            <Image
              src={WhyTrustUsImg}
              alt="Unmatched Service Excellence"
              className="rounded-xl border-4 shadow-lg object-cover w-full h-[300px] md:h-[400px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTrustUs;
