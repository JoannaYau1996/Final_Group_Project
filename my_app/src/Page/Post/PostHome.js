import { Link } from "react-router-dom";
import BlogList from "./PostList";
import useFetch from "./useFetch";

const PostHome = () => {
  // call the hook
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      <Link to="./create">Create New Post</Link>
      <hr />
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default PostHome;
