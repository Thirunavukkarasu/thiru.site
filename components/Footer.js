import React from "react";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { userData } from "../constants/data";

export default function Footer() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-10">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-8">
          <div>
            <p>&copy; Thirunavukkarasu. All Rights Reserved.</p>
          </div>
          <div>
            <p>Developed by Thirunavukkarasu</p>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <a
              href={userData.socialLinks.instagram}
              className="text-base font-normal text-gray-600"
            >
              <FaInstagram />
            </a>
            <a
              href={userData.socialLinks.twitter}
              className="text-base font-normal text-gray-600"
            >
              <FaTwitter />
            </a>
            <a
              href={userData.socialLinks.linkedin}
              className="text-base font-normal text-gray-600"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
