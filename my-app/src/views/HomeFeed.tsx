import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel }  from "react-bootstrap";

import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router";

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

export function HomeFeed() {
  
    const [movies, setMovies] = useState<Movie[]>([]);
    const [searchParams] = useSearchParams();
    const searchTerm = searchParams.get("query") || "";
    const [selectedGenre, setSelectedGenre] = useState<string>("All");

    useEffect(() => {
    fetch("http://localhost/cinecollect-api/getMovies.php")
        .then((response) => response.json())
        .then((data) => {
        setMovies(data);
        console.log(data);
        })
        .catch((error) => console.error(error));
    }, []);

    const addToFavorites = async (movieId: string) => {

      const userId = localStorage.getItem("user_id");

      if (!userId) {
        alert("Please login first.");
        return;
      }

      try {
        const response = await fetch(
          "http://localhost/cinecollect-api/addFavorite.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              user_id: userId,
              movie_id: movieId,
            }),
          }
        );

        const data = await response.json();

        console.log(data);

        alert(data.message);

      } catch (error) {
        console.error(error);
      }
    };

    const filteredMovies = movies.filter((movie: Movie) => {
      const matchesSearch =
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        movie.release_year.includes(searchTerm);

      const matchesGenre =
        selectedGenre === "All" ||
        movie.genre === selectedGenre;

      return matchesSearch && matchesGenre;
    });

  return (
    <Container fluid className="bg-dark text-light min-vh-100 p-4">
        <div className="text-center py-4">
            <h1 className="display-4 fw-bold text-primary">
                Welcome to CineCollect
            </h1>

            <p className="lead">
                Discover movies. Read reviews. Share your verdict.
            </p>
        </div>

        {searchTerm.trim() === "" && (
          <>
      <h2 className="fw-bold mb-4">Trending Now</h2>
        <Carousel
          className="mb-5"
          interval={5000}
          pause={false}
          wrap={true}
        >
  {movies.map((movie) => (
    <Carousel.Item key={movie.movie_id}>
      <img
        className="d-block w-100"
        src={
          movie.image_url ||
          "https://via.placeholder.com/1200x400"
        }
        alt={movie.title}
        style={{
          height: "400px",
          objectFit: "cover"
        }}
      />

      <Carousel.Caption>
        <h3>{movie.title}</h3>

        <p>
          ⭐ {movie.rating} • {movie.genre}
        </p>

        <Button
          href={`/movie/${movie.movie_id}`}
        >
          View Details
        </Button>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
</>
)}

      <h2 className="fw-bold mb-3">Categories</h2>
        <div className="d-flex flex-wrap gap-2 mb-5">

          <Button
            variant={selectedGenre === "All" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("All")}
          >
            All
          </Button>

          <Button
            variant={selectedGenre === "Romance" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("Romance")}
          >
            Romance
          </Button>

          <Button
            variant={selectedGenre === "Thriller" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("Thriller")}
          >
            Thriller
          </Button>

          <Button
            variant={selectedGenre === "Horror" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("Horror")}
          >
            Horror
          </Button>

          <Button
            variant={selectedGenre === "Action" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("Action")}
          >
            Action
          </Button>

          <Button
            variant={selectedGenre === "Sci-Fi" ? "primary" : "outline-light"}
            onClick={() => setSelectedGenre("Sci-Fi")}
          >
            Sci-Fi
          </Button>

        </div>

      {searchTerm && (
        <h4 className="mb-3 text-info">
          Search Results for "{searchTerm}"
        </h4>
      )}
      
        <h2 className="fw-bold mb-4">
          Browse Movies
        </h2>

        {filteredMovies.length === 0 && (
          <h5 className="text-warning">
            No movies found.
          </h5>
        )}
        <Row className="g-4 mb-5">
          {filteredMovies.map((movie) => (
            <Col md={4} key={movie.movie_id}>
              <Card
                bg="secondary"
                text="light"
                className="h-100"
              >
                <Card.Body>
                  <Card.Title>
                    {movie.title}
                  </Card.Title>

                  <Card.Text>
                    Genre: {movie.genre}
                  </Card.Text>

                  <Card.Text>
                    ⭐ {movie.rating}
                  </Card.Text>

                  <Card.Text>
                    {movie.description.substring(0, 100)}...
                  </Card.Text>

                  <Button
                    href={`/movie/${movie.movie_id}`}
                    variant="primary"
                  >
                    View Details
                  </Button>

                  <Button
                    variant="outline-danger"
                    onClick={() => addToFavorites(movie.movie_id)}
                  >
                    ❤ Favorite
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
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