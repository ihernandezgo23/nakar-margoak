import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// PAGES
import Servicios from './Pages/Servicios';
import Proyectos from './Pages/Proyectos';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const navItems = [
    { id: 2, text: 'Servicios', href: '/servicios' },
    { id: 3, text: 'Proyectos', href: '/proyectos' },
    { id: 4, text: 'Blog', href: '/blog' },
    { id: 5, text: 'Contacto', href: '/contacto' },
  ];

  return (
    <Router>
      <header className='bg-white shadow-sm w-full'>
        <div className='flex justify-between items-center h-16 px-6 md:px-10 text-gray-800 max-w-screen-xl mx-auto'>
          <a href='/' className='text-2xl font-bold text-green-600 tracking-wide'>
            NAKAR
          </a>

          <nav className='hidden md:flex items-center gap-8'>
            <ul className='flex gap-6'>
              {navItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    rel="noopener noreferrer"
                    className='text-sm font-medium hover:text-green-600 transition-colors duration-200'
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
          </div>
        </div>

        <ul
          className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-md z-50 transform ${
            nav ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 p-6 space-y-6 md:hidden`}
        >
          <h1 className='text-2xl font-bold text-green-600 mb-6'>NAKAR</h1>

          {navItems.map(item => (
            <li key={item.id}>
              <a
                href={item.href}
                rel="noopener noreferrer"
                onClick={() => setNav(false)}
                className='block text-base font-medium border-b pb-2 text-gray-800 hover:text-green-600 transition-colors duration-200'
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </header>

      <Routes>
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />

      </Routes>
    </Router>
  );
};

export default Navbar;