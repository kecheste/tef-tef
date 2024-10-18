import Image from "next/image";
import React from "react";
import { LiaCertificateSolid } from "react-icons/lia";

function AboutInfo() {
  return (
    <div className="bg-white rounded-lg flex flex-col items-center text-sm">
      <div className="w-full">
        <div className="relative w-full flex flex-col items-center">
          <Image
            src="/cover.jpg"
            alt="cover"
            width={600}
            height={600}
            className="w-full h-28 object-cover rounded-t-lg"
          />
          <div className="absolute top-[45px]">
            <Image
              src="/profile.jpg"
              alt="profile"
              height={120}
              width={120}
              className="rounded-full object-cover w-[120px] h-[120px] border-2 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-16">
        <p className="font-medium text-lg mb-1">Jimmy Sullivan</p>
        <p className="text-gray-400 font-normal text-sm mb-1">
          Indonesia - 1:58 pm
        </p>
        <div className="flex items-center px-4 py-2 bg-gray-100 rounded-lg mb-2">
          <LiaCertificateSolid size={20} className="text-blue-600 mr-1" />
          <p className="text-sm">100% Job Success</p>
        </div>
      </div>

      {/* ABOUT INFO */}
      <div className="flex flex-col gap-6 divide-y px-8 w-full mt-3 mb-1">
        <div className="flex flex-col justify-start">
          <p className="rounded-lg px-4 py-1 text-gray-500 text-sm mb-2 border border-1 border-gray-200 cursor-pointer hover:bg-gray-50">
            Webflow Developer
          </p>
          <p className="rounded-lg px-4 py-1 text-gray-500 text-sm border border-1 border-gray-200 cursor-pointer hover:bg-gray-50">
            Product Designer
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-medium text-sm mt-4">About</p>
          <p className="font-normal text-gray-400 text-[13px] mt-1">
            I am a seasoned Product Designer located in Surankarta, Indonesia.
            My expertise lies in the realm of UI/UX design, brand strategy, and
            proficient Webflow development.
          </p>
          <p className="font-medium text-sm mt-3">Work Experience</p>
          <div className="flex flex-col mt-3">
            <div className="flex items-center mb-3">
              <Image
                src="/facebook.png"
                alt="facebook"
                width={80}
                height={80}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col ml-3">
                <p className="text-sm text-gray-800 font-medium">
                  UI/UX Designer
                </p>
                <p className="text-[13px] font-normal text-gray-500">
                  Facebook
                </p>
                <p className="text-[13px] font-normal text-gray-500 mt-1">
                  Jan 2018 - Apr 2020
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="/instagram.png"
                alt="facebook"
                width={100}
                height={100}
                className="h-[50px] w-[50px] rounded-full object-cover"
              />
              <div className="flex flex-col ml-3">
                <p className="text-sm text-gray-800 font-medium">
                  Webflow Developer
                </p>
                <p className="text-[13px] font-normal text-gray-500">
                  Instagram
                </p>
                <p className="text-[13px] font-normal text-gray-500 mt-1">
                  Aug 2020 - Sep 2022
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mb-2">
          <button className="text-sm text-white bg-sky-500 py-3 rounded-lg w-full font-medium outline-none hover:bg-sky-600 mt-4">
            Visit Profile
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutInfo;
