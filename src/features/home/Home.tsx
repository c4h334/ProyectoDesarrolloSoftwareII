const Home = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido a Nuestra Veterinaria
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Cuidamos de tus mascotas con amor y profesionalismo
        </p>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">Imagen de perrito</div>
            <h3 className="text-xl font-semibold mb-2">Cuidado Canino</h3>
            <p className="text-gray-600">Servicios especializados para perros</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">Imagen de gato</div>
            <h3 className="text-xl font-semibold mb-2">Cuidado Felino</h3>
            <p className="text-gray-600">Atención especializada para gatos</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">Imagen de emergencia</div>
            <h3 className="text-xl font-semibold mb-2">Emergencias 24/7</h3>
            <p className="text-gray-600">Disponibles en todo momento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;