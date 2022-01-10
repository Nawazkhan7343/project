import React from "react";
import { Card } from "react-bootstrap";

export const Movie = ({ item }) => {
  return (
    <div
      style={{
        float: "left",
        marginLeft: "100px",
        // marginBottom: "50px",
        marginTop: "60px",
      }}
    >
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{item.Name}</Card.Title>
          <Card.Text>{item.Rating}</Card.Text>
          <Card.Text>{item.Released}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
