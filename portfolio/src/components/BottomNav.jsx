import { FaHome, FaLinkedin, FaGithub, FaUser, FaFolderOpen } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function BottomNav() {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-full px-6 py-3 flex items-center gap-6 z-50">
      <a href="/" aria-label="Home"><FaHome className="text-xl" /></a>
      <a href="/about" aria-label="About"><FaUser className="text-xl" /></a>
      <a href="/projects" aria-label="Projects"><FaFolderOpen className="text-xl" /></a>
      <a href="/contact" aria-label="Contact"><MdEmail className="text-xl" /></a>
      <a href="https://www.linkedin.com/in/maria-sophia-arubio-mascardo-1036542b4/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-xl" /></a>
      <a href="https://github.com/mscrdsophia" target="_blank" rel="noopener noreferrer"><FaGithub className="text-xl" /></a>
    </div>
  );
}
