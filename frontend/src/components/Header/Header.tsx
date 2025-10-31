"use client";

import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "@/assets/logo.jpg";
import { IoMdMenu, RxCross2 } from "@/utils/icons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full text-center sticky top-0 left-0 z-50 shadow-md">
      <div className="bg-[#2d1070] flex items-center justify-center p-2">
        <p className="text-white text-lg">Welcome to TyrePro</p>
      </div>

      {/* navigation */}
      <header className="bg-white px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <Image src={Logo} alt="Logo" width={128} height={44} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <Link
              href="/"
              className="hover:text-[#2d1070] transition text-lg font-semibold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-[#2d1070] transition text-lg font-semibold"
            >
              About
            </Link>
            {/* <Link href="/services" className="hover:text-indigo-600 transition text-lg font-semibold">
            Services
          </Link> */}
            <Link
              href="/inventory"
              className="hover:text-[#2d1070] transition text-lg font-semibold"
            >
              Inventory
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#2d1070] transition text-lg font-semibold"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <RxCross2 className="text-2xl" />
            ) : (
              <IoMdMenu className="text-2xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t shadow-md">
            <nav className="flex flex-col space-y-4 px-6 py-4 text-gray-700 font-medium">
              <Link
                href="/"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/inventary"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Inventary
              </Link>
              <Link
                href="/contact"
                className="hover:text-indigo-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
