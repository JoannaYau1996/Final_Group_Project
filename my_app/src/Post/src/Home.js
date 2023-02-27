import PostList from "./PostList";
import useFetch from "./useFetch";
import Loading from "./Loading";

const Home = () => {
  const {
    error,
    isPending,
    data: posts,
  } = useFetch("http://localhost:8000/posts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && (
        <div>
          <Loading />
        </div>
      )}
      {posts && <PostList posts={posts} />}
    </div>
  );
};

export default Home;
