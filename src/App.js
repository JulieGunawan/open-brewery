import logo from "./beer.png";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  let [data, setData] = useState();
  let [breweryId, setId] = useState(Math.floor(Math.random() * 10000) + 1);
  // const results = await axios.get(
  //   "https://api.openbrewerydb.org/breweries/" + breweryId
  // );
  // setData(results.data);
  // if (!data){
  //   setId(Math.floor(Math.random() * 10000) + 1);
  // }
  useEffect(() => {
    async function getData() {
      try {
        const results = await axios.get(
          "https://api.openbrewerydb.org/breweries/" + breweryId
        );
        setData(results.data);
      } catch (err) {
        setId(Math.floor(Math.random() * 10000) + 1);
      }
      // debugger;
    }
    getData();
    // getData();
  }, [breweryId]);
  // useEffect(() => {
  //   if (!data) {
  //     setId(Math.floor(Math.random() * 10000) + 1);
  //   }
  // }, []);
  return data ? (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Name: {data.name}
        <br />
        Type: {data.brewery_type}
        <br />
        City: {data.city} <br />
        <a href={data.website_url}>Brewery Website</a>
        <a
          href={
            "https://maps.google.com/?q=" + data.latitude + "," + data.longitude
          }
        >
          Google Maps Link
        </a>
        <br />
      </header>
      <button onClick={() => setId(Math.floor(Math.random() * 10000) + 1)}>
        New Brewery
      </button>
    </div>
  ) : (
    "Loading..."
  );
}

export default App;
