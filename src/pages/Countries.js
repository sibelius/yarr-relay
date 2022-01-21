import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import graphql from "babel-plugin-relay/macro";

export function CountriesPage(props) {
  const data = usePreloadedQuery(
    graphql`
      query CountriesPageQuery($continentCode: String) {
        countries(filter: { continent: { eq: $continentCode } }) {
          name
          code
        }
      }
    `,
    props.preloaded.query
  );
  return (
    <>
      <h3>Countries in {props.params.continentCode}</h3>
      <p>
        The sample pulls data from{" "}
        <a
          target="_blang"
          noreferrer
          href="https://countries.trevorblades.com/"
          title="Click to explore the schema"
        >
          countries.trevorblands.com
        </a>
      </p>

      <ul>
        {data.countries.map((c) => (
          <li>
            <p>{c.name}</p>{" "}
          </li>
        ))}
      </ul>
    </>
  );
}
