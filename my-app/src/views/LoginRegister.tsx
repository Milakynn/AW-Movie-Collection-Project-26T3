import { Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Tab } from "react-bootstrap";
import { Tabs } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function LoginRegister() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "80vh" }}
    >
      <Card
        className="shadow-lg"
        style={{
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <Card.Body>
          <h2 className="text-center mb-4">Welcome to CineCollect</h2>

          <Tabs defaultActiveKey="login" className="mb-4" justify>
            <Tab eventKey="login" title="Login">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Enter your password"
                  />
                </Form.Group>

                <Button variant="primary" className="w-100">
                  Login
                </Button>
              </Form>
            </Tab>

            <Tab eventKey="register" title="Register">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Choose a username"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Create a password"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm your password"
                  />
                </Form.Group>

                <Button variant="success" className="w-100">
                  Register
                </Button>
              </Form>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  );
}