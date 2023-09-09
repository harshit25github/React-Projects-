import { useNavigate, useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useCity } from "../context/CityContext";
import Button from "./Button";
import { useEffect } from "react";
import Spinner from "./Spinner";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  // TEMP DATA
  const navigate = useNavigate();
  const { id } = useParams();
  const { getCurrentCity, currentCity, loading } = useCity();

  useEffect(() => {
    async function hitToGetCity() {
      await getCurrentCity(id);
    }
    hitToGetCity();
  }, [id]);

  // console.log(cities, currentCit, id);
  // const currentCity = {
  //   cityName: "Lisbon",
  //   emoji: "🇵🇹",
  //   date: "2027-10-31T15:59:59.138Z",
  //   notes: "My favorite city so far!",
  // };
  if (loading) return <Spinner />;
  console.log(currentCity);
  const { cityName, emoji, date, notes } = currentCity;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>

      <div>
        <Button type={"back"} onClick={() => navigate(-1)}>
          &larr; Back
        </Button>
      </div>
    </div>
  );
}

export default City;
