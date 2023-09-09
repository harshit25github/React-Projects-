import styles from "./CountryList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import Message from "./Message";
import { useCity } from "../context/CityContext";
function CountryList() {
  const { cities, loading } = useCity();
  if (loading) {
    return <Spinner />;
  }
  if (cities.length === 0)
    return (
      <Message message="Add your first country by clicking on a city on the map" />
    );

  // console.log(cities, loading);
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country))
      return [...arr, { country: city.country, emoji: city.emoji }];
    else return arr;
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((city) => (
        <CountryItem key={city.country} country={city} />
      ))}
    </ul>
  );
}
CountryList.propTypes = {
  cities: PropTypes.array, // use the PropTypes object to define valid prop types
  loading: PropTypes.bool,
};
export default CountryList;
