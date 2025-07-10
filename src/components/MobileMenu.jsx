// import React from 'react'

// const MobileMenu = ({menuOpen,setMenuOpen}) => {
//   return (
//     <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
//     ${menuOpen?'h-screen opacity-100 pointer-events-auto':'h-0 opacity-0 pointer-events-none'}
//     `}>
//         <button onClick={()=>setMenuOpen(false)} className='absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer' area-label='Close Menu'>&times; </button>
//         <a onClick={()=>setMenuOpen(false)} href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
//             Home
//             </a>
//         <a onClick={()=>setMenuOpen(false)} href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
//             About</a>
//         <a onClick={()=>setMenuOpen(false)} href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
//             Projects</a>
//         <a onClick={()=>setMenuOpen(false)} href="#contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen?'opacity-100 translate-y-0':'opacity-0 translate-y-5'}`}>
//             Contact</a>
//     </div>
//   )
// }

// export default MobileMenu

const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.95)] backdrop-blur-md transition-all duration-300 ease-in-out
      ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}
      overflow-hidden md:hidden`}
    >
      <div className="flex flex-col items-center justify-center h-full px-4">
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-white text-3xl focus:outline-none"
          aria-label="Close Menu"
        >
          &times;
        </button>

        {['home', 'about', 'projects', 'contact'].map(section => (
          <a
            key={section}
            onClick={() => setMenuOpen(false)}
            href={`#${section}`}
            className={`text-2xl font-semibold text-white my-4 transition-transform duration-300 ${
              menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu