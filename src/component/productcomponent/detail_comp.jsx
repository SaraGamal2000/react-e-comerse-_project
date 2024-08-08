import React, { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Detail_comp({
  title = "No Title",
  price = "N/A",
  thumbnail = "https://via.placeholder.com/150",
  description = "No Description",
  rating = "N/A",
}) {
  const { id } = useParams();
  return (
    <Container>
      <Row className="justify-content-center">
        <Card className="mb-4" style={{ maxWidth: "600px" }}>
          <Card.Title>{id}</Card.Title>
          <Card.Img variant="top" src={thumbnail} alt={title} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>
              <strong>Price: ${price}</strong>
            </Card.Text>
            {rating && (
              <Card.Text>
                <strong>Rating: {rating}</strong>
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
