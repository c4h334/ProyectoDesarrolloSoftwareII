import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./shared/Header.tsx";
import Footer from "./shared/Footer.tsx";

import Home from "./features/home/Home";
import Layout from "./components/layout/layout.tsx";
import PetList from "./features/pets/PetList";
import PetProfile from "./features/pets/PetProfile";
import ClientProfile from "./features/client/ClientProfile";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/pet-profile/:id" element={<PetProfile />} />
          <Route path="/client-profile" element={<ClientProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
