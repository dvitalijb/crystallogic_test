import {
  REQUESTED,
  DISPLAY_USERS,
  DISPLAY_COMMENTS,
  DISPLAY_POSTS,
  FILTER_CHANGED,
  SHOW_COMMENTS,
  HIDE_COMMENTS,
  FILL_DATA, SHOW_AUTHOR, HIDE_AUTHOR,
} from './actions';

const initialState = {
  requested: false,
  usersLoaded: false,
  postsLoaded: false,
  commentsLoaded: false,
  usersMap: null,
  posts: null,
  comments: null,
  filteredPosts: null,
  currentPostId : null,
  currentUserId : null,
  modalCommentsVisible: null,
  modalAuthorVisible: null,
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
      filteredPosts: posts,
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
  //     filteredPosts: posts,
  //     posts,
  //   };
  // },
  // [FILTER_CHANGED]: (state, action) => ({
  //   ...state,
  //   filteredPosts: state.posts.filter(post => post.title
  //     .includes(action.payload)),
  // }),
  // [SHOW_COMMENTS]: (state, action) => ({
  //   ...state,
  //   posts: state.posts.filter((todo, index) => index !== action.payload),
  //   filteredPosts: state.posts
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
