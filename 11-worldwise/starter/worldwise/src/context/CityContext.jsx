import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();
const URL = `http://localhost:8000/cities`;

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [currentCity, setCurrentCity] = useState({});
  useEffect(function () {
    async function fetchCities() {
      try {
        setLoading(true);
        const res = await fetch(URL);
        const data = await res.json();
        console.log(data);
        setCities([...data]);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchCities();
    console.log(error);
  }, []);
  async function getCurrentCity(id) {
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      console.log(data);
      setCurrentCity(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <CitiesContext.Provider
      value={{ cities, loading, error, currentCity, getCurrentCity }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCity() {
  const data = useContext(CitiesContext);
  console.log(data);
  if (data === undefined)
    throw new Error("Cities context used out of scope of the provider");
  return data;
}

export { useCity, CitiesProvider };
