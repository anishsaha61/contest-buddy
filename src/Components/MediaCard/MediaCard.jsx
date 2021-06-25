import React from "react";
import Media from "react-bootstrap/Media";
import style from './MediaCard.module.css'

const MediaCard = ({ resourse_url, id }) => {
  return (
    <>
      <Media>
        <div className={`${style.container}  d-flex align-items-center justify-content-center bg-dark rounded m-3 p-5`}>
          <img
            src={resourse_url}
            alt="logo"
            height={150}
            width={150}
          />
        </div>
      </Media>
    </>
  );
};

export default MediaCard;
