import type { ReactNode } from "react";
import Header from "../../shared/Header";
import Footer from "../../shared/Footer";

interface LayoutProps {
  children: ReactNode;
}

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

{/**Esto de aca no se necesita*/}