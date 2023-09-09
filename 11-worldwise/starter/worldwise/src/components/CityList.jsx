import styles from "./CityList.module.css";
import PropTypes from "prop-types";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { useCity } from "../context/CityContext";

function CityList() {
  const { cities, loading } = useCity();

  if (loading) {
    return <Spinner />;
  }
  if (cities.length === 0)
    return (
      <Message message="Add your first city by clicking on a city on the map" />
    );

  // console.log(cities, loading);
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}
CityList.propTypes = {
  cities: PropTypes.array, // use the PropTypes object to define valid prop types
  loading: PropTypes.bool,
};
export default CityList;
