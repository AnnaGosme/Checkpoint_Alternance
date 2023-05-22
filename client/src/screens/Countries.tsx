import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Countries() {
  const [countryCode, setCountryCode] = useState("");

  const location = useLocation();

  const continent = location.state.continentCode;
  const countries = continent.countries;

  const onClickCountryCode = (selectedCountryCode: any) => {
    setCountryCode(selectedCountryCode);
  };

  return (
    <>
    <h1>Pays</h1>
    <ul>
      {countries.map((country: any) => {
        return (
          <li key={country.code}>
            <p>{country.name}</p>
            <p>{country.emoji}</p>
            <Link
              to={"/:continent/countries/:country"}
              state={{
                countryCode: country,
              }}
            >
              <button
                onClick={(e: React.MouseEvent) =>
                  onClickCountryCode(country.code)
                }
              >
                Voir détail du pays
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
    </>
  );
}
