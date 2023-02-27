import Card from "react-bootstrap/Card";
import card01 from "./img/card01.png";
import card02 from "./img/card02.png";
import card03 from "./img/card03.png";
import card04 from "./img/card04.png";
import card05 from "./img/card05.png";
import card06 from "./img/card06.png";
import "./Card.css";

function BasicExample() {
  return (
    <div className="container my-5 text-center">
      <h4 className="d4d4 fs-4 fw-bold">{"< Article />"}</h4>
      <p className="d4d4 my-3 fw-light">Article about Web technology</p>
      <div className="row">
        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <Card.Img variant="top" src={card01} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                AI and Machine Learning
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget metus faucibus, porttitor eros in, porta ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Joanna@Yau 23/02/2023
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <Card.Img variant="top" src={card02} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                Types of Coding Languages Guide
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                Lorem ipsum dolor sit amet, consectetur faucibus, porttitor eros
                in, porta ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Kevin 19/02/2023
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <Card.Img variant="top" src={card03} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                Best Coding Games for Kids
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                Lorem ipsum dolor sit amet, consectetur faucibus, porttitor eros
                in, porta ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Stephanie 19/02/2023
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <Card.Img variant="top" src={card04} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                25 Best Coding Apps for Kids
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                eget metus faucibus, porttitor eros in, porta ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Joanna@Yau 18/02/202
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-4 h-100"
          >
            <Card.Img variant="top" src={card05} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                Android Apps by Coding on Google Play
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                faucibus, porttitor eros in, porta faucibus, porttitor eros in,
                porta...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Kevin 16/02/2023
              </p>
            </Card.Body>
          </Card>
        </div>

        <div className="col-12 col-md-4 my-3 d-flex justify-content-center">
          <Card
            style={{
              width: "100%",
              maxWidth: "20rem",
              border: "#04b616 solid 1px",
            }}
            bg="black"
            className="rounded-0 mb-5 h-100"
          >
            <Card.Img variant="top" src={card06} className="rounded-0" />
            <Card.Body>
              <Card.Title className="green fw-bold fs-4 my-4">
                Coding for Journalists
              </Card.Title>
              <Card.Text className="d4d4 fw-light">
                Lorem ipsum dolor sit amet, consectetur faucibus, porttitor eros
                in, porta ...
              </Card.Text>
              <p className="mt-3 fs-6 fw-bold text-light">
                BY Stephanie 13/02/2023
              </p>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
