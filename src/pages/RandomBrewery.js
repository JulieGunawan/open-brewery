import React, { useState, useEffect } from "react";
import axios from "axios";
import { Brewery } from "../components";

export function RandomBrewery() {
    let [data, setData] = useState();
    //let [breweryId, setId] = useState(
    //  Math.floor(Math.random() * (17000 - 8000) + 8000)
    //);
    let [zipCode, setZipCode] = useState (
      Math.floor(Math.random()* 100000)
    );
  //  debugger;
    /*useEffect(() => {
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
    }, [breweryId]);*/

    useEffect(() => {
      async function getData() {
        try {
          const results = await axios.get(
            "https://api.openbrewerydb.org/breweries/?by_postal=" + zipCode
          );
          console.log ("Success: "+zipCode);
          setData(results.data);
        } catch (err) {
          console.log("Error: " + zipCode);
          setZipCode(Math.floor(Math.random()*100000));
        }
      }
      getData();
    }, [zipCode]); 

  return data ? <div>
       <Brewery info={data} />
          <button
            onClick={() =>
              //setId(Math.floor(Math.random() * (17000 - 8000) + 8000))
              setZipCode(Math.floor(Math.random() * 100000))
            }
          >
            New Brewery
          </button></div> : "Loading...";
}
