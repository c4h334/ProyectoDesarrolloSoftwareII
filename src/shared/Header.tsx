import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

/*const linkBase =
  "text-slate-700 hover:text-blue-600 font-medium transition-colors";
const activeLink = "text-blue-700 font-semibold";*/

// Barra superior con navegacion desktop y movil
const Header = () => {
  // Controla el modal de confirmacion al cerrar sesion
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  // Controla si el menu movil esta abierto
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cierra el menu movil al navegar
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo con acceso directo al inicio */}
          <Link to="/" className="flex items-center gap-3" aria-label="Go Home">
            <img
              src="src/assets/LogoVeterinaria.png"
              alt="Veterinary Web Logo"
              className="h-24 w-auto"
            />
            <span className="hidden sm:inline text-lg font-bold text-slate-800">
              Veterinaria Web
            </span>
          </Link>

          {/* Boton hamburguesa para abrir o cerrar menu movil */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden rounded px-3 py-2 text-2xl text-slate-700 hover:bg-slate-100"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Navegacion para pantallas grandes */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-100 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pets"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1 text-sm font-medium transition ${
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  Mascotas
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/client-profile"
                  className={({ isActive }) =>
                    `rounded-full px-3 py-1 text-sm font-medium transition ${
                      isActive
                        ? "bg-emerald-50 text-emerald-700"
                        : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  Perfil
                </NavLink>
              </li>

              <li>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="rounded-full px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-50 transition"
                >
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Navegacion para pantallas pequenas */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-100 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pets"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-100 text-blue-700"
                        : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                    }`
                  }
                >
                  Mascotas
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/client-profile"
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2 text-sm font-medium transition ${
                      isActive
                        ? "bg-slate-100 text-emerald-700"
                        : "text-slate-700 hover:bg-slate-100 hover:text-emerald-600"
                    }`
                  }
                >
                  Perfil
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Ventana de confirmacion para cerrar sesion */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl shadow-lg p-6 w-80 text-center">
            <h2 className="text-lg font-semibold text-slate-800 mb-4">
              ¿Desea cerrar sesión?
            </h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setShowLogoutModal(false);
                  alert("Se ha cerrado la sesión correctamente");
                }}
                className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
              >
                Sí
              </button>

              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
