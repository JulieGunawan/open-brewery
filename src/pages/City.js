import React, { useState, useEffect } from "react";
import axios from "axios";
import { Brewery } from "../components";

export function City() {
  let [data, setData] = useState([]);
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

  
  return (<><input
  onChange={(event) => {
    setCity(event.target.value);
  }}
/> <br/>
  {data.length == 0 ? (
    <div>
       City not found
    </div>
  ) : (
    data.map((ele) => (<Brewery info={ele} />) )
  )}</>)
}
