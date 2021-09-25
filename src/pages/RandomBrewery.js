import React, { useState, useEffect } from "react";
import axios from "axios";
import { Brewery } from "../components";

export function RandomBrewery() {
    let [data, setData] = useState();
    let [breweryId, setId] = useState(
      Math.floor(Math.random() * (17000 - 8000) + 8000)
    );
    debugger;
    useEffect(() => {
      async function getData() {
        try {
          const results = await axios.get(
            "https://api.openbrewerydb.org/breweries/" + breweryId
          );
          console.log("Success: " + breweryId);
          setData(results.data);
        } catch (err) {
          console.log("Error: " + breweryId);
          setId(Math.floor(Math.random() * (17000 - 8000) + 8000));
        }
      }
      getData();
    }, [breweryId]);

  return data ? <div>
       <Brewery info={data} />
          <button
            onClick={() =>
              setId(Math.floor(Math.random() * (17000 - 8000) + 8000))
            }
          >
            New Brewery
          </button></div> : "Loading...";
}
