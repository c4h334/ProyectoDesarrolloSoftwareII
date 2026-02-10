import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const linkBase =
  "text-slate-700 hover:text-blue-600 font-medium transition-colors";
const activeLink = "text-blue-700 font-semibold";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo (clickeable) */}
          <Link to="/" className="flex items-center gap-3" aria-label="Go Home">
            <img
              src="/imagenes/AKlogoWeb.png"
              alt="Veterinary Web Logo"
              className="h-12 w-auto"
            />
            <span className="hidden sm:inline text-lg font-bold text-slate-800">
              Veterinaria Web
            </span>
          </Link>

          {/* Se supone que esto es un menú para que se vea mejor en el cel */}
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="lg:hidden rounded px-3 py-2 text-2xl text-slate-700 hover:bg-slate-100"
            aria-label="Open menu"
          >
            ☰
          </button>

          {/* Navegación pc */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${activeLink}` : linkBase
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pets"
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${activeLink}` : linkBase
                  }
                >
                  Pet List
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/pet-profile"
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${activeLink}` : linkBase
                  }
                >
                  Pet Profile
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/client-profile"
                  className={({ isActive }) =>
                    isActive ? `${linkBase} ${activeLink}` : linkBase
                  }
                >
                  Client Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4">
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  onClick={closeMenu}
                  className="block rounded px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pets"
                  onClick={closeMenu}
                  className="block rounded px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Pet List
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/pet-profile"
                  onClick={closeMenu}
                  className="block rounded px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Pet Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/client-profile"
                  onClick={closeMenu}
                  className="block rounded px-4 py-2 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                >
                  Client Profile
                </NavLink>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;