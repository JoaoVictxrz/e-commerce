import { Container } from "@/components/container";
import React from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <Container className="min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Me
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            {`Let's connect! Find me on these platforms`}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <FaInstagram className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">@yourusername</span>
          </a>

          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <FaWhatsapp className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">+1 234 567 890</span>
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <FaLinkedin className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">LinkedIn Profile</span>
          </a>
          <a
            href="mailto:your@email.com"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <MdEmail className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">your@email.com</span>
          </a>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <FaGithub className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">GitHub Profile</span>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
          >
            <FaTwitter className="mr-3 h-8 w-8" />
            <span className="font-medium text-gray-800">@yourusername</span>
          </a>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Feel free to reach out through any of these platforms!
          </p>
        </div>
      </div>
    </Container>
  );
}
