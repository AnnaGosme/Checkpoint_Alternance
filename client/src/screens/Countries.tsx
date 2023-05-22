import { Link, useLocation } from "react-router-dom";
import { useGetContinentQuery } from "../gql/generated/schema";
export default function Countries() {
  const location = useLocation();

  console.log("countries continent", location.state.continentCode);
  const continent = location.state.continentCode;
  const countries = continent.countries;
  console.log(countries.map((country: any) => country.name));
  
  return (
    <>
      {countries.map((country: any) => {
        return (
          <>
            <p>{country.name}</p>
            <p>{country.emoji}</p>
          </>
        );
      })}
    </>
  );
}
