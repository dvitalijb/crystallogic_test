import React from 'react';
//import PropTypes from 'prop-types';
import { User } from './User';
import { CommentList } from './CommentList';
import {Comments} from "./Comments";
import {PostTitle} from "./PostTitle";
import {Author} from "./Author";
import Modal from "react-awesome-modal";
import {showModalComments} from "../redux/actions";

export function Post(props) {

  const {
    postItemRemove,
    modalCommentsVisible,
      modalAuthorVisible,
      showPost,
      hidePost,
    showModalComments,
      showModalAuthor,
    usersMap,
    comments,
    userId,
    title,
    index,
    body,
    id,

  } = props;
  // const commentItems = comments.filter(comment => comment.postId === id);
  // const user = usersMap[userId];

  return (
    <tr>
      <td>
        {id}
      </td>
      <td>
          <a href="#"
              onClick={() =>showPost(id)}
          >{title}</a>


      </td>
      <td>
          <a href="#"
             onClick={() =>

                  showModalComments(id)
             }
          >Comments</a>

      </td>
      <td>
          <a href="#"
             onClick={() =>
                 // console.log(showModalComments, id)

                 showModalAuthor(userId)
             }
          > Author {props.userId}</a>
        {/*<User user={user} />*/}
      </td>
      {/*<td>*/}
      {/*  <span>{title}</span>*/}
      {/*  <p>{body}</p>*/}
      {/*  <button*/}
      {/*    type="button"*/}
      {/*    onClick={() => postItemRemove(index)}*/}
      {/*  >*/}
      {/*      Remove Post!*/}
      {/*  </button>*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <User user={user} />*/}
      {/*</td>*/}
      {/*<td>*/}
      {/*  <CommentList comments={commentItems} />*/}
      {/*</td>*/}
    </tr>
  );
}

// Post.propTypes = {
//   postItemRemove: PropTypes.func.isRequired,
//   comments: PropTypes.arrayOf(PropTypes.object).isRequired,
//   userId: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   index: PropTypes.number.isRequired,
//   body: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
//   usersMap: PropTypes.objectOf(PropTypes.shape({
//     1: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     2: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     3: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     4: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     5: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     6: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     7: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     8: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     9: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//     10: PropTypes.objectOf(PropTypes.shape({
//       id: PropTypes.number,
//       name: PropTypes.string,
//       phone: PropTypes.string,
//       username: PropTypes.string,
//       website: PropTypes.string,
//       company: PropTypes.objectOf(PropTypes.shape({
//         bs: PropTypes.string,
//         catchPhrase: PropTypes.string,
//         name: PropTypes.string,
//       })),
//       address: PropTypes.objectOf(PropTypes.shape({
//         city: PropTypes.string,
//         street: PropTypes.string,
//         suite: PropTypes.string,
//         zipcode: PropTypes.string,
//         geo: PropTypes.objectOf({
//           lat: PropTypes.string,
//           lng: PropTypes.string,
//         }),
//
//       })),
//
//     })),
//   })).isRequired,
// };
