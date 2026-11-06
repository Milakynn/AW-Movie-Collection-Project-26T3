import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";

export function WriteAReview() {
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
                  <Form.Control
                    type="text"
                    placeholder="Movie name"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Rating</Form.Label>
                  <Form.Select>
                    <option>Select Rating</option>
                    <option>⭐ 1</option>
                    <option>⭐ 2</option>
                    <option>⭐ 3</option>
                    <option>⭐ 4</option>
                    <option>⭐ 5</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Review Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Give your review a title"
                  />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Review</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Share your thoughts..."
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Check
                    type="checkbox"
                    label="Contains Spoilers"
                  />
                </Form.Group>

                <Button variant="primary" className="w-100">
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