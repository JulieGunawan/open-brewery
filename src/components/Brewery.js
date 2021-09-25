import React from "react";

export function Brewery({ info }) {
  return (
    <p className="Brewery">
      <b>Name:</b> {info.name}
      <br />
      <b>Type:</b> {info.brewery_type}
      <br />
      <b>City:</b> {info.city} <br />
      <a href={info.website_url}>Brewery Website</a>
      <br />
      {info.latitude ? (
        <a
          href={
            "https://maps.google.com/?q=" + info.latitude + "," + info.longitude
          }
        >
          Google Maps Link
        </a>
      ) : (
        ""
      )}
      <br />
    </p>
  );
}
