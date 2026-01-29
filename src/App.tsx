import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Listado } from "./pages/Listado";
import { Estadisticas } from "./pages/Estadisticas";
import { Navbar } from "./components/Navbar";
import InfoPage from "./pages/InfoPage";
import HomePage from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/listado" element={<Listado />} />
        <Route path="/estadisticas" element={<Estadisticas />} />
        <Route path="/info" element={<InfoPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
