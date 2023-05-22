import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useGetContinentsQuery } from "../gql/generated/schema";

interface ICountry {
  __typename?: string | undefined;
  code: string;
  name: string;
}

interface IContinent {
  __typename?: string | undefined;
  code: string;
  name: string;
  countries: ICountry[];
}
interface IState {
  query: string;
  list: IContinent[];
}

export default function Continents() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [continentCode, setContinentCode] = useState();

  const [displayedContinents, setDisplayedContinents] = useState<IState>({
    query: searchParams.get("query") ?? "",
    list: [],
  });

  const { data: allContinents } = useGetContinentsQuery();

  const continents = allContinents?.continents ?? [];

  const onClickContinentCode = (selectedContinentCode: any) => {
    setContinentCode(selectedContinentCode);
  };
  console.log(continents);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const results = continents.filter((continent) => {
      if (e.target.value === " ") return continents;
      return continent.name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setSearchParams({ query: e.target.value });
    setDisplayedContinents({
      query: e.target.value,
      list: results,
    });
  };

  return (
    <>
      <h1>Continents</h1>
      <form>
        <input
          value={displayedContinents.query}
          onChange={handleSearch}
          placeholder="Rechercher un continent..."
          type="search"
        ></input>
      </form>
      <ul>
        {displayedContinents.query === ""
          ? continents.map((continent) => {
              return (
                <li key={continent.code}>
                  {continent.name}
                  <Link
                    to={"/:continent/countries"}
                    state={{
                      continentCode: continent,
                    }}
                  >
                    {" "}
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
            })
          : displayedContinents.list.map((continent) => {
              return (
                <li key={continent.code}>
                  {continent.name}
                  <Link
                    to={"/:continent/countries"}
                    state={{
                      continentCode: continent,
                    }}
                  >
                    {" "}
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
    </>
  );
}
