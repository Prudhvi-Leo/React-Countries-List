import { useState, useEffect } from "react";
import { Link, useLocation, useParams } from 'react-router'
import CountryCard from "./CountryCard";
import CountriesListShimmer from "./CountriesListShimmer";

export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,flags,region,capital,population"
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setCountriesData(data))
      .catch((err) => console.error("Error fetching countries:", err));
  }, []);

    if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) =>
           country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query.toLowerCase())
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
             data={country}
          />
        ))}
    </div>
  );
}
