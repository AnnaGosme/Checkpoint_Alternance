import { Link } from "react-router-dom";
export default function Countries() {
  const countries = ["Australia", "Belgium", "France", "Nigeria"];
  return (
    <>
      {countries.map((country) => {
        return (
          <>
            <p>{country}</p>
            <Link to={"/countries/:countryName"}>
              <button>Voir le détail</button>
            </Link>
          </>
        );
      })}
    </>
  );
}
