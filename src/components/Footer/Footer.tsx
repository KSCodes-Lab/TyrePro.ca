"use client";

import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Image from "next/image";
import FooterLogo from "@/assets/TyrePro-logo1.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2d1070] text-yellow-100">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Subscribe */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* Replace src with your logo path */}
              <div className="w-38 relative">
                <Image
                  src={FooterLogo}
                  alt="TyrePro footer logo"
                  // fill
                  className="object-contain"
                />
              </div>
              {/* <div>
                <h3 className="text-lg font-bold">TyrePro</h3>
                <p className="text-sm text-yellow-100/90">Your Trusted Tire Shop</p>
              </div> */}
            </div>
            <div>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex
                necessitatibus ratione necessitatibus ratione.
              </p>
            </div>
            {/* <div>
              <p className="text-sm text-yellow-100/90 mb-2">Subscribe Now</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex gap-2"
                aria-label="Subscribe to newsletter"
              >
                <label htmlFor="footer-email" className="sr-only">
                  Enter your email
                </label>
                <input
                  id="footer-email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 rounded-md bg-white text-gray-800 text-sm focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-yellow-400 text-[#2d1070] font-semibold text-sm hover:opacity-95 transition"
                >
                  Subscribe
                </button>
              </form>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/inventary" className="hover:underline">
                  Inventary
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact
                </Link>
              </li>
              {/* <li>
                <a href="/testimonials" className="hover:underline">
                  Testimonials
                </a>
              </li> */}
              {/* <li>
                <a href="/terms" className="hover:underline">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:underline">
                  Privacy Policy
                </a>
              </li> */}
            </ul>
          </div>

          {/* Helpful Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-yellow-100/90">
              <li>
                <Link href="/services" className="hover:underline">
                  Tire Sales and Installation
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Specialty Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Automotive Repair Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Maintenance Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <p className="mb-2">📞 +91 9999 999 999</p>
            <p className="mb-3">✉️ enquiry@tyrepro.com</p>

            <div className="flex items-center gap-3">
              <Link
                href="https://facebook.com"
                className="p-2 rounded-full bg-white text-[#2d1070] hover:opacity-90"
                aria-label="Facebook"
              >
                <FaFacebookF size={14} />
              </Link>
              <Link
                href="https://twitter.com"
                className="p-2 rounded-full bg-white text-[#2d1070] hover:opacity-90"
                aria-label="Twitter"
              >
                <FaTwitter size={14} />
              </Link>
              <Link
                href="https://instagram.com"
                className="p-2 rounded-full bg-white text-[#2d1070] hover:opacity-90"
                aria-label="Instagram"
              >
                <FaInstagram size={14} />
              </Link>
              <Link
                href="https://linkedin.com"
                className="p-2 rounded-full bg-white text-[#2d1070] hover:opacity-90"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={14} />
              </Link>
            </div>
            {/* <ul className="space-y-2 text-sm text-yellow-100/90 mb-6">
              <li>
                <a href="/brands" className="hover:underline">
                  Brands List
                </a>
              </li>
              <li>
                <a href="/order" className="hover:underline">
                  Order
                </a>
              </li>
              <li>
                <a href="/returns" className="hover:underline">
                  Return &amp; Exchange
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline">
                  Blog
                </a>
              </li>
            </ul> */}
          </div>

          {/* <div className="text-sm text-yellow-100/90">
              <h5 className="font-semibold text-yellow-300 mb-2">Contact Us</h5>
              <p className="mb-2">📞 +91 9999 999 999</p>
              <p className="mb-3">✉️ enquiry@tyrepro.com</p>

              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  className="p-2 rounded-full bg-yellow-400 text-[#2d1070] hover:opacity-90"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={14} />
                </a>
                <a
                  href="https://twitter.com"
                  className="p-2 rounded-full bg-yellow-400 text-[#2d1070] hover:opacity-90"
                  aria-label="Twitter"
                >
                  <FaTwitter size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  className="p-2 rounded-full bg-yellow-400 text-[#2d1070] hover:opacity-90"
                  aria-label="Instagram"
                >
                  <FaInstagram size={14} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="p-2 rounded-full bg-yellow-400 text-[#2d1070] hover:opacity-90"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-yellow-400/20 mt-8 pt-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm">
              © {new Date().getFullYear()} TyrePro. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
              <span>•</span>
              <Link href="/privacy" className="hover:underline">
                Privacy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:underline">
                Terms &amp; Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
