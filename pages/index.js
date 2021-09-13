import React from "react";
import styles from "../styles/Home.module.css";
import Cards from "./../components/card/cards";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-boost";

import Spinner from "./../components/spinner/Spinner";
import Launch from "./[launch]";

export default function Home(props) {
  const launches = props.data.launches;

  return (
    <div className={styles.container}>
      <h1>spacex launchs</h1>
      <p>following content have been fetched from </p>
      <code>https://api.spacex.land/graphql</code>
      <br />
      <br />
      <Cards props={launches} />
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      {
        launches {
          id
          launch_date_local
          links {
            article_link
            video_link
          }
          mission_name
          rocket {
            rocket_name
            rocket_type
          }
        }
      }
    `,
  });
  return {
    props: {
      data,
    },
  };
}
