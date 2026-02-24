import { useNavigate } from "react-router-dom";

// Pantalla para rutas que no existen
export function NotFound() {
  // Permite redirigir de vuelta al inicio
  const navigate = useNavigate();

  return (
    <div
      data-cy="not-found-page"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-4"
    >
      <div className="bg-white shadow-xl rounded-2xl p-10 max-w-lg w-full text-center">
        {/* Codigo principal del error */}
        <h1
          data-cy="not-found-title"
          className="text-7xl font-extrabold text-indigo-600 mb-4"
        >
          404
        </h1>

        {/* Mensaje breve para el usuario */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          ¡Ups! Página no encontrada
        </h2>

        {/* Contexto rapido de por que pudo pasar */}
        <p className="text-gray-500 mb-6">
          Parece que la página que buscas no existe, fue movida o escribiste mal
          la dirección.
        </p>

        {/* Accion para volver a una ruta valida */}
        <button
          data-cy="go-home-btn"
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition duration-200 transform hover:scale-105 shadow-md"
        >
          Volver al inicio
        </button>

        {/* Mensaje para orientar al usuario */}
        <p className="text-sm text-gray-400 mt-6">
          Si crees que esto es un error, intenta regresar o recargar la página.
        </p>
      </div>
    </div>
  );
}
