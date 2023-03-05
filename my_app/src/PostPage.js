import {
  useEffect,
  useState,
  useContext,
} from 'react';
import {
  Link,
  useParams,
} from 'react-router-dom';
import { formatISO9075 } from 'date-fns';
import Container from 'react-bootstrap/Container';
import './Postbox.css';
import { UserContext } from './UserContext';
import Button from 'react-bootstrap/esm/Button';
import CommentForm from './CommentForm';
import Comment from './Post/src/commetMinilayout';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  // const [commentDB, setCommentDB] = useState([]);
  const [comments, setComments] = useState([]);

  //    catch data
  useEffect(() => {
    fetch(
      `http://localhost:4000/post/${id}`,
    ).then(response => {
      response.json().then(postInfo => {
        setPostInfo(postInfo);
        // console.log(postInfo._id);
      });
    });
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost:4000/post/${id}/comment`,
    ).then(response => {
      response.json().then(comments => {
        setComments(comments);
      });
    });
  }, []);

  // for (let i = 0; i < commentDB.length; i++) {
  //   if (commentDB[i].postId === postInfo._id) {
  //     setComments(commentDB[i]);
  //   } else {
  //     console.log('i am not belong to this post');
  //   }
  // }

  if (!postInfo) return '';

  return (
    <Container className="post-page ">
      <h1 className=" text-light ">
        {postInfo.title}
      </h1>

      <div className="text-light ">
        by {postInfo.author.username}{' '}
        {formatISO9075(
          new Date(postInfo.createdAt),
        )}
      </div>
      {userInfo.id === postInfo.author._id && (
        <div className="text-light post-page-content">
          <Link
            className="py-2 px-3 my-2 "
            to={`/edit/${postInfo._id}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 px-1"
              style={{ height: '20px' }}>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
              />
            </svg>
            Edit this post
          </Link>
        </div>
      )}
      <div className="post-page-cover">
        <img
          src={`http://localhost:4000/${postInfo.cover}`}
        />
      </div>
      <div
        style={{ objectFit: 'scale-down' }}
        className="text-light  post-page-content"
        dangerouslySetInnerHTML={{
          __html: postInfo.content,
        }}
      />

      <CommentForm />

      <div>
        {comments.length > 0 &&
          comments.map(comments => (
            <Comment {...comments} /> // Post Component form PostMinLayout.js   {....post}
          ))}
      </div>
    </Container>
  );
}
