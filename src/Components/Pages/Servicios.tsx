import { useState } from 'react';

const Servicios = () => {
  const servicios = [
    {
      id: 1,
      title: 'A) Pintura de estructuras, fachadas y edificios en general',
      content:
        'Aplicamos recubrimientos duraderos y estéticos para proteger y embellecer todo tipo de construcciones.',
    },
    {
      id: 2,
      title: 'B) Revestimientos exteriores e interiores en todo tipo de obra',
      content:
        'Colocamos revestimientos adaptados a cada superficie para mejorar su acabado y resistencia.',
    },
    {
      id: 3,
      title: 'C) Albañilería y pequeños trabajos de construcción en general',
      content:
        'Realizamos reformas, reparaciones y trabajos puntuales con profesionalidad y rapidez.',
    },
    {
      id: 4,
      title: 'D) Servicios auxiliares de la construcción y acabado de obras',
      content:
        'Ofrecemos soporte integral para la correcta finalización de proyectos constructivos, desde limpieza hasta detalles finales.',
    },
  ];

  const [openId, setOpenId] = useState<number | null>(null);

const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
};

  return (
    <main className="pt-10 bg-gray-50 p-6 flex flex-col items-center justify-center">
      <section className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-green-600 mb-6">
          Nuestros Servicios de Pintura y Construcción
        </h1>
        <p className="text-gray-700 mb-6">
          En NAKAR Pinturas y Construcción ofrecemos una amplia variedad de servicios profesionales para proyectos de pintura y obras en general, asegurando calidad y atención personalizada.
        </p>

        <div className="space-y-4">
          {servicios.map(({ id, title, content }) => (
            <div key={id} className="border rounded-md">
              <button
                onClick={() => toggle(id)}
                className="w-full text-left px-4 py-3 font-semibold text-gray-800 flex justify-between items-center hover:bg-green-50 focus:outline-none"
              >
                {title}
                <span className="ml-2 text-green-600 font-bold text-xl">
                  {openId === id ? '−' : '+'}
                </span>
              </button>
              {openId === id && (
                <div className="px-4 py-3 text-gray-600 border-t bg-green-50">
                  {content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className='pt-8 text-gray-600'>
            Visita nuestros proyectos para ver ejemplos de nuestro trabajo y la calidad que ofrecemos. <br />
        </div>
      </section>
    </main>
  );
};

export default Servicios;