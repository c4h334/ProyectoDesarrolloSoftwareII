import clientData from "../../data/client.json";

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-emerald-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Mensaje principal */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-6">
            {clientData.name}, te damos la bienvenida a nuestra{" "}
            <span className="text-emerald-600">veterinaria</span>
          </h1>

          {/* Mensaje secundario */}
          <p className="text-lg md:text-xl text-slate-600 mb-10">
            Cuidamos de tus mascotas con{" "}
            <span className="font-semibold">amor</span> y{" "}
            <span className="font-semibold">profesionalismo</span>.
          </p>
        </div>

        {/* Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {/* Cuidado Canino */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-3xl mx-auto">
              🐶
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Cuidado Canino
            </h3>
            <p className="text-slate-600 text-center">
              Servicios especializados para perros, enfocados en su bienestar y
              salud.
            </p>
          </div>

          {/* Cuidado Felino */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 text-3xl mx-auto">
              🐱
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Cuidado Felino
            </h3>
            <p className="text-slate-600 text-center">
              Atención especializada para gatos con un enfoque delicado y
              profesional.
            </p>
          </div>

          {/* Emergencias */}
          <div className="group bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-rose-100 text-rose-600 text-3xl mx-auto">
              🚑
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2 text-center">
              Emergencias 24/7
            </h3>
            <p className="text-slate-600 text-center">
              Disponibles en todo momento para cuidar la vida de tu mascota.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
