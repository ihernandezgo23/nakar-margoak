import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [lang, setLang] = useState<'es' | 'eu'>('es');

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'eu' : 'es'));
  };

  const navItems = [
    { id: 1, es: 'Inicio', eu: 'Hasiera' },
    { id: 2, es: 'Empresa', eu: 'Enpresa' },
    { id: 3, es: 'Sobre nosotros', eu: 'Guri buruz' },
    { id: 4, es: 'Contacto', eu: 'Kontaktua' },
  ];

  const generateHref = (item: typeof navItems[0]) => {
    const text = lang === 'es' ? item.es : item.eu;
    return '#' + text.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <header className='bg-white shadow-sm w-full'>
      <div className='flex justify-between items-center h-16 px-6 md:px-10 text-gray-800 max-w-screen-xl mx-auto'>
        <a href='/' className='text-2xl font-bold text-green-600 tracking-wide'>
          NAKAR
        </a>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center gap-8'>
          <ul className='flex gap-6'>
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={generateHref(item)}
                  className='text-sm font-medium hover:text-green-600 transition-colors duration-200'
                >
                  {lang === 'es' ? item.es : item.eu}
                </a>
              </li>
            ))}
          </ul>

          {/* Language Button */}
          <button
            onClick={toggleLang}
            className='text-sm font-medium bg-green-600 text-white px-4 py-1.5 rounded-full shadow-sm hover:bg-green-700 transition-colors duration-200'
          >
            {lang === 'es' ? 'Euskera' : 'Castellano'}
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      <ul
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-md z-50 transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 p-6 space-y-6 md:hidden`}
      >
        <h1 className='text-2xl font-bold text-green-600 mb-6'>NAKAR</h1>

        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={generateHref(item)}
              onClick={() => setNav(false)}
              className='block text-base font-medium border-b pb-2 text-gray-800 hover:text-green-600 transition-colors duration-200'
            >
              {lang === 'es' ? item.es : item.eu}
            </a>
          </li>
        ))}

        <button
          onClick={toggleLang}
          className='text-sm font-medium bg-green-600 text-white px-4 py-2 rounded-full shadow-sm hover:bg-green-700 transition-colors duration-200'
        >
          {lang === 'es' ? 'Euskera' : 'Castellano'}
        </button>
      </ul>
    </header>
  );
};

export default Navbar;