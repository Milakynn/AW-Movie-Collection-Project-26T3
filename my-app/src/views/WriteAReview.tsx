import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";

interface Movie {
  movie_id: string;
  title: string;
}

export function WriteAReview() {

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieId, setMovieId] = useState("");
  const [rating, setRating] = useState("");
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    fetch("http://localhost/cinecollect-api/getMovies.php")
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const publishReview = async () => {

    const userId =
        localStorage.getItem("user_id");

    if(!userId){
        alert("Please login first.");
        return;
    }

    if (!movieId) {
      alert("Please select a movie.");
      return;
    }

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
                movie_id: movieId,
                review_text: reviewText,
                review_rating: rating
            })
        }
    );

    const data = await response.json();

    if (data.success) {

      alert("Review published!");

      window.location.href = "/";

    } else {

        alert(data.message);

    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="shadow">
            <Card.Body>
              <h2 className="mb-4">Write a Review</h2>

              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Movie Title</Form.Label>
                    <Form.Select value={movieId} onChange={(e) => setMovieId(e.target.value)}>
                      <option value="">
                        Select Movie
                      </option>

                      {movies.map((movie) => (
                        <option
                          key={movie.movie_id}
                          value={movie.movie_id}
                        >
                          {movie.title}
                        </option>
                      ))}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <option value="">Select Rating</option>
                    <option value="1">⭐ 1</option>
                    <option value="2">⭐ 2</option>
                    <option value="3">⭐ 3</option>
                    <option value="4">⭐ 4</option>
                    <option value="5">⭐ 5</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your thoughts..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Contains Spoilers"
                  />
                </Form.Group>

                <Button variant="primary" className="w-100" onClick={publishReview}>
                    Publish Review
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}