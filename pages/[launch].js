import React from "react";
import CardDetail from "./../components/card-detail/CardDetail";

import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { InMemoryCache } from "apollo-boost";

function Launch(props) {
  const launchData = props.data;
  return (
    <div>
      <CardDetail props={launchData} />
    </div>
  );
}

export async function getStaticPaths(context) {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });
  const { data } = await client.query({
    query: gql`
      {
        launches {
          launch_date_local
        }
      }
    `,
  });

  let paths = [];
  data.launches.forEach((item) => {
    paths.push({ params: { launch: item.launch_date_local } });
  });
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps(context) {
  const currentPaRout = context.params.launch;
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql",
    cache: new InMemoryCache(),
  });
  const data = await client.query({
    query: gql`
      {
        launches(find: { launch_date_local: "${currentPaRout}" }) {
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
    props: data,
  };
}

export default Launch;
