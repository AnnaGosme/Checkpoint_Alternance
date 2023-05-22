import { Link} from "react-router-dom";
export default function Home() {
    return (
        <>
        <Link to={"/continents"}>
            <button>
                Voir les continents
            </button>
        </Link>
        <Link to={"/countries"}>
            <button>
                Voir les pays
            </button>
        </Link>
        </>

    )
}