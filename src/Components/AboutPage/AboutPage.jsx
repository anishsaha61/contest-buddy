import React from "react";
import { withRouter } from "react-router-dom";
import style from "./AboutPage.module.css";
import image from "../../Assets/anish-pic.jpg";
import Container from "react-bootstrap/Container";

const AboutPage = () => {
  return (
    <Container className={`${style.container} d-flex justify-content-around`}>
      <div
        className={`d-flex flex-column align-self-center align-items-center bg-dark p-2 rounded-lg`}
        style={{
          color: "white",
          fontFamily: "'Mitr', sans-serif",
          fontWeight:200
        }}
      >
        <img
          src={image}
          alt=""
          height="150px"
          width="150px"
          className={`rounded-circle`}
        />
        <span>Made By:</span>
        <span style={{ fontWeight: 400, fontSize: 25 }}>Anish Saha</span>
        <span className="d-flex text-center  justify-content-center flex-wrap" >
          <span className="d-flex flex-column align-items-center m-3">
            <i className="bi bi-github h3"></i>
            anishsaha61
          </span>
          <span className="d-flex flex-column align-items-center m-3">
            <i className="bi bi-envelope-fill h3"></i>
            anishsaha61@gmail.com
          </span>
          <span className="d-flex flex-column align-items-center m-3">
            <i className="bi bi-pin-map-fill h3"></i>
            Kolkata, 700064
          </span>
        </span>
        <span>
        <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />
        Anish Saha 2021
        </span>
      </div>
    </Container>
  );
};

export default withRouter(AboutPage);
