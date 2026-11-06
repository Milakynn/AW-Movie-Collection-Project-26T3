import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export function MovieDetails() {
  return (
    <Container className="py-4">

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500"
            />
          </Card>
        </Col>

        <Col md={8}>
          <h1>Interstellar</h1>

          <p>
            ⭐ <strong>8.9</strong>
          </p>

          <p>
            <strong>Genre:</strong> Sci-Fi
          </p>

          <p>
            <strong>Release Year:</strong> 2014
          </p>

          <p>
            <strong>Runtime:</strong> 169 Minutes
          </p>

          <Button href="/review" variant="primary">
            Write a Review
          </Button>
        </Col>
      </Row>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Synopsis</Card.Title>

          <Card.Text>
            A team of explorers travel through a wormhole
            in space in an attempt to ensure humanity's survival.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Cast</Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>Matthew McConaughey</ListGroup.Item>
            <ListGroup.Item>Anne Hathaway</ListGroup.Item>
            <ListGroup.Item>Jessica Chastain</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Community Reviews</Card.Title>

          <p>
            ⭐⭐⭐⭐⭐ Amazing visuals and storytelling.
          </p>

          <p>
            ⭐⭐⭐⭐ Great sci-fi movie with emotional depth.
          </p>
        </Card.Body>
      </Card>

    </Container>
  );
}