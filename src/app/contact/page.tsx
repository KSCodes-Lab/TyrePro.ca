// app/contact/page.tsx
"use client";

import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { useFormik } from "formik";
import { FaClock } from "react-icons/fa6";
import * as Yup from "yup";

// type FormState = {
//   name: string;
//   email: string;
//   phone?: string;
//   message: string;
// };

const phoneRegex = /^\+?[0-9\s\-().]{7,20}$/;

const Page = () => {
  const [submitted, setSubmitted] = useState(false);

  // const contactSchema = Yup.object({
  //   name: Yup.string()
  //     .min(2, "Name must be at least 2 characters")
  //     .max(25, "Name must be 25 characters or less")
  //     .required("Please Enter Your Name"),
  //   email: Yup.string()
  //     .email("Please enter a valid email")
  //     .required("Please enter your email"),
  //   phone: Yup.string()
  //     .trim()
  //     .matches(
  //       /^\+?[0-9\s\-().]{7,20}$/,
  //       "Phone number is not valid (numbers, spaces, +, -, ( ) allowed)"
  //     )
  //     .required("Please enter phone number"),
  //   message: Yup.string()
  //     .max(250, "Message must be 250 characters or fewer")
  //     .required("Please enter a message"),
  // });

  const contactSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(25, "Name must be 25 characters or less")
      .required("Please Enter Your Name"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Please enter your email"),
    // Phone is optional, but if provided must match the regex
    phone: Yup.string()
      .trim()
      .nullable()
      .test(
        "phone-valid-or-empty",
        "Phone number is not valid (numbers, spaces, +, -, ( ) allowed)",
        (value) => {
          if (!value) return true; // optional
          return phoneRegex.test(value);
        }
      ),
    message: Yup.string()
      .max(250, "Message must be 250 characters or fewer")
      .required("Please enter a message"),
  });


  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  // Replace this with your real async call
  // const fakeSendToServer = (data: typeof initialValues) =>
  //   new Promise((res) => setTimeout(() => res(true), 1000));

  // const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
  //   useFormik({
  //     initialValues: initialValues,
  //     validationSchema: contactSchema,
  //     onSubmit: (values, action) => {
  //       console.log("values", values);

  //       // ✅ show success message
  //       setSubmitted(true);

  //       // reset form
  //       action.resetForm();
  //       // hide message after 3 seconds (optional)
  //       setTimeout(() => setSubmitted(false), 5000);
  //     },
  //   });

  // console.log("errors", errors);

  const formik = useFormik({
    initialValues,
    validationSchema: contactSchema,
    onSubmit: async (values, actions) => {
      console.log("values", values);
      try {
        actions.setSubmitting(true);
        // POST to your API / send email etc.
        // await fakeSendToServer(values);

        // show success message
        setSubmitted(true);

        // reset form
        actions.resetForm();

        // hide message after 5 seconds
        setTimeout(() => setSubmitted(false), 5000);
      } catch (err) {
        // handle server error (set form level error or show toast)
        console.error("submit error", err);
      } finally {
        actions.setSubmitting(false);
      }
    },
  });


   const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = formik;

  const BRAND = {
    bg: "bg-white",
    accent: "text-[#2d1070]",
    accentBg: "text-[#2d1070]",
  };

  return (
//     <main className="min-h-screen">
//       <div className={`${BRAND.bg} py-16 px-6 md:px-12 lg:px-20`}>
//         <div className="container mx-auto px-6 lg:px-14">
//           {/* Page Heading */}
//           <div className="mb-10">
//             <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d1070]">
//               Get in Touch with TyrePro
//             </h1>
//             <p className="mt-3 max-w-4xl">
//               Have a question, need a quote, or want to schedule a service?
//               Reach out — our team is ready to help. Visit us at our location or
//               use the contact form and we’ll get back to you promptly.
//             </p>
//           </div>

//           {/* Main card */}
//           <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
//               {/* LEFT: Contact info */}
//               <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-4">
//                   Contact Information
//                 </h2>
//                 <p className="text-gray-700 mb-6 leading-relaxed">
//                   We’re here to help with any questions you have about tires,
//                   services, and appointments. Visit our location or call us
//                   directly.
//                 </p>

//                 <div className="space-y-6">
//                   <div className="flex items-start gap-3">
//                     <span className="p-3 rounded-lg bg-[#2d1070] text-white">
//                       <FaMapMarkerAlt />
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-900">
//                         Visit Us
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         123 TyrePro Street, Stoney Creek, ON L8J 2A1
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span className="p-3 rounded-lg bg-[#2d1070] text-white">
//                       <FaPhoneAlt />
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-900">
//                         Call Us
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         +1 (905) 555-0123, +1 (905) 555-0456
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span className="p-3 rounded-lg bg-[#2d1070] text-white">
//                       <FaEnvelope />
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-900">
//                         Email
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         enquiry@tyrepro.com
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-3">
//                     <span className="p-3 rounded-lg bg-[#2d1070] text-white">
//                       <FaEnvelope />
//                     </span>
//                     <div>
//                       <h4 className="text-sm font-semibold text-gray-900">
//                         Business Hours
//                       </h4>
//                       <p className="text-sm text-gray-600">
//                         Monday to Saturday, 9:30am - 4:30pm
//                       </p>
//                     </div>
//                   </div>

//                   {/* Social icons */}
//                   <div>
//                     <h4 className="text-sm font-semibold text-gray-900 mb-3">
//                       Follow Us
//                     </h4>
//                     <div className="flex items-center gap-3">
//                       <a
//                         href="#"
//                         aria-label="Facebook"
//                         className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
//                       >
//                         <FaFacebookF />
//                       </a>
//                       <a
//                         href="#"
//                         aria-label="Twitter"
//                         className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
//                       >
//                         <FaTwitter />
//                       </a>
//                       <a
//                         href="#"
//                         aria-label="Instagram"
//                         className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
//                       >
//                         <FaInstagram />
//                       </a>
//                       <a
//                         href="#"
//                         aria-label="LinkedIn"
//                         className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
//                       >
//                         <FaLinkedinIn />
//                       </a>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* RIGHT: Contact Form */}
//               <div className="p-8 md:p-12">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                   Contact Us
//                 </h3>

//                 {submitted && (
//                   <div className="mb-4 rounded-md bg-green-50 border border-green-200 p-3 text-green-800">
//                     Thank you — your message has been sent. We will contact you
//                     soon.
//                   </div>
//                 )}

//                 <form onSubmit={handleSubmit} noValidate className="space-y-4">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Full name
//                     </label>
//                     <input
//                       id="name"
//                       type="text"
//                       name="name"
//                       // autoComplete="off"
//                       value={values.name}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070] `}
//                       //   ${errors.name ? "border-red-400" : "border-gray-200"
//                       // }
//                       placeholder="Your full name"
//                     />
//                     {errors.name && touched.name ? (
//                       <p className="text-xs text-red-500 mt-1">{errors.name}</p>
//                     ) : null}
//                   </div>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div>
//                       <label
//                         htmlFor="email"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Email
//                       </label>
//                       <input
//                         id="email"
//                         type="email"
//                         name="email"
//                         value={values.email}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070]`}
//                         //   ${
//                         //   errors.email ? "border-red-400" : "border-gray-200"
//                         // }
//                         placeholder="you@example.com"
//                       />
//                       {errors.email && touched.email ? (
//                         <p className="text-xs text-red-500 mt-1">
//                           {errors.email}
//                         </p>
//                       ) : null}
//                     </div>

//                     <div>
//                       <label
//                         htmlFor="phone"
//                         className="block text-sm font-medium text-gray-700"
//                       >
//                         Phone (optional)
//                       </label>
//                       <input
//                         id="phone"
//                         type="tel"
//                         name="phone"
//                         value={values.phone}
//                         onChange={handleChange}
//                         onBlur={handleBlur}
//                         className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070] border-gray-200"
//                         placeholder="+1 (555) 555-0123"
//                       />
//                       {errors.phone && touched.phone ? (
//                         <p className="text-xs text-red-500 mt-1">
//                           {errors.phone}
//                         </p>
//                       ) : null}
//                     </div>
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-700"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       rows={5}
//                       name="message"
//                       value={values.message}
//                       onChange={handleChange}
//                       onBlur={handleBlur}
//                       className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070]`}
//                       // ${errors.message ? "border-red-400" : "border-gray-200"}

//                       placeholder="Tell us how we can help..."
//                     />
//                     {errors.message && touched.message ? (
//                       <p className="text-xs text-red-500 mt-1">
//                         {errors.message}
//                       </p>
//                     ) : null}
//                   </div>

//                   <div className="flex items-center gap-4">
//                     <button
//                       type="submit"
//                       // disabled={submitting}
//                       className="inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-semibold bg-[#2d1070] text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d1070]"
//                     >
//                       Send Message
//                       {/* {submitting ? "Sending..." : "Send Message"} */}
//                     </button>

//                     {/* <button
//                       type="button"
//                       // onClick={() => {
//                       //   setForm({ name: "", email: "", phone: "", message: "" });
//                       //   setErrors({});
//                       // }}
//                       className="text-sm text-gray-600 hover:underline"
//                     >
//                       Reset
//                     </button> */}
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Outside main div: Google Map */}
//           <div className="mt-8">
//             <h4 className="text-sm font-semibold mb-3">Find us on the map</h4>

//             {/* Replace the src with your location's Google Maps embed link */}
//             <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow">
//               {/* <iframe
//                 title="TyrePro Location"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.1234567890123!2d-79.8000000!3d43.2500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c8...!2sTyrePro!5e0!3m2!1sen!2sca!4v0000000000000"
//                 className="w-full h-64 sm:h-80 md:h-96"
//                 loading="lazy"
//               /> */}

//               <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200 shadow">
//   <iframe
//     src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23259.9292383696!2d-79.68874!3d43.220161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca34be1c38dd9%3A0xa102a2e680fa9905!2sTYRE%20PRO!5e0!3m2!1sen!2sca!4v1758907923887!5m2!1sen!2sca"
//     className="w-full h-full"
//     style={{ border: 0 }}
//     allowFullScreen
//     loading="lazy"
//     referrerPolicy="no-referrer-when-downgrade"
//   />
// </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </main>

<main className="min-h-screen">
      <div className={`${BRAND.bg} py-16 px-6 md:px-12 lg:px-20`}>
        <div className="container mx-auto px-6 lg:px-14">
          {/* Page Heading */}
          <div className="mb-10">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#2d1070]">
              Get in Touch with TyrePro
            </h1>
            <p className="mt-3 max-w-4xl">
              Have a question, need a quote, or want to schedule a service?
              Reach out — our team is ready to help. Visit us at our location or
              use the contact form and we’ll get back to you promptly.
            </p>
          </div>

          {/* Main card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
              {/* LEFT: Contact info */}
              <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We’re here to help with any questions you have about tires,
                  services, and appointments. Visit our location or call us
                  directly.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <span className="p-3 rounded-lg bg-[#2d1070] text-white">
                      <FaMapMarkerAlt />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Visit Us
                      </h4>
                      <p className="text-sm text-gray-600">
                       123 Main Street, Stoney Creek, ON, Canada
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="p-3 rounded-lg bg-[#2d1070] text-white">
                      <FaPhoneAlt />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Call Us
                      </h4>
                      <p className="text-sm text-gray-600">
                       <a href="tel:1-905-923-3101">+1 (905) 923-3101</a>, <a href="tel:431-998-5894">431-998-5894</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="p-3 rounded-lg bg-[#2d1070] text-white">
                      <FaEnvelope />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Email
                      </h4>
                      <p className="text-sm text-gray-600">
                       <a href="mailto:h.singh@tyrepro.ca" target="_blank">h.singh@tyrepro.ca</a>
                       {/* <br/> */}
                       {/* <a href="mailto:a.randhawa@tyrepro.ca"> a.randhawa@tyrepro.ca</a> */}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="p-3 rounded-lg bg-[#2d1070] text-white">
                      <FaClock />
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Business Hours
                      </h4>
                      <p className="text-sm text-gray-600">
                        Monday to Saturday, 9:30am - 4:30pm
                      </p>
                    </div>
                  </div>

                  {/* Social icons */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      Follow Us
                    </h4>
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label="Facebook"
                        className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
                      >
                        <FaFacebookF />
                      </a>
                      <a
                        href="#"
                        aria-label="Twitter"
                        className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
                      >
                        <FaTwitter />
                      </a>
                      <a
                        href="#"
                        aria-label="Instagram"
                        className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="#"
                        aria-label="LinkedIn"
                        className="p-3 rounded-md bg-[#2d1070] text-white hover:opacity-90"
                      >
                        <FaLinkedinIn />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Contact Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Contact Us
                </h3>

                {submitted && (
                  <div
                    role="status"
                    className="mb-4 rounded-md bg-green-50 border border-green-200 p-3 text-green-800"
                  >
                    Thank you — your message has been sent. We will contact you
                    soon.
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.name && touched.name)}
                      aria-describedby={errors.name && touched.name ? "name-error" : undefined}
                      className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070] `}
                      placeholder="Your full name"
                    />
                    {errors.name && touched.name ? (
                      <p id="name-error" className="text-xs text-red-500 mt-1">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.email && touched.email)}
                        aria-describedby={errors.email && touched.email ? "email-error" : undefined}
                        className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070]`}
                        placeholder="you@example.com"
                      />
                      {errors.email && touched.email ? (
                        <p id="email-error" className="text-xs text-red-500 mt-1">
                          {errors.email}
                        </p>
                      ) : null}
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone (optional)
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        aria-invalid={Boolean(errors.phone && touched.phone)}
                        aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
                        className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070] border-gray-200"
                        placeholder="+1 (555) 555-0123"
                      />
                      {errors.phone && touched.phone ? (
                        <p id="phone-error" className="text-xs text-red-500 mt-1">
                          {errors.phone}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(errors.message && touched.message)}
                      aria-describedby={errors.message && touched.message ? "message-error" : undefined}
                      className={`mt-1 block w-full rounded-md border px-3 py-2 shadow-sm text-gray-900 focus:ring-2 focus:ring-[#2d1070]`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && touched.message ? (
                      <p id="message-error" className="text-xs text-red-500 mt-1">
                        {errors.message}
                      </p>
                    ) : null}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center justify-center rounded-md px-6 py-2 text-sm font-semibold bg-[#2d1070] text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2d1070] ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Outside main div: Google Map */}
          <div className="mt-8">
            <h4 className="text-sm font-semibold mb-3">Find us on the map</h4>

            {/* Replace the src with your location's Google Maps embed link */}
            <div className="w-full rounded-lg overflow-hidden border border-gray-200 shadow">
              <div className="w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden border border-gray-200 shadow">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23259.9292383696!2d-79.68874!3d43.220161!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ca34be1c38dd9%3A0xa102a2e680fa9905!2sTYRE%20PRO!5e0!3m2!1sen!2sca!4v1758907923887!5m2!1sen!2sca"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
