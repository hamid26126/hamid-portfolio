import { useEffect } from "react"

const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="text-xl font-mono font-bold text-white">
            hamid<span className="text-blue-500">.tech</span>
          </a>

          {/* Hamburger Icon for Mobile */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map(section => (
              <a
                key={section}
                href={`#${section}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar