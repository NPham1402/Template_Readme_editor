import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import HoverExample from "./Hover";
function About(props) {
  return (
    <div>
      <Container>
        <Row>
          <h3 style={{ color: "red", textAlign: "center" }}>
            About for website
          </h3>
          <HoverExample />
        </Row>

        <Row>
          <Col style={{ padding: "5rem" }}>
            {" "}
            <Card style={{ width: "100%", textAlign: "center" }}>
              <Card.Body>
                <Card.Title>Do Pham Nguyen</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Developer
                </Card.Subtitle>
                <Card.Text>
                  I am studying at HUFLIT and my future career is a FullStack
                  Developer
                </Card.Text>
                <Card.Link href="https://github.com/NPham1402">
                  My Github
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ padding: "5rem" }}>
            <Card style={{ width: "100%", textAlign: "center" }}>
              <Card.Body>
                <Card.Title>The Source</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  durgeshsamariya / awesome-github-profile-readme-templates
                </Card.Subtitle>
                <Card.Text>
                  Thank for you everybody because of everyone's great template
                </Card.Text>
                <Card.Link href="https://github.com/durgeshsamariya/awesome-github-profile-readme-templates">
                  Let to visit
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <br></br>
      <h4 style={{}}>
        The source is taken from durgesh samariya
        /awesome-github-profile-readme-templates.Thank you very much for the
        best profile created by member in Repositories
      </h4>
    </div>
  );
}

export default About;
