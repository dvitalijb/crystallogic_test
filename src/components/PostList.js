import React, {Component} from 'react';
//import PropTypes from 'prop-types';
import { PostHandler } from './PostHandler';
import {ModalComments} from "./ModalComments";
import {ModalAuthor} from "./ModalAuthor";
import {cancelSavePost} from "../redux/actions";

export class PostList extends Component  {

  constructor(props) {
    super(props);


  }

  componentDidMount(){
    this.props.handleClick();
  }

  render(){
    const {
      requested,
      usersLoaded,
      postsLoaded,
      commentsLoaded,
      filterChanged,
      handleClick,
      posts,
        comments,
      modalCommentsVisible,
      modalAuthorVisible,
      postId,
      currentPostId,
      currentUserId,
      hideModalComments,
      hideModalAuthor,
      changeNewPostTitle,
      changeNewPostText,
      cancelSavePost,
      showPost,
      hidePost,
      usersMap,
      chosenPostId,
      postCreating,
      createPost,
      savePost,
    } = this.props;

    if(postCreating){
      return(
          <>
            <input
                type="text"
                placeholder="title"

                 onChange={(event) => changeNewPostTitle(event)}
            />
            <input
                type="text"
                placeholder="text"

                onChange={(event) => changeNewPostText(event)}
            />
            <button
                type="button"
                onClick={savePost}
            >
              Save
            </button>
            <button
                type="button"
                onClick={cancelSavePost}
            >
              Cancel
            </button>
          </>
      )
    }

    if(chosenPostId) {
        const post = posts.filter(postItem => postItem.id === chosenPostId);
        const commentItems = comments.map(
            commentItem => commentItem.postId === post[0].id
            ? <li><h3>{commentItem.title}</h3><span>{commentItem.body}</span></li>
                : null
        );


      return(
          <>
            <h1>{post[0].title}</h1>
            <p>{post[0].body}</p>
            <ul>{commentItems}</ul>
            <button
                type="button"
                onClick={hidePost}
            >
              Back to posts
            </button>
          </>
      )
    }


    if (!requested) {
      // return (
      //     <button
      //         type="button"
      //         onClick={handleClick}
      //     >
      //       Download posts!
      //     </button>
      // );
    } if (usersLoaded && postsLoaded && commentsLoaded) {
      const items = posts.map((post, index) => (
          <PostHandler
              key={post.id}
              userId={post.userId}
              title={post.title}
              body={post.body}
              id={post.id}
              index={index}
          />
      ));

      return (
          <div>

            <button
                type="button"
                onClick={createPost}
            >
              Create Post
            </button>

            <ModalAuthor
                currentUserId={currentUserId}
                usersMap={usersMap}
                hideModalAuthor={hideModalAuthor}
                modalAuthorVisible={modalAuthorVisible}
            />

                <ModalComments
                comments={comments}
                currentPostId={currentPostId}
                modalCommentsVisible={modalCommentsVisible}
                hideModalComments={hideModalComments}
            />

            <table>
              <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Comments</th>
                <th>User</th>
              </tr>
              </thead>
              <tbody>
              {items}
              </tbody>
            </table>
          </div>
      );
    }
    return (
        <button type="button" disabled>Loading...</button>
    );
  }
}


// export function PostList(props) {
//   const {
//     requested,
//     usersLoaded,
//     postsLoaded,
//     commentsLoaded,
//     filterChanged,
//     handleClick,
//     posts,
//   } = props;
//   if (!requested) {
//     return (
//       <button
//         type="button"
//         onClick={handleClick}
//       >
//         Download posts!
//       </button>
//     );
//   } if (usersLoaded && postsLoaded && commentsLoaded) {
//     const items = posts.map((post, index) => (
//       <PostHandler
//         key={post.id}
//         userId={post.userId}
//         title={post.title}
//         body={post.body}
//         id={post.id}
//         index={index}
//       />
//     ));
//
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="search by title"
//           onChange={filterChanged}
//         />
//         <table>
//           <thead>
//             <tr>
//               <th>Post</th>
//               <th>User</th>
//               <th>Comments</th>
//             </tr>
//           </thead>
//           <tbody>
//             {items}
//           </tbody>
//         </table>
//       </div>
//     );
//   }
//   return (
//     <button type="button" disabled>Loading...</button>
//   );
// }

// PostList.propTypes = {
//   requested: PropTypes.bool.isRequired,
//   usersLoaded: PropTypes.bool.isRequired,
//   postsLoaded: PropTypes.bool.isRequired,
//   commentsLoaded: PropTypes.bool.isRequired,
//   filterChanged: PropTypes.func.isRequired,
//   handleClick: PropTypes.func.isRequired,
//   posts: PropTypes.arrayOf(PropTypes.object),
// };
//
// PostList.defaultProps = {
//   posts: null,
// };
