import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header.tsx";
import Footer from "./shared/Footer.tsx";

import Home from "./features/home/Home";
import ClientProfile from "./features/client/ClientProfile";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client-profile" element={<ClientProfile />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
