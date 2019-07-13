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
export const CANCEL_SAVE_POST = 'cancel_save_post';
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
  };
}

export function fillData(data) {
  return {
    type: FILL_DATA,
    payload: data,
  }
}

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
  alert('Saved successful!');
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
