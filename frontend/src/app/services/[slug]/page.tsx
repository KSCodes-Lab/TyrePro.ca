// app/services/[slug]/page.tsx
import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Services data (imported images from assets)
// import service1 from "@/assets/banner_bg.jpg"; // Tire Sales and Installation
// import service2 from "@/assets/banner_bg.jpg"; // Tire Services
// import service3 from "@/assets/banner_bg.jpg"; // Automotive Repair Services
// import service4 from "@/assets/banner_bg.jpg"; // Maintenance Services
// import service5 from "@/assets/banner_bg.jpg"; // Specialty Services

import TireSalesInstallation from "@/assets/Tire_Sales_and_Installation.jpg"; // Tire Sales and Installation
import SpecialtService from "@/assets/SpecialtService.jpg"; // Tire Services
import Maintenance_Services from "@/assets/Maintenance_Services.jpg"; // Automotive Repair Services
import repairServiceImg from "@/assets/repair-service.jpg"; // Maintenance Services
import tireServices from "@/assets/tire_services.jpg"; // Specialty Services

// interface PageProps {
//   params: Promise<{ slug: string }>;
// }

const services = [
  {
    slug: "tire-sales-installation",
    title: "Tire Sales and Installation",
    description:
      "Wide selection of quality tires with professional installation.",
    longDescription:
      "At TyrePro, we understand the importance of quality tires for your vehicle's performance and safety. That's why we offer an extensive inventory of top-brand tires to suit every driving style and budget. Our certified technicians are here to help you find the perfect match for your vehicle, whether you're looking for all-season, performance, or off-road tires. When it's time for installation, trust our experts to ensure precision and safety with every tire change. Plus, we provide personalized recommendations based on your vehicle specifications and driving habits, so you can make an informed decision. With our range of tire warranty options, you can drive with confidence, knowing your investment is protected.",
    // listItem: "Extensive inventory featuring top-brand tires",
      image: TireSalesInstallation,
  },
  {
    slug: "tire-services",
    title: "Tire Services",
    description:
      "Balancing, alignment, and puncture repair to keep you safe.",
    longDescription:
      "Our tire services include balancing, alignment, puncture repair, and rotation. These services extend tire life and improve fuel efficiency.",
    image: tireServices,
  },
  {
    slug: "automotive-repair",
    title: "Automotive Repair Services",
    description:
      "Expert repair solutions for brakes, suspension, and more.",
    longDescription:
      "From brake repairs to suspension fixes, we ensure your car runs smoothly and safely. Our certified technicians use modern tools for accurate diagnostics.",
    image: repairServiceImg,
  },
  {
    slug: "maintenance-services",
    title: "Maintenance Services",
    description: "Oil changes, fluid checks, and routine maintenance.",
    longDescription:
      "Regular maintenance ensures your vehicle stays in peak condition. We handle oil changes, fluid checks, filter replacements, and battery checks.",
    image: Maintenance_Services,
  },
  {
    slug: "specialty-services",
    title: "Specialty Services",
    description: "Custom solutions tailored to your vehicle&apos;s needs.",
    longDescription:
      "We offer specialty services including performance tire fitting, custom wheel balancing, and seasonal tire swaps. Tailored care for unique vehicles.",
    image: SpecialtService,
  },
];

// type PageProps = {
//   params: {
//     slug: string;
//   };
// };

// export default function Page({ params }: { params: { slug: string } }) { 
//   const service = services.find((s) => s.slug === params.slug); 
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return notFound(); 
  const related = services.filter((s) => s.slug !== slug);

  return (
    <main className="w-full">
      {/* HERO */}
      <section className="bg-gray-50 py-12 md:py-16 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto px-6 lg:px-14">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <nav className="text-sm text-gray-600 mb-2">
                <Link href="/" className="hover:underline">
                  Home
                </Link>{" "}  
                <span className="mx-2">/</span>{" "}
                <Link href="/services" className="hover:underline">
                  Services
                </Link>{" "}
                <span className="mx-2">/</span>{" "}
                <span className="text-gray-900 font-medium">
                  {service.title}
                </span>
              </nav>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#2d1070]">
                {service.title}
              </h1>
              <p className="mt-3 text-gray-700 max-w-3xl">
                {service.description}
              </p>
            </div>

            <div className="flex gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center px-5 py-2 rounded-xl bg-[#2d1070] text-white font-semibold hover:opacity-95"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section
        id="details"
        className="py-12 md:py-16 px-6 md:px-12 lg:px-20"
      >
        <div className="container mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left: Description */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              About this Service
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              {service.longDescription}
            </p>

            <ul className="text-gray-700 leading-relaxed mb-6">
             {/* <li>{listItem}</li> */}
            </ul>

            <Link
              href="/contact"
              className="px-5 py-2 rounded-lg bg-[#2d1070] text-white font-semibold hover:opacity-95"
            >
              Schedule Now
            </Link>
          </div>

          {/* Right: Image */}
          <aside>
            <div className="w-full rounded-2xl overflow-hidden shadow-lg bg-white">
              <Image
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-72"
              />
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-14">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Related Services
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {related.map((r) => (
              <Link
                href={`/services/${r.slug}`}
                key={r.slug}
                className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
              >
                <Image
                  src={r.image}
                  alt={r.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-6 flex flex-col flex-grow text-center">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">
                    {r.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    {r.description}
                  </p>
                  <span className="mt-auto inline-block px-4 py-2 rounded-lg bg-[#2d1070] text-white font-semibold hover:opacity-95">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
