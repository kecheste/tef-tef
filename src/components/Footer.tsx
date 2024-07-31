import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col bg-sky-950 divide-y rounded-2xl mx-40 mt-8">
      <div className="flex px-32 py-16 justify-around">
        <div className="flex flex-col gap-4">
          <p className="text-xl font-bold text-white">Tef Tef</p>
          <div className="flex flex-col gap-1">
            <p className="text-sm text-gray-400">+251936501702</p>
            <p className="text-sm text-gray-400">abenidevworking@gmail.com</p>
            <p className="text-sm text-gray-400">4 kilo Street, Addis Ababa</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md font-medium text-gray-100">Quick Links</p>
          <div className="flex flex-col text-sm text-gray-500 gap-1">
            <p className="">About</p>
            <p className="">Contact</p>
            <p className="">Pricing</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md font-medium text-gray-100">Candidate</p>
          <div className="flex flex-col text-sm text-gray-500 gap-1">
            <p className="">Browse Jobs</p>
            <p className="">Browse Employers</p>
            <p className="">Candidate Dahboard</p>
            <p className="">Saved Jobs</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md font-medium text-gray-100">Employers</p>
          <div className="flex flex-col text-sm text-gray-500 gap-1">
            <p className="">Post a Job</p>
            <p className="">Browse Candidates</p>
            <p className="">Employers Dashboard</p>
            <p className="">Applications</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-md font-medium text-gray-100">Support</p>
          <div className="flex flex-col text-sm text-gray-500 gap-1">
            <p className="">Faqs</p>
            <p className="">Privacy Policy</p>
            <p className="">Terms & Conditions</p>
          </div>
        </div>
      </div>
      <div className="flex items-center px-32 justify-between">
        <p className="text-center text-gray-400 py-4">
          &copy; 2024 Tef Tef - Job Portal. All rights reserved.
        </p>
        <div className="flex items-center">
          <div className="flex gap-4 ml-4">
            <Link href="facebook" className="text-gray-500 hover:text-gray-400">
              <FaFacebook size={20} />
            </Link>
            <Link href="twitter" className="text-gray-500 hover:text-gray-400">
              <FaTwitter size={20} />
            </Link>
            <Link
              href="instagram"
              className="text-gray-500 hover:text-gray-400"
            >
              <FaInstagram size={20} />
            </Link>
            <Link href="linkedin" className="text-gray-500 hover:text-gray-400">
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
