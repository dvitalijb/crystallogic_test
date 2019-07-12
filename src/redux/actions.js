import { loadData } from './loadData';
import { getData } from '../utils';

export const REQUESTED = 'requested';
export const DISPLAY_USERS = 'users_ready';
export const DISPLAY_COMMENTS = 'comments_ready';
export const DISPLAY_POSTS = 'posts_ready';
export const SHOW_POST = 'show_post';
export const HIDE_POST = 'hide_post';
export const CREATE_POST = 'create_post';

export const CHANGE_NEW_POST_TITLE = 'change_new_post_title';
export const CHANGE_NEW_POST_TEXT = 'change_new_post_text';

export const SAVE_POST = 'save_post';
export const CANCEL_SAVE_POST = 'save_post';


export const CHANGE_PAGE = 'change_page';







export const SHOW_COMMENTS = 'show_comments';
export const HIDE_COMMENTS = 'hide_comments';
export const SHOW_AUTHOR = 'show_author';
export const HIDE_AUTHOR = 'hide_author';
export const FILL_DATA = 'fill_data';

const url = 'https://jsonplaceholder.typicode.com/';

export function loadTodos() {
  return (dispatch) => {
    dispatch({
      type: 'requested',
    });

    Promise.all([
      getData(`${url}posts`),
      getData(`${url}users`),
      getData(`${url}comments`),
    ])
      .then(([posts, users, comments]) => {
        dispatch(fillData({posts, users, comments}));

      });


    // const resultResponse =  loadData();
    // resultResponse.then(rsp=>{
    //   console.log(rsp)
    //   dispatch(displayUsers(rsp.users));
    //   dispatch(displayPosts(rsp.posts));
    //   dispatch(displayComments(rsp.comments));
    // })
    // dispatch(displayUsers(resultResponse.payloadUsers));
    // dispatch(displayPosts(resultResponse.payloadPosts));
    // dispatch(displayComments(resultResponse.payloadComments));

    // const respUsers = displayUsers();
    // const respPost = displayPosts();
    // const respCom = displayComments()
    //
    // dispatch(respUsers);
    // dispatch(respPost);
    // dispatch(respCom);

    // loadData();
    // async function loadData() {
    //   const url = 'https://jsonplaceholder.typicode.com/';
    //   const postsPromise = fetch(`${url}posts`);
    //   const usersPromise = fetch(`${url}users`);
    //   const commentsPromise = fetch(`${url}comments`);
    //   const [
    //     postsResponse,
    //     usersResponse,
    //     commentsResponse,
    //   ] = await Promise.all([
    //     postsPromise,
    //     usersPromise,
    //     commentsPromise,
    //   ]);
    //
    //   const posts = await postsResponse.json();
    //   const users = await usersResponse.json();
    //   const comments = await commentsResponse.json();
    //
    //   const payloadPosts = {
    //     postsLoaded: true,
    //     posts: posts,
    //     posts,
    //   };
    //
    //   const payloadUsers = {
    //     usersLoaded: true,
    //     users,
    //   };
    //
    //   const payloadComments = {
    //     commentsLoaded: true,
    //     comments,
    //   };
    //   dispatch(displayUsers(payloadUsers));
    //   dispatch(displayPosts(payloadPosts));
    //   dispatch(displayComments(payloadComments));
    // }
  };
}

export function fillData(data) {
  return {
    type: FILL_DATA,
    payload: data,
  }
}


// export function displayUsers(users) {
//   return {
//     type: DISPLAY_USERS,
//     payload: {
//           usersLoaded: true,
//           users,
//     },
//   };
// }
//
// export function displayPosts(posts) {
//   return {
//     type: DISPLAY_POSTS,
//     payload: {
//           postsLoaded: true,
//           posts: posts,
//           posts,
//     },
//   };
// }
//
// export async function displayComments(comments) {
//   return {
//     type: DISPLAY_COMMENTS,
//     payload: {
//       commentsLoaded: true,
//       comments,
//     },
//   };
// }

// export function filterChanged(payload) {
//   return {
//     type: SHOW_POST,
//     payload,
//   };
// }

export function showModalComments(currentPostId) {

  return {
    type: SHOW_COMMENTS,
    payload: currentPostId,
  };
}

export function hideModalComments() {
  return {
    type: HIDE_COMMENTS,
  };
}

export function showModalAuthor(currentUserId) {

  return {
    type: SHOW_AUTHOR,
    payload: currentUserId,
  };
}

export function hideModalAuthor() {
  return {
    type: HIDE_AUTHOR,
  };
}

export function showPost(id) {
  return {
    type: SHOW_POST,
    payload: id,
  };
}

export function hidePost() {
  return {
    type: HIDE_POST,
  };
}

export function createPost() {
  return {
    type: CREATE_POST,
  };
}

export function changeNewPostTitle(value) {
  return {
    type: CHANGE_NEW_POST_TITLE,
    payload: value,
  };
}

export function changeNewPostText(value) {
  return {
    type: CHANGE_NEW_POST_TEXT,
    payload: value,
  };
}

export function savePost() {
  return {
    type: SAVE_POST,
  };
}

export function cancelSavePost() {
  return {
    type: CANCEL_SAVE_POST,
  };
}

export function changePage(numberPage) {
  return {
    type: CHANGE_PAGE,
    payload: numberPage,
  };
}


// ------------------------------------------------------------------------
// import { getData } from '../utils';
//
// export const DATA_REQUESTED = 'dataRequested';
// export const DATA_LOADED = 'dataLoaded';
//
// export const dataRequested = () => {
//   return dispatch => {
//     dispatch({
//       type: DATA_REQUESTED
//     });
//     Promise.all([
//       getData('https://jsonplaceholder.typicode.com/posts'),
//       getData('https://jsonplaceholder.typicode.com/users'),
//       getData('https://jsonplaceholder.typicode.com/comments')
//     ])
//         .then(([posts, users, comments]) => {
//           const commentsMap = {};
//           comments.forEach(el => {
//             commentsMap[el.postId] ? commentsMap[el.postId].push(el) : commentsMap[el.postId] = [el];
//           });
//
//           const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});
//
//           const postsList = posts.map(post => ({
//             ...post, comments: commentsMap[post.id], user: usersMap[post.userId]
//           }))
//
//           dispatch({
//             type: DATA_LOADED,
//             payload: postsList
//           });
//         })
//   }
// }
//
// export const dataLoaded = (payload) => ({
//   type: DATA_LOADED,
//   payload
// })
//
// }
