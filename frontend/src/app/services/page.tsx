"use client";

// app/services/page.tsx  (or pages/services/index.tsx)
import Link from "next/link";
import React, { JSX } from "react";

const services = [
  {
    slug: "tire-sales-installation",
    title: "Tire Sales and Installation",
    description:
      "Wide selection of quality tires with professional installation.",
  },
  {
    slug: "tire-services",
    title: "Tire Services",
    description: "Balancing, alignment, and puncture repair to keep you safe.",
  },
  {
    slug: "automotive-repair",
    title: "Automotive Repair Services",
    description:
      "Expert repair solutions for brakes, suspension, and more.",
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    description: "Oil changes, fluid checks, and routine maintenance.",
  },
  {
    slug: "specialty-services",
    title: "Specialty Services",
    description: "Custom solutions tailored to your vehicle&apos;s needs.",
  },
];

export default function ServicesPage(): JSX.Element {
  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-white py-12 md:py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto px-6 lg:px-14 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-[#2d1070]">
            Our Services
          </h1>
          <p className="max-w-3xl mx-auto text-gray-700 text-base sm:text-lg leading-relaxed">
            At TyrePro we offer a wide range of automotive services — from tire sales
            and installation to maintenance and specialty work. Each service is
            delivered by skilled technicians who prioritize safety, reliability and
            value. Click a service to learn more.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((svc) => (
              <article
                key={svc.slug}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition flex flex-col"
                aria-labelledby={`svc-${svc.slug}-title`}
              >
                {/* Optional icon / colored badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#2d1070] text-white flex items-center justify-center font-semibold">
                      {svc.title.split(" ").slice(0,2).map(s=>s[0]).join("")}
                    </div>
                    <h3
                      id={`svc-${svc.slug}-title`}
                      className="text-lg font-semibold text-gray-900"
                    >
                      {svc.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500">Service</span>
                </div>

                <p className="text-sm text-gray-600 mb-6 flex-grow">{svc.description}</p>

                <div className="mt-4 flex items-center gap-3">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-[#2d1070] text-white font-semibold hover:opacity-95"
                    aria-label={`Learn more about ${svc.title}`}
                  >
                    Learn More
                  </Link>

                  <button
                    onClick={() => (window.location.href = "/contact")}
                    className="ml-auto text-sm px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                    aria-label="Book service"
                  >
                    Book Service
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-700 mb-4">
              Can&apos;t find what you&apos;re looking for? Contact us and our team will help
              you find the right solution.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 rounded-xl bg-[#2d1070] text-white font-semibold hover:opacity-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}


// import Link from 'next/link';
// import React from 'react';

// const services = [
//   {
//     slug: "tire-sales-installation",
//     title: "Tire Sales and Installation",
//     description:
//       "Wide selection of quality tires with professional installation.",
   
//   },
//   {
//     slug: "tire-services",
//     title: "Tire Services",
//     description:
//       "Balancing, alignment, and puncture repair to keep you safe.",
  
//   },
//   {
//     slug: "automotive-repair",
//     title: "Automotive Repair Services",
//     description:
//       "Expert repair solutions for brakes, suspension, and more.",
   
//   },
//   {
//     slug: "maintenance-services",
//     title: "Maintenance Services",
//     description: "Oil changes, fluid checks, and routine maintenance.",
 
//   },
//   {
//     slug: "specialty-services",
//     title: "Specialty Services",
//     description: "Custom solutions tailored to your vehicle’s needs.",
   
//   },
// ];

// const page = () => {
//   return (
//     <div>
//       <h1>Our Services</h1>
//       <ul>
//         {services.map((service) => (
//           <li key={service.slug}>
//             <Link href={`/services/${service.slug}`}>
//               {service.title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default page
