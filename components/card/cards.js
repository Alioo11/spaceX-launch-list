import React from "react";
import classes from "./card.module.css";

import Card from "./card";

function Cards({ props }) {
  return (
    <div className={classes.cards}>
      {props.map((launch) => {
        return <Card key={launch.id} data={launch} />;
      })}
    </div>
  );
}

export default Cards;
