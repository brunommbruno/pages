import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Reservation = () => {
  return (
    <div className="reservation">
      <Container>
        <h1 className="logo">Lorem</h1>
        <Row className="main">
          <Col className="description">
            <h2>Reservations</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col>
            <h2 className="form-title">Reservations</h2>
            <Form className="form-box">
              <Form.Group controlId="formBasicName">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="formBasicDate" className="date">
                <Row>
                  <Col className="date-title">
                    <h4>When</h4>
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="dd" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="mm" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="yyyy" />
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group controlId="formBasicDate" className="date">
                <Row>
                  <Col className="date-title"></Col>
                  <Col>
                    <Form.Control type="text" placeholder="09" />
                  </Col>
                  <Col>
                    <Form.Control type="text" placeholder="00" />
                  </Col>
                  <Col>
                    <Form.Control as="select" defaultValue="AM">
                      <option>am</option>
                      <option>pm</option>
                    </Form.Control>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                  as="select"
                  defaultValue="2 People"
                  className="ppl"
                >
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6 People</option>
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type="submit">
                Make Reservation
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Reservation;
