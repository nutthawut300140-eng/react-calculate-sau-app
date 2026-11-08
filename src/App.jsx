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
          <Route path="/Bmi" element={<Bmi />} />
          <Route path="/Bmr" element={<Bmr />} />
          <Route path="/Car" element={<Car />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
