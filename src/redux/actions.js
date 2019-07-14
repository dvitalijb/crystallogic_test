import { getData } from '../utils';

export const CHANGE_NEW_POST_TITLE = 'change_new_post_title';
export const CHANGE_NEW_POST_TEXT = 'change_new_post_text';
export const CANCEL_SAVE_POST = 'cancel_save_post';
export const SHOW_COMMENTS = 'show_comments';
export const HIDE_COMMENTS = 'hide_comments';
export const SHOW_AUTHOR = 'show_author';
export const HIDE_AUTHOR = 'hide_author';
export const CREATE_POST = 'create_post';
export const CHANGE_PAGE = 'change_page';
export const FILL_DATA = 'fill_data';
export const SAVE_POST = 'save_post';
export const SHOW_POST = 'show_post';
export const HIDE_POST = 'hide_post';

const url = 'https://jsonplaceholder.typicode.com/';

export function loadData() {
  return (dispatch) => {
    Promise.all([
      getData(`${url}posts`),
      getData(`${url}users`),
      getData(`${url}comments`),
    ])
      .then(([posts, users, comments]) => {
        dispatch(fillData({ posts, users, comments }));
      });
  };
}

export function fillData(data) {
  return {
    type: FILL_DATA,
    payload: data,
  };
}

export function showModalComments(postId) {
  return {
    type: SHOW_COMMENTS,
    payload: postId,
  };
}

export function hideModalComments() {
  return {
    type: HIDE_COMMENTS,
  };
}

export function showModalAuthor(userId) {
  return {
    type: SHOW_AUTHOR,
    payload: userId,
  };
}

export function hideModalAuthor() {
  return {
    type: HIDE_AUTHOR,
  };
}

export function showPost(postId) {
  return {
    type: SHOW_POST,
    payload: postId,
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
