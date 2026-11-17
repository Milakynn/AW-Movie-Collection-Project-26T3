import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

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
interface CastMember {
    actor_name: string;
}

// Connects to getReviews database
interface Review {
    review_text: string;
    review_rating: string;
    username: string;
}

export function MovieDetails() {

  const { id } = useParams();

  const [movie, setMovie] = useState<Movie | null>(null);

  const [cast, setCast] = useState<CastMember[]>([]);

  const [reviews, setReviews] = useState<Review[]>([]);

  const [showReviewModal, setShowReviewModal] = useState(false);

  const [rating, setRating] = useState("");

  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    fetch(
        `http://localhost/cinecollect-api/getMovieDetails.php?id=${id}`
    )
        .then((response) => response.json())
        .then((data) => setMovie(data))
        .catch((error) => console.error(error));
  }, [id]);

  // Cast
  useEffect(() => {

    fetch(
      `http://localhost/cinecollect-api/getCast.php?movie_id=${id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCast(data)
        console.log(data)
      })
      .catch((error) => console.error(error));


  }, [id]);

  // Reviews
  useEffect(() => {

    fetch(
      `http://localhost/cinecollect-api/getReviews.php?movie_id=${id}`
    )
      .then((response) => response.json())
      .then((data) => setReviews(data));

  }, [id]);

  if (!movie) {
    return <h2>Loading movie...</h2>;
  }

  const publishReview = async () => {

    const userId = localStorage.getItem("user_id");

    if (!rating) {
    alert("Please select a rating.");
    return;
  }

  if (!reviewText.trim()) {
    alert("Please enter a review.");
    return;
  }

    const response = await fetch(
      "http://localhost/cinecollect-api/addReview.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: userId,
          movie_id: id, // current movie
          review_rating: rating,
          review_text: reviewText
        })
      }
    );

    const data = await response.json();

    if (data.success) {

      alert("Review published!");

      fetch(
        `http://localhost/cinecollect-api/getReviews.php?movie_id=${id}`
      )
        .then((response) => response.json())
        .then((data) => setReviews(data));

      setShowReviewModal(false);

      setRating("");
      setReviewText("");

    } else {

      alert(data.message);

    }

  };

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

          <Button variant="primary" onClick={() => setShowReviewModal(true)}>
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
            {cast.map((actor, index) => (
              <ListGroup.Item key={index}>
                  {actor.actor_name}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>

      <Card>
        <Card.Body>

          <Card.Title>
            Community Reviews
          </Card.Title>

          {reviews.length === 0 && (
            <p>No reviews yet.</p>
          )}

          {reviews.map((review, index) => (

            <Card
              key={index}
              className="mb-2"
            >
              <Card.Body>

                <h6 className="mb-2">
                  ⭐ {review.review_rating}/5
                </h6>

                <p className="mb-2">
                  {review.review_text}
                </p>

                <small className="text-muted">
                  Reviewed by {review.username}
                </small>

              </Card.Body>
            </Card>

          ))}

        </Card.Body>
      </Card>

          <Modal show={showReviewModal} onHide={() => setShowReviewModal(false)} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>
                Review {movie?.title}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>

              <Form.Group className="mb-3">

                <Form.Label>
                  Rating
                </Form.Label>

                <Form.Select
                  value={rating}
                  onChange={(e) =>
                    setRating(e.target.value)
                  }
                >
                  <option value="">
                    Select Rating
                  </option>

                  <option value="1">⭐ 1</option>
                  <option value="2">⭐ 2</option>
                  <option value="3">⭐ 3</option>
                  <option value="4">⭐ 4</option>
                  <option value="5">⭐ 5</option>

                </Form.Select>

              </Form.Group>

              <Form.Group>

                <Form.Label>
                  Review
                </Form.Label>

                <Form.Control as="textarea" rows={4} value={reviewText}
                  onChange={(e) =>
                    setReviewText(e.target.value)
                  }
                  placeholder="Share your thoughts about this movie..."
                />

              </Form.Group>

            </Modal.Body>

            <Modal.Footer>

              <Button
                variant="secondary"
                onClick={() => setShowReviewModal(false)}
              >
                Cancel
              </Button>

              <Button variant="primary" onClick={publishReview}>
                Submit Review
              </Button>

            </Modal.Footer>

          </Modal>
    </Container>
    
  );
  
}