import React from "react";
import { socialLinks } from "../constants/data";

export default function Footer() {
  return (
    <div className="bg-gray-900 text-white border-t-2 border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between md:items-center mt-6">
          <div>
            <p>&copy; Thirunavukkarasu. All Rights Reserved.</p>
          </div>
          <div>
            <p>Developed by Thirunavukkarasu</p>
          </div>
          <ul className="flex flex-row items-center space-x-4">
            {socialLinks.map((socialLink, idx) => (
              <li key={idx}>
                <a href={socialLink.url} className="text-base font-normal">
                  {socialLink.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
