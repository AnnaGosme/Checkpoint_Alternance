import { useState } from "react";
import { Link } from "react-router-dom";
import { useGetContinentsQuery, useGetContinentQuery } from "../gql/generated/schema";

export default function Continents() {
const [continentCode, setContinentCode] = useState("");
// const onClickContinentCode = (selectedContinentCode: any) => {
//     setContinentCode(selectedContinentCode);
//     console.log("continent", continent);
// }
  const { data: allContinents } = useGetContinentsQuery();

  const continents = allContinents?.continents ?? [];

  const {data: oneContinent} = useGetContinentQuery({variables: {code: "AF"}});
  const continent = oneContinent ?? [];

  const onClickContinentCode = (selectedContinentCode: any) => {
    setContinentCode(selectedContinentCode);
    console.log("one continent", continent)
  }

  
  
//   const {data: oneContinent} = useGetContinentQuery({variables: {code: continentCode}});
//   const continent = oneContinent?.continent ?? {};



  return (
    <ul>
      {continents.map((continent) => {
        return (
          <li>
            {continent.name}
            {continent.code}
            <Link to={"/:continent/countries"} state={{
                continentCode: continent
            }}>
              <button onClick={(e: React.MouseEvent) => onClickContinentCode(continent.code)}>Voir les pays</button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
