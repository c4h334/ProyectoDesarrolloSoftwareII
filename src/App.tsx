import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./features/home/Home";
import Layout from "./components/layout/layout.tsx";
import PetList from "./features/pets/PetList";
import PetProfile from "./features/pets/PetProfile";
import ClientProfile from "./features/client/ClientProfile";
import { NotFound } from "./shared/NotFound.tsx";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pets" element={<PetList />} />
          <Route path="/pet-profile/:id" element={<PetProfile />} />
          <Route path="/client-profile" element={<ClientProfile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
