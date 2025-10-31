import Link from "next/link";
import React from "react";

const Welcome = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14 text-center md:text-left">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to <span className="text-[#2d1070]">TyrePro</span>
        </h1>
        <h2 className="text-lg md:text-2xl text-gray-700 mb-8">
          Your Trusted Destination for Quality Tires and Automotive Services
        </h2>

        {/* Content */}
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p>
            Welcome to TyrePro, your trusted destination for top-quality tires
            and automotive services. At TyrePro, we prioritize your safety and
            satisfaction above all else. With our commitment to excellence and
            years of expertise in the industry, we&apos;re dedicated to providing you
            with premium tires and professional services tailored to meet your
            vehicle&apos;s needs. From tire installation and balancing to wheel
            alignments and beyond, our skilled technicians are here to ensure
            that your vehicle performs at its best and keeps you safe on the
            road.
          </p>
          <p>
            At TyrePro, we understand the importance of maintaining your
            vehicle&apos;s health and performance. That&apos;s why we offer a
            comprehensive range of automotive services to address all your
            needs. Whether it&apos;s routine maintenance or specialized repairs, you
            can trust our team to deliver reliable solutions and exceptional
            results. Experience the TyrePro difference today and enjoy peace of
            mind knowing that your vehicle is in good hands.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-10 flex justify-center md:justify-start gap-4">
          <Link href="/services">
          <button className="bg-[#2d1070] text-white px-6 py-3 rounded-xl shadow hover:bg-[#46228a] transition cursor-pointer">
            Explore Services
          </button>
          </Link>

          <Link href="/contact">
          <button className="border border-[#2d1070] text-[#2d1070] px-6 py-3 rounded-xl hover:bg-blue-50 transition cursor-pointer">
            Contact Us
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
