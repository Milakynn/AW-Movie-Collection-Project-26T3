import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { Link } from "react-router";
import Carousel  from 'react-bootstrap/Carousel'

export function HomeFeed() {
  const movies = [
    {
      id: 1,
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: 8.9,
      image:
        "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=500",
    },
    {
      id: 2,
      title: "Dune",
      genre: "Adventure",
      rating: 8.4,
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    },
    {
      id: 3,
      title: "Blade Runner",
      genre: "Sci-Fi",
      rating: 8.2,
      image:
        "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=500",
    },
  ];

  return (
    <Container fluid className="bg-dark text-light min-vh-100 p-4">
      {/* <h1 className="fw-bold text-primary">CineCollect</h1>
      <p className="text-secondary">Discover your next favorite</p> */}

        <div className="text-center py-4">
            <h1 className="display-4 fw-bold text-primary">
                Welcome to CineCollect
            </h1>

            <p className="lead">
                Discover movies. Read reviews. Share your verdict.
            </p>
        </div>


      <Form className="mb-4">
        <Form.Control
          type="search"
          placeholder="Search movies, actors..."
        />
      </Form>

      <h2 className="fw-bold mb-4">Trending Now</h2>

        <Carousel className="mb-5" interval={3000} pause={false}>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200"
            alt="Interstellar"
            style={{
                height: "400px",
                objectFit: "cover"
            }}
            />

            <Carousel.Caption>
            <h3>Interstellar</h3>
            <p>Sci‑Fi Adventure</p>

            <Button href="/movie/1">
                View Details
            </Button>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200"
            alt="Dune"
            style={{
                height: "400px",
                objectFit: "cover"
            }}
            />

            <Carousel.Caption>
            <h3>Dune</h3>
            <p>Epic Adventure</p>

            <Button href="/movie/2">
                View Details
            </Button>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=1200"
            alt="Blade Runner"
            style={{
                height: "400px",
                objectFit: "cover"
            }}
            />

            <Carousel.Caption>
            <h3>Blade Runner</h3>
            <p>Cyberpunk Sci‑Fi</p>

            <Button href="/movie/3">
                View Details
            </Button>
            </Carousel.Caption>
        </Carousel.Item>

        </Carousel>

      <h2 className="fw-bold mb-3">Categories</h2>

        <div className="d-flex flex-wrap gap-2 mb-5">
            <Button variant="primary">All</Button>

            <Button variant="outline-light">
                Rom-Com
            </Button>

            <Button variant="outline-light">
                Thriller
            </Button>

            <Button variant="outline-light">
                Horror
            </Button>

            <Button variant="outline-light">
                Action
            </Button>

            <Button variant="outline-light">
                Sci-Fi
            </Button>
        </div>

      <h3 className="mt-5 mb-3">Latest Reviews</h3>

        <Row className="g-3">
            <Col md={4}>
                <Card bg="secondary" text="light">
                <Card.Body>
                    <Card.Title>Interstellar</Card.Title>
                    <Card.Text>
                    ⭐⭐⭐⭐⭐ Amazing visuals and storytelling.
                    </Card.Text>
                    <Button href="/movie/1" variant="primary">
                        View Details
                    </Button>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card bg="secondary" text="light">
                <Card.Body>
                    <Card.Title>Dune</Card.Title>
                    <Card.Text>
                    ⭐⭐⭐⭐ Great world-building and cinematography.
                    </Card.Text>
                    <Button href="/movie/2" variant="primary">
                        View Details
                    </Button>
                </Card.Body>
                </Card>
            </Col>

            <Col md={4}>
                <Card bg="secondary" text="light">
                <Card.Body>
                    <Card.Title>Blade Runner</Card.Title>
                    <Card.Text>
                    ⭐⭐⭐⭐⭐ A timeless sci-fi classic.
                    </Card.Text>
                    <Button href="/movie/3" variant="primary">
                        View Details
                    </Button>
                </Card.Body>
                </Card>
            </Col>
        </Row>

        <Button href="/review" variant="primary"
        style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            borderRadius: "50px",
            padding: "12px 20px",
            zIndex: 1000
        }}
        >
        + Write Review
        </Button>

    </Container>
  );
}