"use client";

import React from "react";
import Image from "next/image";
import Owner1Img from "@/assets/Harpreet_Singh.jpg";
import Owner2Img from "@/assets/Ashish_Randhawa.jpg";
import Testimonials from "@/components/Testimonials/Testimonials";
import { motion } from "framer-motion";


const Team = [
  {
    name: "Harpreet Singh",
    role: "Owner",
    bio: "With over 5 years of experience in the automotive industry, Harpreet Singh is a seasoned professional dedicated to delivering top-notch service to our customers. As one of the owners of TyrePro, Harpreet ensures that every aspect of our operations reflects our commitment to excellence. You can reach Harpreet at 431-998-5894 or via email at h.singh@tyrepro.ca.",
    img: Owner1Img,
  },
  {
    name: "Ashish Randhawa",
    role: "Owner",
    bio: "Bringing more than 5 years of expertise to the table, Ashish Randhawa is passionate about providing unparalleled service excellence at TyrePro. As an owner, Ashish plays a pivotal role in maintaining the highest standards of quality and customer satisfaction. For any inquiries or assistance, you can contact Ashish at 431-998-5894 or email him at a.randhawa@tyrepro.ca.",
    img: Owner2Img,
  },
  // add more team members as needed
];

const page = () => {
  // const BRAND_BG = "bg-[#2d1070]";
  // const BRAND_TEXT = "text-[#2d1070]";
  // const ACCENT = "text-[#2d1070]";
  return (
    <main className="w-full">
      {/* HERO / INTRO */}
      <motion.section 
       initial={{ opacity: 0, y: 10 }}  
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      className="py-8 md:py-10 px-6 md:px-12 lg:px-20 bg-white container mx-auto flex items-center justify-center">
        <div className="container mx-auto text-center px-6 lg:px-14">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 text-[#2d1070]">
            Unveiling the Heart of TyrePro: Passion, Precision, and Personalized
            Service
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800">
              Welcome to TyrePro, where quality tires and automotive services
              meet unparalleled customer care. Located in Stoney Creek, just a
              stone&apos;s throw away from Hamilton, we are your go-to destination
              for all your automotive needs. At TyrePro, your satisfaction and
              safety are our top priorities. Backed by years of experience and a
              commitment to excellence, our dedicated team strives to deliver
              premium products and professional services tailored to your
              vehicle&apos;s requirements.
            </p>
          </div>
        </div>
      </motion.section>

      {/* TEAM SECTION */}
      <div
      //  initial={{ opacity: 0, y: 10 }}
      //   whileInView={{ opacity: 1, y: 0 }}
      //   viewport={{ once: false, amount: 0.5 }}
      //   transition={{ duration: 0.5 }}
        //  transition={{ duration: 0.6, delay: 0.25 }}
      className="py-12 md:py-16 px-6 md:px-12 lg:px-20 bg-[#f3f0fa]">
        <div className="container mx-auto px-6 lg:px-14">
          <h2
            className="text-center text-2xl sm:text-3xl md:text-4xl font-extrabold mb-10"
            style={{ color: "#2d1070" }}
          >
            Meet Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Team.map((member) => (
              <article
                key={member.name}
                className="bg-[#2d1070] rounded-2xl p-6 sm:p-8 md:p-10 text-center text-white shadow-lg"
                aria-labelledby={`team-${member.name.replace(
                  /\s+/g,
                  "-"
                )}-name`}
              >
                <div className="max-w-lg mx-auto">
                  {/* Responsive image box with fixed aspect ratio */}
                  <div className="mx-auto mb-6 w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden border-4 border-white bg-gray-100">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={800}
                      height={1000}
                      className="object-cover w-full h-full"
                      priority={false}
                    />
                  </div>

                  <h3
                    id={`team-${member.name.replace(/\s+/g, "-")}-name`}
                    className="text-lg sm:text-xl md:text-2xl font-semibold mb-1 text-white"
                  >
                    {member.name}
                  </h3>

                  <p className="text-sm sm:text-base italic mb-4 text-white/90">
                    {member.role}
                  </p>

                  <p className="text-sm sm:text-base text-white/90 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* MISSION with BACKGROUND IMAGE */}
      <motion.section 
      initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      className="py-16 md:py-10">
        {/* background image */}
        {/* <div className="inset-0 -z-10"> */}
        {/* <p>
            At TyrePro, we understand the importance of maintaining your
            vehicle's health and performance. That's why we offer a
            comprehensive range of automotive services to address all your
            needs. Whether it's routine maintenance or specialized repairs, you
            can trust our team to deliver reliable solutions and exceptional
            results. Experience the TyrePro difference today and enjoy peace of
            mind knowing that your vehicle is in good hands.
          </p> */}
        {/* <Image
            src="/mission-bg.jpg"
            alt="Mission background"
            fill
            className="object-cover brightness-50"
            priority={false}
          /> */}
        {/* </div> */}

        <div className="container mx-auto px-6 md:px-12 lg:px-14">
          <div className=" mx-auto bg-white/90 rounded-3xl p-8 sm:p-10 md:p-12 text-center shadow-md">
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4"
              style={{ color: "#2d1070" }}
            >
              Our Mission
            </h2>
            <p className="text-[#2d1070] text-base sm:text-lg md:text-xl leading-relaxed">
              Our mission at TyrePro is to provide our customers with the
              highest quality tires and automotive services, delivered with
              honesty, integrity, and exceptional customer service. We are
              committed to ensuring the safety and satisfaction of every
              customer who walks through our doors, and to being a trusted
              partner in keeping their vehicles running smoothly.
            </p>

            <p className="text-[#2d1070] text-base sm:text-lg md:text-xl leading-relaxed">
              At TyrePro, we understand the importance of maintaining your
              vehicle&apos;s health and performance. That&apos;s why we offer a
              comprehensive range of automotive services to address all your
              needs. Whether it&apos;s routine maintenance or specialized repairs,
              you can trust our team to deliver reliable solutions and
              exceptional results. Experience the TyrePro difference today and
              enjoy peace of mind knowing that your vehicle is in good hands.
            </p>
          </div>
        </div>
      </motion.section>

      {/* CTA / Footer note */}
      <motion.section 
      initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
      className="py-10 md:py-12 px-6 md:px-12 lg:px-20 bg-white">
        {/* <div className="container mx-auto px-6 lg:px-14 text-center">
          <div className="max-w-3xl mx-auto">
            <h3
              className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4"
              style={{ color: "#2d1070" }}
            >
              Ready to Experience TyrePro?
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Book an appointment, request a quote, or drop by our shop — our
              team is ready to help with expert advice and friendly service.
            </p>
          </div>
        </div> */}
        <Testimonials />
      </motion.section>
    </main>
  );
};

export default page;
