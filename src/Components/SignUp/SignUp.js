import { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      password_check: "",
      tick_box: false,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e, name) {
    let obj = {};
    obj[name] = e.currentTarget.value;
    this.setState(obj);
  }

  render() {
    document.title = "Bruno Bruno - Sign Up";

    const { password, password_check } = this.state;

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
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => this.handleInput(e, "email")}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => this.handleInput(e, "password")}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordCheck">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                onChange={(e) => this.handleInput(e, "password_check")}
                className={
                  password === password_check ? null : "password-invalid"
                }
              />
              {password === password_check ? null : (
                <p className="password-invalid-p">Passwords must match</p>
              )}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Receive Emails Regarding New Features"
                onChange={(e) => this.handleInput(e, "tick_box")}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Sign Up
            </Button>
          </Form>
        </Col>
      </div>
    );
  }
}

export default SignUp;
