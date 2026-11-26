import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Carousel }  from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Modal } from "react-bootstrap";

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

    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [description, setDescription] = useState("");
    const [releaseYear, setReleaseYear] = useState("");
    const [runtime, setRuntime] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [rating, setRating] = useState("");
    const [cast, setCast] = useState("");
    const [showAddMovieModal, setShowAddMovieModal] = useState(false);

  const addMovie = async () => {

    if (!title.trim()) {
      alert("Please enter a movie title.");
      return;
    }

    if (!genre) {
      alert("Please select a genre.");
      return;
    }

    if (!releaseYear.trim()) {
      alert("Please enter a release year.");
      return;
    }

    if (!/^\d{4}$/.test(releaseYear)) {
      alert("Release year must be 4 digits.");
      return;
    }

    if (!runtime.trim()) {
      alert("Please enter a runtime.");
      return;
    }

    if (!/^\d+\s*min$/i.test(runtime)) {
      alert("Runtime must be in format: 125 min");
      return;
    }

    if (!imageUrl.trim()) {
      alert("Please enter a poster URL.");
      return;
    }

    if (!rating) {
      alert("Please select a rating.");
      return;
    }

    if (!cast.trim()) {
      alert("Please enter at least one cast member.");
      return;
    }

    if (!description.trim()) {
      alert("Please enter a movie description.");
      return;
    }

    const response = await fetch(
      "http://localhost/cinecollect-api/addMovie.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          genre,
          description,
          release_year: releaseYear,
          runtime,
          image_url: imageUrl,
          rating,
          cast
        })
      }
    );

    const data = await response.json();
    // const text = await response.text();

    // console.log(text);

    if (data.success) {

      alert("Movie added!");

      fetch("http://localhost/cinecollect-api/getMovies.php")
        .then((response) => response.json())
        .then((data) => setMovies(data));

      setShowAddMovieModal(false);

      setTitle("");
      setGenre("");
      setDescription("");
      setReleaseYear("");
      setRuntime("");
      setImageUrl("");
      setRating("");
        setCast("");

    } else {

      alert(data.message);

    }

  };

    useEffect(() => {
    fetch("http://localhost/cinecollect-api/getMovies.php")
        .then((response) => response.json())
        .then((data) => {

          const shuffledMovies = [...data];

          for (
            let i = shuffledMovies.length - 1;
            i > 0;
            i--
          ) {

            const j = Math.floor(
              Math.random() * (i + 1)
            );

            [
              shuffledMovies[i],
              shuffledMovies[j]
            ] = [
              shuffledMovies[j],
              shuffledMovies[i]
            ];

          }

          setMovies(shuffledMovies);

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
          "http://localhost/cinecollect-api/addFavorites.php",
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

    const deleteMovie = async (
      movieId: string
    ) => {

      if (
        !window.confirm(
          "Are you sure you want to delete this movie?"
        )
      ) {
        return;
      }

      try {

        const response = await fetch(
          "http://localhost/cinecollect-api/deleteMovie.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              movie_id: movieId
            })
          }
        );

        const data =
          await response.json();

        if (data.success) {

          setMovies(
            movies.filter(
              (movie) =>
                movie.movie_id !== movieId
            )
          );

        } else {

          alert(data.message);

        }

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
                <Card.Img variant="top"
                  src={movie.image_url}
                  alt={movie.title}
                  onClick={() =>
                    window.location.href =
                      `/movie/${movie.movie_id}`
                  }
                  style={{
                    height: "300px",
                    objectFit: "cover",
                    cursor: "pointer"
                  }}
                />
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
                    {movie.description.substring(0, 80)}...
                  </Card.Text>

                  <Button
                    href={`/movie/${movie.movie_id}`}
                    variant="primary"
                  >
                    View Details
                  </Button>

                  <Button variant="outline-danger" className="ms-2"
                    onClick={() => addToFavorites(movie.movie_id)}
                  >
                    ❤ Favorite
                  </Button>

                  {
                    localStorage.getItem("is_admin") === "1" && (

                      <Button
                        variant="outline-warning"
                        className="ms-2"
                        onClick={() =>
                          deleteMovie(movie.movie_id)
                        }
                      >
                        Delete
                      </Button>

                    )
                  }
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

      {
        localStorage.getItem("is_admin") === "1" && (
          <Button variant="success" onClick={() => setShowAddMovieModal(true)}
            style={{
              position: "fixed",
              bottom: "90px",
              right: "30px",
              borderRadius: "50px",
              padding: "12px 20px",
              zIndex: 1000
            }}
          >
            + Add Movie
          </Button>
        )
      }

        <Modal show={showAddMovieModal}
          onHide={() =>
            setShowAddMovieModal(false)
          }
          centered
          size="lg"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              Add New Movie
            </Modal.Title>
          </Modal.Header>

          <Modal.Body>

            <Form.Control
              className="mb-3"
              placeholder="Movie Title"
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
            />

            <Form.Select
              className="mb-3"
              value={genre}
              onChange={(e) =>
                setGenre(e.target.value)
              }
            >
              <option value="">
                Select Genre
              </option>

              <option value="Action">
                Action
              </option>

              <option value="Romance">
                Romance
              </option>

              <option value="Thriller">
                Thriller
              </option>

              <option value="Horror">
                Horror
              </option>

              <option value="Sci-Fi">
                Sci-Fi
              </option>
            </Form.Select>

            <Form.Control
              className="mb-3"
              placeholder="Release Year"
              value={releaseYear}
              onChange={(e) =>
                setReleaseYear(e.target.value)
              }
            />

            <Form.Control
              className="mb-3"
              placeholder="Runtime"
              value={runtime}
              onChange={(e) =>
                setRuntime(e.target.value)
              }
            />

            <Form.Control
              className="mb-3"
              placeholder="Poster URL"
              value={imageUrl}
              onChange={(e) =>
                setImageUrl(e.target.value)
              }
            />

            <Form.Select className="mb-3" value={rating}
              onChange={(e) =>
                setRating(e.target.value)
              }
            >
              <option value="">
                Select Rating
              </option>

              <option value="1">
                ⭐ 1
              </option>

              <option value="2">
                ⭐ 2
              </option>

              <option value="3">
                ⭐ 3
              </option>

              <option value="4">
                ⭐ 4
              </option>

              <option value="5">
                ⭐ 5
              </option>

            </Form.Select>

            <Form.Control
              className="mb-3"
              placeholder="Cast (comma separated)"
              value={cast}
              onChange={(e) =>
                setCast(e.target.value)
              }
            />

            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Movie Description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
            />

          </Modal.Body>

      <Modal.Footer>

        <Button
          variant="secondary"
          onClick={() =>
            setShowAddMovieModal(false)
          }
        >
          Cancel
        </Button>

        <Button
          variant="success"
          onClick={addMovie}
        >
          Add Movie
        </Button>

      </Modal.Footer>

    </Modal>

    </Container>
  );
}