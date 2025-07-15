const Proyectos = () => {
  const proyectos = [
    {
      id: 1,
      titulo: 'Pintura Interior',
      descripcion: 'Acabados personalizados para salones, dormitorios y cocinas.',
      fotos: [
        '/img/photo1.jpg',
        '/img/photo2.jpg',
        '/img/photo3.jpg',
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <section className="max-w-5xl w-full">
        <h1 className="text-3xl font-bold text-green-600 mb-6 text-center">Nuestros Proyectos</h1>
        {proyectos.map(({ id, titulo, descripcion, fotos }) => (
          <article key={id} className="mb-12 bg-white p-6 rounded-2xl shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{titulo}</h2>
            <p className="text-gray-700 mb-6">{descripcion}</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {fotos.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${titulo} - Foto ${i + 1}`}
                  className="rounded-lg object-cover w-full h-48 shadow-sm hover:shadow-lg transition-shadow duration-300"
                />
              ))}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default Proyectos;