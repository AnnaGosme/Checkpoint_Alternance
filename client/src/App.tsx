import { Route, Routes } from "react-router-dom";
import "./App.css";
import Continents from "./screens/Continents";
import Countries from "./screens/Countries";
import CountryDetails from "./screens/CountryDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continents />} />
        <Route path="/:continent/countries" element={<Countries />} />
        <Route path="/countries/:countryName" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;
