const Footer = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">
              Veterinary Web
            </h4>
            <p className="mb-6 leading-relaxed text-slate-300">
              Cuidamos de tus mascotas con amor y profesionalismo. Síguenos en
              nuestras redes sociales para estar al día con nuestras novedades y
              consejos de cuidado animal.
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 transition-colors hover:bg-blue-700"
                aria-label="Facebook"
              >
                <span className="font-bold text-white">f</span>
              </a>

              <a
                href="https://www.instagram.com/jaque_ovm/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-600 transition-colors hover:bg-pink-700"
                aria-label="Instagram"
              >
                <span className="text-lg text-white">◎</span>
              </a>

              <a
                href="mailto:correo@empresa.com"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 transition-colors hover:bg-red-700"
                aria-label="Email"
              >
                <span className="text-white">✉</span>
              </a>
            </div>
          </div>

          {}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">Info</h4>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-lg bg-slate-800 p-4 transition-colors hover:bg-slate-700">
                <div className="text-2xl">✉</div>
                <div>
                  <strong className="block text-white">Email</strong>
                  <div className="text-sm text-slate-400">
                    jacqueline.oviedoiranda@ucr.ac.cr
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-lg bg-slate-800 p-4 transition-colors hover:bg-slate-700">
                <div className="text-2xl">📍</div>
                <div>
                  <strong className="block text-white">Dirección</strong>
                  <div className="text-sm text-slate-400">
                    100 metros Norte del parque central de grecia, Alajuela,
                    Costa Rica
                  </div>
                </div>
              </div>
            </div>
          </div>

          {}
          <div>
            <h4 className="mb-4 text-xl font-bold text-white">Contact</h4>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Email: jose.chaconcalderon@ucr.ac.cr</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Celular: +506 8992 8602</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Horas: Lunes-Viernes 8:00AM–5:00PM</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 mt-2 inline-block h-2 w-2 rounded-full bg-blue-500" />
                <span>Ubicación: Costa Rica</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {}
      <div className="border-t border-slate-700">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-sm text-slate-400">
          © 2026 Veterinaria Web. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
