import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        marginTop: "50px",
        padding: "30px 0"
      }}
    >
      <Container>

        <Row>

          <Col md={4}>
            <h5>CineCollect</h5>

            <p>
              Discover movies, share reviews and
              build your personal watchlist.
            </p>
          </Col>

          <Col md={4}>
            <h5>Navigation</h5>

            <p>
              <a href="/"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Home
              </a>
            </p>

            <p>
              <a href="/account"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Account
              </a>
            </p>

            <p>
              <a href="/login"
                style={{
                  color: "white",
                  textDecoration: "none"
                }}
              >
                Login
              </a>
            </p>
          </Col>

          <Col md={4}>
            <h5>About</h5>

            <p>
              Website build by Lindsay Kuilagi
            </p>

            <p>
              Project manager Rhuan Figueiredo
            </p>

            <p>
              Administrator Phitthayarat Kadamduan
            </p>

            <p>
              AIT: Bachelor of Information Technology
            </p>
          </Col>

        </Row>

        <hr
          style={{
            borderColor: "#374151"
          }}
        />

        <p
          style={{
            textAlign: "center",
            marginBottom: 0
          }}
        >
          🍿 CineCollect • Discover • Review • Collect
        </p>

      </Container>
    </footer>
  );
}
