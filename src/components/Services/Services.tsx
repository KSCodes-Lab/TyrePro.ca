import React from "react";
import Image from "next/image";
// Import your images
import service1 from "@/assets/banner_bg.jpg"; // Tire Sales and Installation
import service2 from "@/assets/banner_bg.jpg"; // Tire Services
import service3 from "@/assets/banner_bg.jpg"; // Automotive Repair Services
import service4 from "@/assets/banner_bg.jpg"; // Maintenance Services
import service5 from "@/assets/banner_bg.jpg"; // Specialty Services
import Link from "next/link";

const services = [
  {
    title: "Tire Sales and Installation",
    slug: "/services/tire-sales-installation",
    image: service1,
  },
  {
    title: "Tire Services",
    slug: "/services/tire-services",
    image: service2,
  },
  {
    title: "Automotive Repair Services",
     slug: "/services/automotive-repair",
    image: service3,
  },
  {
    title: "Maintenance Services",
     slug: "/services/maintenance-services",
    image: service4,
  },
  {
    title: "Specialty Services",
    slug: "/services/specialty-services",
    image: service5,
  },
];

const Services = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="container mx-auto px-8 lg:px-14">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
          {/* Our <span className="text-[#2d1070]">Services</span> */}
          Expert Automotive <span className="text-[#2d1070]">Services</span> at
          Tyre Pro
        </h2>
        <p>
          Experience top-quality automotive services at Tyre Pro. Our dedicated
          team is committed to keeping your vehicle in optimal condition,
          whether it&apos;s routine maintenance or major repairs. From oil changes to
          brake inspections, we offer comprehensive solutions to keep you safe
          on the road.
        </p>
        <p>
          Ready to give your car the care it deserves? Contact us today to
          schedule an appointment or learn more about our services. We&apos;re here
          to make automotive maintenance easy and stress-free, so you can drive
          with confidence.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              {/* Service Image */}
              <Image
                src={service.image}
                alt={service.title}
                className="h-56 w-full object-cover"
              />

              {/* Service Content */}
              <div className="p-6 flex flex-col flex-grow text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <Link href={service.slug}>
                <button className="mt-auto bg-[#2d1070] text-white px-5 py-2 rounded-lg shadow hover:bg-[#46228a] transition cursor-pointer">
                  Learn More
                </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
