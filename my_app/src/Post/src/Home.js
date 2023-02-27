import BlogList from "./PostList";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const Home = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <Nav className="m-auto my-2 my-lg-0 text-center">
        <Link
          to="/create"
          className="text-light mx-5 my-2 my-md-0 text-decoration-none"
        >
          New Post
        </Link>
      </Nav>
      <hr />

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;
