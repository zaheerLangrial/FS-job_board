import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 text-gray-500">
      <p>
        Copyright © ${new Date().getFullYear()} - All right reserved by Zaheer
        Ahmad
      </p>
    </footer>
  );
};

export default Footer;
