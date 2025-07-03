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
    <div className='bg-white shadow-sm flex justify-between items-center h-16 px-6 md:px-10 text-gray-800'>
      <h1 className='text-2xl font-semibold text-green-600'>NAKAR</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex gap-6'>
        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={generateHref(item)}
              className='hover:text-green-600 cursor-pointer transition-colors'
            >
              {lang === 'es' ? item.es : item.eu}
            </a>
          </li>
        ))}
      </ul>

      {/* Language Toggle */}
      <button
        onClick={toggleLang}
        className='hidden md:block text-sm border px-3 py-1 rounded hover:bg-green-600 hover:text-white transition-colors'
      >
        {lang === 'es' ? 'Euskera' : 'Castellano'}
      </button>

      {/* Mobile Navigation Icon */}
      <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer'>
        {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 h-full w-[70%] bg-white shadow-md transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 md:hidden p-6 space-y-6`}
      >
        <h1 className='text-2xl font-bold text-green-600'>NAKAR</h1>

        {navItems.map(item => (
          <li key={item.id}>
            <a
              href={generateHref(item)}
              onClick={() => setNav(false)}
              className='block border-b pb-2 text-gray-800 hover:text-green-600 transition-colors'
            >
              {lang === 'es' ? item.es : item.eu}
            </a>
          </li>
        ))}

        <button
          onClick={toggleLang}
          className='text-sm mt-4 border px-3 py-1 rounded hover:bg-green-600 hover:text-white transition-colors'
        >
          {lang === 'es' ? 'Euskera' : 'Castellano'}
        </button>
      </ul>
    </div>
  );
};

export default Navbar;