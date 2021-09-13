import React from "react";
import classes from "./CardDetail.module.css";
import ReactPlayer from "react-player";

function CardDetail({ props }) {
  const { links, mission_name, rocket, launch_date_local } = props.launches[0];
  return (
    <div className={classes.demo}>
      <h1>launch detail page</h1>
      Youtube Link
      <br />
      <ReactPlayer
        url={`${links.video_link}`}
        controls
        playbackRate={2}
        width='896px'
        height='504px'
      />
      <h2>
        you can also see the article link
        <a className={classes.article} href={links.article_link}>
          here
        </a>
      </h2>
    </div>
  );
}

export default CardDetail;
