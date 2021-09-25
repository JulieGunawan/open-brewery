import React from 'react'
export default function Brewery({ info }) {
  return (
    <p>
      Name: {info.name}
      <br />
      Type: {info.brewery_type}
      <br />
      City: {info.city} <br />
      <a href={info.website_url}>Brewery Website</a>
      <br />
      {info.latitude ? (
        <a
          href={
            'https://maps.google.com/?q=' + info.latitude + ',' + info.longitude
          }
        >
          Google Maps Link
        </a>
      ) : (
        ''
      )}
      <br />
    </p>
  )
}
