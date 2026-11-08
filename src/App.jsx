import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./pages/Home.jsx"
import Bmi from "./pages/Bmi.jsx"
import Bmr from "./pages/Bmr.jsx"
import Car from "./pages/Car.jsx"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<Bmi />} />
          <Route path="/bmr" element={<Bmr />} />
          <Route path="/car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
