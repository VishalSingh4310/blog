"use client";
import Link from "next/link";
import { useState } from "react";
import { CgMenuLeft } from "react-icons/cg";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 ">
      <div className="container mx-auto">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-white text-2xl font-bold">
            My Blogs
          </Link>
          <button
            onClick={toggleMenu}
            className="text-white block md:hidden focus:outline-none"
          >
            <CgMenuLeft size={24} />
          </button>
          {/* Links for desktop */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="block text-white hover:text-gray-400">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-gray-400"
            >
              About
            </Link>
          </div>
        </div>

        {/* Links for mobile */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link href="/" className="block text-white hover:text-gray-400">
              Home
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-gray-400"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
