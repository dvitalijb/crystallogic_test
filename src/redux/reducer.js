import {
  REQUESTED,
  DISPLAY_USERS,
  DISPLAY_COMMENTS,
  DISPLAY_POSTS,
  CREATE_POST,
  SHOW_POST,
  HIDE_POST,
  SHOW_COMMENTS,
  HIDE_COMMENTS,
  FILL_DATA,
  SHOW_AUTHOR,
  HIDE_AUTHOR,
  CHANGE_NEW_POST_TITLE,
  CHANGE_NEW_POST_TEXT,
  SAVE_POST,
  CANCEL_SAVE_POST,
} from './actions';

const initialState = {
  requested: false,
  usersLoaded: false,
  postsLoaded: false,
  commentsLoaded: false,
  usersMap: null,
  comments: null,
  posts: null,
  currentPostId : null,
  currentUserId : null,
  modalCommentsVisible: null,
  modalAuthorVisible: null,
  chosenPostId: null,
  postCreating: null,
  newPostTitle: '',
  newPostText: '',
  savedPosts: null,
};

const actionHandlers = {
  [REQUESTED]: state => ({
    ...state,
    requested: true,
  }),
  [FILL_DATA]:(state, action) => {
       const { posts } = action.payload;
    return {
      ...state,
      usersLoaded: true,
      usersMap: action.payload.users
          .reduce((acc, user) => ({ ...acc, [user.id]: user }), {}),
        commentsLoaded: true,
        comments: action.payload.comments,
      postsLoaded: true,
      posts,
    }
  },
  [SHOW_COMMENTS]: (state, action) => ({
    ...state,
    modalCommentsVisible : true,
    currentPostId: action.payload,
  }),
  [HIDE_COMMENTS]: state => ({
    ...state,
    modalCommentsVisible : false,
    currentPostId: null,
  }),
  [SHOW_AUTHOR]: (state, action) => ({
    ...state,
    modalAuthorVisible : true,
    currentUserId: action.payload,
  }),
  [HIDE_AUTHOR]: state => ({
    ...state,
    modalAuthorVisible : false,
    currentUserId: null,
  }),
  [SHOW_POST]: (state, action) => ({
    ...state,
    chosenPostId: action.payload,
  }),
  [HIDE_POST]: state => ({
    ...state,
    chosenPostId: null,
  }),
  [CREATE_POST]: state => ({
    ...state,
    postCreating: true,
  }),

  [CHANGE_NEW_POST_TITLE]: (state, action) => ({
    ...state,
    newPostTitle: action.payload,
  }),

  [CHANGE_NEW_POST_TEXT]: (state, action) => ({
    ...state,
    newPostText: action.payload,
  }),
  [SAVE_POST]: state => ({
    ...state,
    savedPosts: {
      userId : 1,
      title: state.newPostTitle,
      text: state.newPostText,
    },
    newPostTitle: '',
    newPostText: '',
    postCreating: null,
  }),
  [CANCEL_SAVE_POST]: state => ({
    ...state,
    newPostTitle: '',
    newPostText: '',
    postCreating: null,
  }),

  // [DISPLAY_USERS]: (state, action) => ({
  //   ...state,
  //   usersLoaded: true,
  //   usersMap: action.payload.users
  //     .reduce((acc, user) => ({ ...acc, [user.id]: user }), {}),
  // }),
  // [DISPLAY_COMMENTS]: (state, action) => ({
  //   ...state,
  //   commentsLoaded: true,
  //   comments: action.payload.comments,
  // }),
  // [DISPLAY_POSTS]: (state, action) => {
  //   const { posts } = action.payload;
  //   return {
  //     ...state,
  //     postsLoaded: true,
  //     posts: posts,
  //     posts,
  //   };
  // },
  // [SHOW_POST]: (state, action) => ({
  //   ...state,
  //   posts: state.posts.filter(post => post.title
  //     .includes(action.payload)),
  // }),
  // [SHOW_COMMENTS]: (state, action) => ({
  //   ...state,
  //   posts: state.posts.filter((todo, index) => index !== action.payload),
  //   posts: state.posts
  //     .filter((todo, index) => index !== action.payload),
  // }),
  // [HIDE_COMMENTS]: (state, action) => ({
  //   ...state,
  //   comments: state.comments.filter(todo => todo.id !== action.payload),
  // }),
};

export const reducer = (state = initialState, action) => {

  const handler = actionHandlers[action.type];
  return handler
    ? handler(state, action)
    : state;
};
