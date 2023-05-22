import { useLocation } from "react-router-dom";
import { useGetCountryQuery } from "../gql/generated/schema";

export default function CountryDetails() {
  const location = useLocation();

  const country = location.state.countryCode;

  const { data: countryDetails } = useGetCountryQuery({
    variables: { code: country.code },
  });

  const selectedCountry = countryDetails?.country;

  return (
    <>
      <p>{selectedCountry?.name}</p>
      <p>{selectedCountry?.emoji}</p>
    </>
  );
}
