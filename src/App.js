import React, { useState, useEffect } from "react";
import {
  FaInstagram,
  FaGlobe,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaMoon,
  FaSun,
} from "react-icons/fa";

export default function Linkhub() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.title = "Linkhub";
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center py-10 px-4 transition-colors duration-300 ${
        isDarkMode ? "bg-[#1a1a1a] text-[#f2e9e2]" : "bg-[#f9f6f1] text-[#8b5e3c]"
      }`}
    >
      {/* Dark Mode Toggle */}
      <button
        className="absolute top-4 right-4 text-2xl p-2 rounded-full hover:scale-110 transition"
        onClick={() => setIsDarkMode(!isDarkMode)}
        aria-label="Toggle Dark Mode"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Profile section */}
      <div className="flex flex-col items-center gap-4 mb-16">
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-24 h-24 rounded-full object-cover shadow-md"
        />
        <h1 className="text-xl font-semibold">Oktaryan Hugo Wiratama</h1>

        {/* Links */}
        <div className="flex flex-col gap-4 mt-4 w-full max-w-sm">
          {[
            { label: "Instagram", href: "https://instagram.com/hugowrtma" },
            { label: "Linkedin", href: "https://linkedin.com/in/hugowrtma" },
            { label: "Github", href: "https://github.com/hugowrtma" },
            { label: "Website", href: "https://hugowrtma.site" },
            {
              label: "WhatsApp",
              href: "https://wa.me/6281219456916?text=Halo%20Hugo%2C%20saya%20lihat%20Linkhub-mu",
            },
            {
              label: "Email",
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=hugowiratama21@gmail.com&su=Hello%20Hugo&body=I%20found%20your%20Linkhub!",
            },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-full px-6 py-3 shadow-md text-center font-medium transition ${
                isDarkMode
                  ? "bg-[#2c2c2c] text-[#f2e9e2] hover:bg-[#3d3d3d]"
                  : "bg-white text-[#8b5e3c] hover:bg-[#e6ddd3]"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex gap-6 mt-6 text-2xl">
          {[
            { icon: <FaInstagram />, href: "https://instagram.com/hugowrtma" },
            { icon: <FaLinkedin />, href: "https://linkedin.com/in/hugowrtma" },
            { icon: <FaGithub />, href: "https://github.com/hugowrtma" },
            { icon: <FaGlobe />, href: "https://hugowrtma.site" },
            {
              icon: <FaWhatsapp />,
              href: "https://wa.me/6281219456916?text=Halo%20Hugo%2C%20saya%20lihat%20Linkhub-mu",
            },
            {
              icon: <FaEnvelope />,
              href: "https://mail.google.com/mail/?view=cm&fs=1&to=hugowiratama21@gmail.com&su=Hello%20Hugo&body=Hi%20Hugo%2C%20I%20found%20you%20on%20Linkhub!",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`transition hover:scale-110 ${
                isDarkMode ? "text-[#d6b79c] hover:text-[#f5d2b2]" : "text-[#a5795b] hover:text-[#c49472]"
              }`}
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="text-sm opacity-70">Linkhub by Hugo</footer>
    </div>
  );
}
