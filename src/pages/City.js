import React, { useState, useEffect } from "react";
import axios from "axios";

export function City() {
  let [data, setData] = useState();
  let [city, setCity] = useState("san_diego");

  useEffect(() => {
    async function getData() {
      const results = await axios.get(
        "https://api.openbrewerydb.org/breweries?by_city=" + city
      );
      setData(results.data);
    }
    getData();
  }, [city]);

  return data ? <div>{JSON.stringify(data)}</div> : "City not found";
}
