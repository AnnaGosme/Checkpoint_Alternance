import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetContinentsQuery } from "../gql/generated/schema";

export default function Continents() {
  const [continentCode, setContinentCode] = useState("");

  const { data: allContinents } = useGetContinentsQuery();

  const continents = allContinents?.continents ?? [];

  const onClickContinentCode = (selectedContinentCode: any) => {
    setContinentCode(selectedContinentCode);
  };

  return (
    <ul>
      {continents.map((continent) => {
        return (
          <li key={continent.code}>
            {continent.name}
            {continent.code}
            <Link
              to={"/:continent/countries"}
              state={{
                continentCode: continent,
              }}
            >
              <button
                onClick={(e: React.MouseEvent) =>
                  onClickContinentCode(continent.code)
                }
              >
                Voir les pays
              </button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
