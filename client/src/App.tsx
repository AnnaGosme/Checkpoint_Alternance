import { Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import "./App.css";
import Continents from "./screens/Continents";
import Countries from "./screens/Countries";
import CountryDetails from "./screens/CountryDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/continents" element={<Continents />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:countryName" element={<CountryDetails />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
