import React from "react";
import { usePreloadedQuery } from "react-relay/hooks";
import { Link } from "yarr";
import graphql from "babel-plugin-relay/macro";

export function ContinentsPage({ preloaded }) {
  const data = usePreloadedQuery(
    graphql`
      query ContinentsPageQuery {
        continents {
          code
          name
        }
      }
    `,
    preloaded.query
  );
  return (
    <>
      <h3>Continents</h3>
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
        {data.continents.map((c) => (
          <li key={c.code} title={c.code}>
            <Link to={`/continent/${c.code}/countries`}>{c.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
