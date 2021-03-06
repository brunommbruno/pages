import { Component } from "react";
import { Form, Col } from "react-bootstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_check: "",
      tick_box: false,
    };
  }

  render() {
    const {
      first_name,
      last_name,
      email,
      password,
      password_check,
      tick_box,
    } = this.state;

    return (
      <div className="sign-up">
        <Col className="description">
          <h1>Sign up now to access premium features</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </Col>
        <Col className="form-box">
          {" "}
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Col>
      </div>
    );
  }
}

export default SignUp;
