import { useLocation } from "react-router-dom";
import { useGetCountryQuery } from "../gql/generated/schema";

export default function CountryDetails() {

  const { data: countryDetails } = useGetCountryQuery({
    variables: { code: "BF" },
  });

  //   const country = oneCountry ?? [];
  const selectedCountry = countryDetails?.country;

  return (
    <>
      <p>{selectedCountry?.name}</p>
      <p>{selectedCountry?.emoji}</p>
    </>
  );
}
