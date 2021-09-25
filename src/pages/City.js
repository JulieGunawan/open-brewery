import React, { useState, useEffect } from "react";
import axios from "axios";

export function City() {
  let [data, setData] = useState(null);
  let [city, setCity] = useState(null);

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        "https://api.openbrewerydb.org/breweries?by_city=" + city
      );
      setData(results.data);
    }
    getData();
  }, [city]);
  debugger;

  return data.length == 0 ? (
    <div>
      <input
        onChange={(event) => {
          setCity(event.target.value);
        }}
      />
    </div>
  ) : (
    "City not found"
  );
}
