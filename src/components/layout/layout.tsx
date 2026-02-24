import type { ReactNode } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

// Propiedades del layout que se mostrará en cada página
interface LayoutProps {
  children: ReactNode;
}
// Componente base que envuelve todas las páginas
// Incluye el Header arriba, el contenido en el centro y el Footer abajo
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

