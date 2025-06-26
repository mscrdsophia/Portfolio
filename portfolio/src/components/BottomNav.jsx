"use client";

import { FaHome, FaLinkedin, FaGithub, FaInstagram, FaUser, FaFolderOpen } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Dock from "./Dock"; 

const navItems = [
  {
    icon: <FaHome className="text-black text-xl" />,
    label: "Home",
    onClick: () => window.location.href = "/",
  },
  {
    icon: <FaUser className="text-black text-xl" />,
    label: "About",
    onClick: () => window.location.href = "/about",
  },
  {
    icon: <FaFolderOpen className="text-black text-xl" />,
    label: "Projects",
    onClick: () => window.location.href = "/projects",
  },
  // {
  //   icon: <MdEmail className="text-black text-xl" />,
  //   label: "Contact",
  //   onClick: () => window.location.href = "/contact",
  // },
  {
    icon: <FaLinkedin className="text-black text-xl" />,
    label: "LinkedIn",
    onClick: () => window.open("https://www.linkedin.com/in/maria-sophia-arubio-mascardo-1036542b4/", "_blank"),
  },
  {
    icon: <FaGithub className="text-black text-xl" />,
    label: "GitHub",
    onClick: () => window.open("https://github.com/mscrdsophia", "_blank"),
  },
  
];

export default function BottomNav() {
  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50">
      <Dock
        items={navItems}
        baseItemSize={50}
        magnification={70}
        distance={160}
        className="bg-white  border-neutral-700 shadow-lg"
      />
    </div>
  );
}
