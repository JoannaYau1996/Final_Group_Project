
import 'bootstrap/dist/css/bootstrap.min.css';
import { formatISO9075 } from 'date-fns';
import './Post.css';
export default function Comment({
  comment,
  createdAt,
  
}) {
  return (
    <>
      <tr
        className=" row w-100 align-items-center d-none d-md-flex"
        style={{
          borderBottom: ' #04b6163b solid 1px',
        }}>
        <td className="text-start col-md-8 px-3 px-sm-5 py-3 smallborder">
          <p className="fw-light d4d4 m-0">
            {comment}
          </p>
        </td>

        <td className="col-2 p-md-3 text-start ">
          <p className="fw-light d4d4">
            {formatISO9075(new Date(createdAt))}
          </p>
        </td>
      </tr>
      {/**-------------------------------------------------------------------------------- */}
      <tr
        className="row w-100 align-items-center d-md-none "
        style={{
          borderBottom: ' #04b6163b solid 1px',
          minWidth: '0',
        }}>
        <td className="col-12 py-4 px-2 d-block">
          <p className="fw-light d4d4 m-0">
            {comment}
          </p>
          <p className="fw-light d4d4">
            {formatISO9075(new Date(createdAt))}
          </p>
        </td>
      </tr>
    </>
  );
}