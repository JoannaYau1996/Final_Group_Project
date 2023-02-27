import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const date = new Date();
  const currentDate = date.toLocaleDateString("en-US");

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author, currentDate };

    fetch("http://localhost:8000/posts/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    }).then(() => {
      navigate("/post");
    });
  };

  return (
    <div className="container-fluid text-center w-100 mt-4">
      <h4 className="d4d4 fs-4 fw-bold py-3">{`< Create Post />`}</h4>
      <div className="container" style={{ maxWidth: "600px" }}>
        <div className="row">
          <div className="col-12">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 text-start" controlId="title">
                <Form.Label className="green fw-bold ">title: </Form.Label>
                <Form.Control
                  type="text"
                  className="rounded-0"
                  style={{ background: "#d4d4d4" }}
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="body">
                <Form.Label className="green fw-bold">body: </Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  className="rounded-0"
                  style={{ background: "#d4d4d4" }}
                  required
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3 text-start" controlId="author">
                <Form.Label className="green fw-bold">author: </Form.Label>
                <Form.Control
                  type="text"
                  rows={10}
                  className="rounded-0"
                  style={{ background: "#d4d4d4" }}
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                />
              </Form.Group>

              <Button id="postbtn" type="submit" className="text-align-center">
                Create
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
