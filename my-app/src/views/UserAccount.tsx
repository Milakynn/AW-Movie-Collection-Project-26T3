import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";

interface Favorite {
    favorite_id: string;
    movie_id: string;
    title: string;
    genre: string;
    image_url: string;
}

export function UserAccount() {
  
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const username = localStorage.getItem("username") || "";

  const email = localStorage.getItem("email") || "";

  const [reviewCount, setReviewCount] = useState(0);

  const [favoriteCount, setFavoriteCount] = useState(0);

  const [favoriteGenre, setFavoriteGenre] = useState("None");


  useEffect(() => {

    const userId =
      localStorage.getItem("user_id");

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

  }, []);

  const removeFavorite = async (
    favoriteId: string
  ) => {

      try {

          const response = await fetch(
              "http://localhost/cinecollect-api/removeFavorite.php",
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

      } catch (error) {

          console.error(error);

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
              <p className="text-muted">
                Member since 2026
              </p>

              <Button variant="primary">
                Edit Profile
              </Button>

            </Card.Body>
          </Card>

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

          <Card className="mb-4">
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

          <Card>
            <Card.Body>
              <Card.Title>Quick Actions</Card.Title>

              <div className="d-grid gap-2">
                <Button variant="outline-primary">
                  Manage Watchlist
                </Button>

                <Button variant="outline-secondary">
                  View My Reviews
                </Button>

                <Button variant="outline-danger"
                  onClick={() => {

                    localStorage.removeItem("user_id");
                    localStorage.removeItem("username");
                    localStorage.removeItem("email");

                    window.location.href = "/login";

                  }}
                >
                  Sign Out
                </Button>
              </div>
            </Card.Body>
          </Card>

        </Col>
      </Row>
    </Container>
  );
}