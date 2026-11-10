import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

//link to backend
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

// Connects to getMovies database
interface Movie {
    movie_id: string;
    title: string;
    description: string;
    genre: string;
    release_year: string;
    runtime: string;
    image_url: string;
    rating: string;
}

// Connects to getCast database
// interface CastMember {
//     actor_name: string;
// }

// Connects to getReviews database
// interface Review {
//     review_text: string;
//     review_rating: string;
// }

export function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);

  // const [cast, setCast] = useState<CastMember[]>([]);

  // const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    fetch(
        `http://localhost/cinecollect-api/getMovieDetails.php?id=${id}`
    )
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => console.error(error));
  }, [id]);

  if (!movie) {
    return <h2>Loading movie...</h2>;
  }

  // Cast
  // useEffect(() => {

  //   fetch(
  //     `http://localhost/cinecollect-api/getCast.php?movie_id=${id}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setCast(data)
  //       console.log(data)
  //     })
  //     .catch((error) => console.error(error));


  // }, [id]);

  // Reviews
  // useEffect(() => {

  //   fetch(
  //     `http://localhost/cinecollect-api/getReviews.php?movie_id=${id}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setReviews(data));

  // }, [id]);

  return (
    <Container className="py-4">

      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img
              variant="top"
              src={movie.image_url}
              alt={movie.title}
            />
          </Card>
        </Col>

        <Col md={8}>
          <h1>{movie.title}</h1>

          <p>
            ⭐ <strong>{movie.rating}</strong>
          </p>

          <p>
            <strong>Genre:</strong> {movie.genre}
          </p>

          <p>
            <strong>Release Year:</strong> {movie.release_year}
          </p>

          <p>
            <strong>Runtime:</strong> {movie.runtime}
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
            {movie.description}
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Cast</Card.Title>

          <ListGroup variant="flush">
            {/* {cast.map((actor, index) => (
              <ListGroup.Item key={index}>
                  {actor.actor_name}
              </ListGroup.Item>
            ))} */}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>
          <Card.Title>Community Reviews</Card.Title>
          {/* {reviews.map((review, index) => (
            <p key={index}>
                ⭐ {review.review_rating}
                {" "}
                {review.review_text}
            </p>
          ))} */}
        </Card.Body>
      </Card>

    </Container>
  );
}