import React from 'react';
import { FaMedium } from "react-icons/fa";
import { GrTwitter } from 'react-icons/gr';
import { GrLinkedin } from 'react-icons/gr';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className=" bg-blue-100 bg-opacity-15  py-12">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap justify-center mb-4">
          <a
            href="https://twitter.com/@mellvingunadi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out mr-4"
          >
            <GrTwitter className="fab fa-twitter fa-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/mellvin-gunadi-1b3359207/"
            target="https://www.linkedin.com/in/mellvin-gunadi-1b3359207/"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out mr-4"
          >
            <GrLinkedin className="fa-lg" />
          </a>
          <a
            href="https://medium.com/@mellvin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out mr-4"
          >
            <FaMedium className="fab fa-facebook fa-lg" />
          </a>
          <a
            href="https://www.instagram.com/mellvingunadi?igsh=MWtwOW1uNjk0M3FzdQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-gray-900 transition duration-300 ease-in-out mr-4"
          >
            <GrInstagram className="fab fa-facebook fa-lg" />
          </a>
        </div>
        <p className="text-gray-200 text-center">
          Copyright {new Date().getFullYear()} - Mellvin gunadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;