import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";

interface Favorite {
    favorite_id: string;
    movie_id: string;
    title: string;
    genre: string;
    image_url: string;
}

interface Review {
  review_id: string;
  title: string;
  review_text: string;
  review_rating: string;
}

export function UserAccount() {
  
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const [reviews, setReviews] = useState<Review[]>([]);

  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  const [email, setEmail] = useState(
    localStorage.getItem("email") || ""
  );

  const [password, setPassword] = useState("");

  const [isEditing, setIsEditing] = useState(false);

  const [reviewCount, setReviewCount] = useState(0);

  const [favoriteCount, setFavoriteCount] = useState(0);

  const [favoriteGenre, setFavoriteGenre] = useState("None");


  useEffect(() => {

    const userId = localStorage.getItem("user_id");

    if (!userId) return;

    {/**---------------------SET FAVORITE----------------------- */}
    fetch(
      `http://localhost/cinecollect-api/getFavorites.php?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((data) => setFavorites(data))
      .catch((error) => console.error(error));

    {/**---------------------SET REVIEW COUNT----------------------- */}
    fetch(
      `http://localhost/cinecollect-api/getReviewCount.php?user_id=${userId}`
    )
    .then((response) => response.json())
    .then((data) => {
      setReviewCount(data.total_reviews);
    });

    {/**---------------------SET FAVORITE COUNT----------------------- */}
    fetch(
      `http://localhost/cinecollect-api/getFavoriteCount.php?user_id=${userId}`
    )
    .then((response) => response.json())
    .then((data) => {
      setFavoriteCount(data.total_favorites);
    });

    {/**---------------------SET FAVORITE GENRE----------------------- */}
    fetch(
      `http://localhost/cinecollect-api/getFavoriteGenre.php?user_id=${userId}`
    )
    .then((response) => response.json())
    .then((data) => {
      setFavoriteGenre(data.genre);
    });

    {/**---------------------SET USER REVIEWS----------------------- */}
    fetch(
      `http://localhost/cinecollect-api/getUserReviews.php?user_id=${userId}`
    )
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
      });

  }, []);

  const removeFavorite = async (
    favoriteId: string
  ) => {

      try {

          const response = await fetch(
              "http://localhost/cinecollect-api/removeFavorites.php",
              {
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json"
                  },
                  body: JSON.stringify({
                      favorite_id: favoriteId
                  })
              }
          );

          await response.json();

          setFavorites(
              favorites.filter(
                  (favorite) =>
                      favorite.favorite_id !== favoriteId
              )
          );

          setFavoriteCount(
            favoriteCount - 1
          );

      } catch (error) {

          console.error(error);

      }
  };

  const deleteReview = async (
    reviewId: string
  ) => {

    try {

      if(!window.confirm(
              "Delete this review?"
          )
      ){
          return;
      }

        const response = await fetch(
            "http://localhost/cinecollect-api/deleteReview.php",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    review_id: reviewId
                })
            }
        );

        const data = await response.json();

        if(data.success){

            setReviews(
                reviews.filter(
                    (review) =>
                        review.review_id !== reviewId
                )
            );

            setReviewCount(
                reviewCount - 1
            );

        }

    } catch(error){

        console.error(error);

    }

  };

  const updateProfile = async () => {

    const userId = localStorage.getItem("user_id");

    if (!username.trim()) {
      alert("Please enter a username.");
      return;
    }

    if (!email.trim()) {
      alert("Please enter an email.");
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|outlook|hotmail|yahoo|icloud)\.(com|com.au|net|org)$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    const response = await fetch(
      "http://localhost/cinecollect-api/updateProfile.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user_id: userId,
          username,
          email,
          password
        })
      }
    );

    const data = await response.json();

    if(data.success){

      localStorage.setItem(
        "username",
        username
      );

      localStorage.setItem(
        "email",
        email
      );

      alert("Profile updated");

      setPassword("");

      setIsEditing(false);

    } else {

      alert(data.message);

    }
  };

  return (
    <Container className="py-4">
      <Row className="justify-content-center">
        <Col lg={8}>

          <Card className="shadow-sm mb-4">
            <Card.Body className="text-center">

              <img
                src="https://via.placeholder.com/120"
                alt="Profile"
                className="rounded-circle mb-3"
              />

              <h2>{username}</h2>
              {
                localStorage.getItem("is_admin") === "1" && (

                  <p className="text-warning fw-bold">
                    👑 Administrator
                  </p>

                )
              }
              <p className="text-muted">
                Member since 2026
              </p>

              <Button variant="primary" onClick={() => setIsEditing(!isEditing)}>
                {isEditing ? "Cancel" : "Edit Profile"}
              </Button>

            </Card.Body>
          </Card>

          {isEditing && (

            <Card className="mb-4">
              <Card.Body>

                <h4>Edit Profile</h4>

                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>

                  <Form.Control
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>

                  <Form.Control
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>New Password</Form.Label>

                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                  />
                </Form.Group>

                <Button
                  onClick={updateProfile}
                >
                  Save Changes
                </Button>

              </Card.Body>
            </Card>

          )}

          <Row className="mb-4">

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <h3>{reviewCount}</h3>
                  <p>Movies Reviewed</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <h3>{favoriteCount}</h3>
                  <p>Watchlist</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <h3>{favoriteGenre}</h3>
                  <p>Favourite Genre</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Card>
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>

              <div className="d-grid gap-2">
                <Button variant="outline-primary"
                  onClick={() => {
                    document
                      .getElementById("my-favorites")
                      ?.scrollIntoView({
                        behavior: "smooth"
                      });
                  }}
                >
                  Manage Watchlist ({favoriteCount})
                </Button>

                <Button variant="outline-secondary"
                  onClick={() => {
                    document
                      .getElementById("my-reviews")
                      ?.scrollIntoView({
                        behavior: "smooth"
                      });
                  }}
                >
                  View My Reviews ({reviewCount})
                </Button>
              </div>
            </Card.Body>
          </Card>

          <Card className="mb-4">
            <Card.Body>
              <Card.Title>Account Information</Card.Title>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  {email}
                </ListGroup.Item>

                <ListGroup.Item>
                  Username: {username}
                </ListGroup.Item>

                <ListGroup.Item>
                  Notifications: Enabled
                </ListGroup.Item>
              </ListGroup>

            </Card.Body>
          </Card>

          <Card className="mb-4" id="my-favorites">
            <Card.Body>

                <Card.Title>
                    My Favorites
                </Card.Title>

                {favorites.length === 0 && (
                    <p>No favorites yet.</p>
                )}

                {favorites.map((movie) => (

                    <Card
                        key={movie.favorite_id}
                        className="mb-2"
                    >
                        <Card.Body>

                            <h5>
                                {movie.title}
                            </h5>

                            <p>
                                {movie.genre}
                            </p>

                            <Button
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                    removeFavorite(
                                        movie.favorite_id
                                    )
                                }
                            >
                                Remove
                            </Button>

                        </Card.Body>
                    </Card>

                ))}

            </Card.Body>
          </Card>

          <Card className="mb-4" id="my-reviews">
            <Card.Body>

              <Card.Title>
                My Reviews
              </Card.Title>

              {reviews.length === 0 && (
                <p>No reviews yet.</p>
              )}

              {reviews.map((review) => (

                <Card
                  key={review.review_id}
                  className="mb-2"
                >
                  <Card.Body>

                    <h5>
                      {review.title}
                    </h5>

                    <p>
                      ⭐ {review.review_rating}/5
                    </p>

                    <p>
                      {review.review_text}
                    </p>

                    <Button variant="outline-danger" size="sm"
                      onClick={() =>
                            deleteReview(
                                review.review_id
                            )
                        }
                    >
                        Delete Review
                    </Button>

                  </Card.Body>
                </Card>

              ))}

            </Card.Body>
          </Card>

          <Card className="mt-4">
            <Card.Body className="text-center">

              <Button
                variant="danger"
                onClick={() => {

                  localStorage.removeItem("user_id");
                  localStorage.removeItem("username");
                  localStorage.removeItem("email");
                  localStorage.removeItem("is_admin");

                  window.location.href = "/login";

                }}
              >
                Sign Out
              </Button>

            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}