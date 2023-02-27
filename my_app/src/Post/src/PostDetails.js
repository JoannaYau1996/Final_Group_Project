import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import Loading from "./Loading";
import CloseIcon from "@mui/icons-material/Close";
import Crop75Icon from "@mui/icons-material/Crop75";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import DeleteIcon from "@mui/icons-material/Delete";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    error,
    isPending,
  } = useFetch("http://localhost:8000/posts/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/posts/" + post.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/post");
    });
  };

  return (
    <div
      className="container-fluid  d4d4 text-center pt-5 mt-2 pb-5"
      style={{ maxWidth: "1000px" }}
    >
      {isPending && (
        <div>
          <Loading />
        </div>
      )}
      {error && <div>{error}</div>}
      {post && (
        <article className="artcontent">
          <h2 className="fw-bold mb-3">{post.title} </h2>
          <p className="green mb-5">Asked {post.currentDate}</p>
          <div
            className=" text-center position-relative py-1"
            style={{
              border: "#04b616 dashed 2px",
              color: "#04b616",
            }}
          >
            <p className="m-0">
              {"< Written by"}{" "}
              <span className="d4d4 fw-bold">{post.author}</span>
              {" /> "}
              <OverlayTrigger
                key="right"
                placement="right"
                overlay={<Tooltip id="right">Delete Post</Tooltip>}
              >
                <span className="green bin" onClick={handleClick}>
                  <DeleteIcon />
                </span>
              </OverlayTrigger>
              <span className="position-absolute end-0 pe-3 d-none d-sm-inline">
                <HorizontalRuleIcon /> <Crop75Icon /> <CloseIcon />
              </span>
            </p>
          </div>
          <div className="blogcontainer">
            <div className="text-start p-4 postbody">{post.body}</div>
            <p className="text-center"> -END-</p>
          </div>
        </article>
      )}
    </div>
  );
};

export default PostDetails;
