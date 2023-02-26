import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import "./Contact.css";

function Contact() {
  function submit(e) {
    alert("Message submit successfully. We will contact you soon~");
  }

  return (
    <div
      className="container-fluid text-center w-100 contact"
      style={{ minHeight: "650px", paddingBottom: "100px" }}
    >
      <h4 className="d4d4 fs-4 fw-bold my-5 pt-5">{`< Contact Us />`}</h4>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="row">
          <div className="col-12">
            <Form
              style={{ maxWidth: "100%" }}
              action="https://formsubmit.co/36e01b9dfa5976ecf3157de571055ccf"
              id="target"
              method="POST"
              onSubmit={submit}
            >
              <input type="text" name="_honey" style={{ display: "none" }} />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/"
              />

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="green fw-bold" htmlFor="name">
                  Name{" "}
                </Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="rounded-0 name"
                  style={{ background: "#d4d4d4" }}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="green fw-bold" htmlFor="email">
                  Email address{" "}
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  className="rounded-0 email"
                  style={{ background: "#d4d4d4" }}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="green fw-bold" htmlFor="message">
                  Message{" "}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  id="message"
                  placeholder="Hi, Feel Free To Contact Us :D"
                  rows={10}
                  className="rounded-0 msg"
                  style={{ background: "#d4d4d4" }}
                  required
                />
              </Form.Group>
              <input type="hidden" value="" name="url" />
              <Button type="submit" id="contactbtn">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
