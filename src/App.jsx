import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/home.jsx";
import Science from "./components/science.jsx";
import Mave from "./components/mave.jsx";
import "./App.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<Home />} />
        <Route path="/science" element={<Science />} />
        <Route path="/mave" element={<Mave />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
