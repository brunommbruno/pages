import { Navbar } from "react-bootstrap";
import logo from "../img/logo.png";

const Nav = () => {
  return (
    <Navbar bg="white" variant="light" fixed="top">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Pages
      </Navbar.Brand>
    </Navbar>
  );
};

export default Nav;
