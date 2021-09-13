import React from "react";
import classes from "./card.module.css";
import card from "./card";
import Link from "next/link";

function Card({ data }) {
  console.log(data.mission_name);
  if (!data) {
    return <div></div>;
  }
  return (
    <div>
      <div className={classes.card}>
        <h2>rocket name : {data.rocket.rocket_name}</h2>
        <h3>rocket type{data.rocket.rocket_type}</h3>
        <div className={classes.link}>
          <Link href={`/${data.launch_date_local}`}>see more</Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
