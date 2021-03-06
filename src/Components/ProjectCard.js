import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProjectCard = ({ title, description, image, route }) => {
  return (
    <Card style={{ width: "22rem" }}>
      <div className="img-container">
        <Card.Img variant="top" src={image} />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Link to="/asd">
          <Button variant="primary">View Page</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
