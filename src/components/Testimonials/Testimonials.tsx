// components/Testimonials.tsx
"use client";

import React, { JSX, useRef } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role?: string;
  photo?: string; // path in /public or external URL
  rating?: number; // 1-5
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote:
      "TyrePro exceeded my expectations! The team was knowledgeable, courteous, and went above and beyond to ensure I got the right tires for my vehicle. I highly recommend them!",
    name: "John D",
    role: "Satisfied Customer",
    photo: "/clients/rajiv.jpg",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "I've been a loyal customer of TyrePro for years, and they never disappoint. Their professionalism and attention to detail are unmatched. I wouldn't trust anyone else with my car!",
    name: "Sarah M",
    role: "Local Driver",
    photo: "/clients/monica.jpg",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "The service at TyrePro is exceptional. From the moment I walked in, I felt valued and well taken care of. Their expertise and dedication to customer satisfaction make them my go-to for all my automotive needs.",
    name: "Michael R",
    role: "Family Car Owner",
    photo: "/clients/peter.jpg",
    rating: 5,
  },
//   {
//     id: "4",
//     quote:
//       "Professional team, thorough inspection, and honest recommendations. I trust TyrePro with my family car.",
//     name: "Peter Johnson",
//     role: "Family Car Owner",
//     photo: "/clients/peter.jpg",
//     rating: 5,
//   },
//   {
//     id: "5",
//     quote:
//       "Professional team, thorough inspection, and honest recommendations. I trust TyrePro with my family car.",
//     name: "Peter Johnson",
//     role: "Family Car Owner",
//     photo: "/clients/peter.jpg",
//     rating: 5,
//   },
//   {
//     id: "6",
//     quote:
//       "Professional team, thorough inspection, and honest recommendations. I trust TyrePro with my family car.",
//     name: "Peter Johnson",
//     role: "Family Car Owner",
//     photo: "/clients/peter.jpg",
//     rating: 5,
//   },
  // add more testimonials as needed
];

export default function Testimonials(): JSX.Element {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const offset = el.clientWidth * 0.7;
    el.scrollBy({ left: direction === "left" ? -offset : offset, behavior: "smooth" });
  };

  return (
    <section className=" bg-white">
      <div className="container mx-auto px-6 lg:px-14">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-8" style={{ color: "#2d1070" }}>
          What Our Clients Say
        </h2>

        {/* Large screens: grid. Small screens: horizontal scroll with arrows */}
        <div className="relative">
          {/* Left/Right buttons - visible on small screens only */}
          <div className="flex items-center justify-end md:hidden gap-3 mb-4">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll testimonials left"
              className="p-2 rounded-md bg-[#2d1070] hover:opacity-90"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll testimonials right"
              className="p-2 rounded-md bg-[#2d1070] hover:opacity-90"
            >
              →
            </button>
          </div>

          {/* Grid for md+ and horizontal scroll for small screens */}
          <div
            ref={scrollRef}
            className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 overflow-x-auto md:overflow-visible scroll-snap-x snap-mandatory md:snap-none"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {TESTIMONIALS.map((t) => (
              <article
                key={t.id}
                className="snap-start md:snap-none bg-gray-50 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-lg transition flex flex-col"
                role="article"
                aria-label={`Testimonial by ${t.name}`}
              >
                <div className="flex items-start gap-4">
                  {/* Photo (optional) */}
                  <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    {t.photo ? (
                      <Image src={t.photo} alt={t.name} width={64} height={64} className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-300" />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900">{t.name}</h3>
                        {t.role && <p className="text-xs text-gray-500">{t.role}</p>}
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <FaStar
                            key={i}
                            size={14}
                            className={`${
                              t.rating && i < t.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                            aria-hidden
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="mt-4 text-gray-700 leading-relaxed text-sm md:text-base flex-grow">
                  “{t.quote}”
                </blockquote>

                {/* CTA or small link */}
                <div className="mt-6">
                  <button
                    className="text-sm px-4 py-2 rounded-md bg-[#2d1070] text-white hover:opacity-95"
                    onClick={() => alert(`View more about ${t.name} (demo)`)}
                    aria-label={`View more testimonial from ${t.name}`}
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Small note */}
        {/* <p className="mt-8 text-center text-sm text-gray-500">
          Verified reviews from customers near Stoney Creek & Hamilton.
        </p> */}
      </div>
    </section>
  );
}
