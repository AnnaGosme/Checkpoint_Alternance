import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useGetContinentQuery, useGetCountryQuery } from "../gql/generated/schema";


export default function Countries() {
  const [countryCode, setCountryCode] = useState("");

  const location = useLocation();

  console.log("countries continent", location.state.continentCode);

  const continent = location.state.continentCode;
  const countries = continent.countries;
  console.log(countries.map((country: any) => country.name));

  const {data: oneCountry} = useGetCountryQuery({variables: {code: "BF"}});
  const country = oneCountry ?? [];

  const onClickCountryCode = (selectedContinentCode: any) => {
    setCountryCode(selectedContinentCode);
    console.log("country details", country)
  }
  
  return (
    <>
      {countries.map((country: any) => {
        return (
          <>
            <p>{country.name}</p>
            <p>{country.emoji}</p>
            <Link to={"/:continent/countries/:country"} state={{
                countryCode: country
            }}>
              <button onClick={(e: React.MouseEvent) => onClickCountryCode(country.code)}>Voir détail du pays</button>
            </Link>
          </>
        );
      })}
    </>
  );
}
