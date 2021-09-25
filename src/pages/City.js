import React, { useState, useEffect } from "react";
import axios from "axios";

export function City() {

  let [data, setData] = useState();
  let [city, setCity] = useState();

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        "https://api.openbrewerydb.org/breweries?by_city=" + city
      );
      setData(results.data);
    }
    getData();
  }, [city]);

  return data ? <div><City info={data} />
    <input onChange={(value) => {
      setCity(value)
    }} />
  </div> : "City not found";
}
