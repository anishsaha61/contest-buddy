import React from "react";
import Container from "react-bootstrap/Container";
import MediaCard from "../MediaCard/MediaCard";

const LandingPage = ({ mediaCardData }) => {
  return (
    <Container fluid={true} className="d-flex flex-wrap justify-content-around">
      {mediaCardData.map((data) => (
        <MediaCard
          resourse_url={data.icon}
          id={data.id}
          key={data.id}
        />
      ))}
    </Container>
  );
};

export default LandingPage;
