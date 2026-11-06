import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { ListGroup } from "react-bootstrap";

export function UserAccount() {
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

              <h2>MovieFan123</h2>
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
                  <h3>42</h3>
                  <p>Movies Reviewed</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <h3>18</h3>
                  <p>Watchlist</p>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="text-center">
                <Card.Body>
                  <h3>Sci-Fi</h3>
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
                  Email: user@email.com
                </ListGroup.Item>

                <ListGroup.Item>
                  Username: MovieFan123
                </ListGroup.Item>

                <ListGroup.Item>
                  Notifications: Enabled
                </ListGroup.Item>
              </ListGroup>

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

                <Button variant="outline-danger">
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