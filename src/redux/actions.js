import { loadData } from './loadData';
import { getData } from '../utils';

export const REQUESTED = 'requested';
export const DISPLAY_USERS = 'users_ready';
export const DISPLAY_COMMENTS = 'comments_ready';
export const DISPLAY_POSTS = 'posts_ready';
export const FILTER_CHANGED = 'new_filter';
export const POST_ITEM_REMOVE = 'post_remove';
export const COMMENT_ITEM_REMOVE = 'comment_remove';
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
        console.log([posts, users, comments])
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
    //     filteredPosts: posts,
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
//           filteredPosts: posts,
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

export function filterChanged(payload) {
  return {
    type: FILTER_CHANGED,
    payload,
  };
}

export function removePost(index) {
  return {
    type: POST_ITEM_REMOVE,
    payload: index,
  };
}

export function removeComment(id) {
  return {
    type: COMMENT_ITEM_REMOVE,
    payload: id,
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
