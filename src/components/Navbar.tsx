import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-100 bg-black/30 backdrop-blur-md shadow-lg">
      <div className="w-full px-6 py-6 flex items-center justify-between">
        <h1 className="md:text-3xl font-semibold text-white">Satvik Reddy Amireddy</h1>

        <ul className="hidden md:flex gap-8 text-gray-300 text-base font-bold">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/experience" className="hover:text-white">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-white">Projects</Link></li>
            <li><Link to="/certifications" className="hover:text-white">Certifications</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
        </ul>

      </div>
    </nav>
  );
}
