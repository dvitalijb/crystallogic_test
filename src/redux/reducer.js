import {
  REQUESTED,
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
  CANCEL_SAVE_POST, CHANGE_PAGE,
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
  newPost: null,
  activePage: 1,
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
    newPost: {
      userId : 1,
      title: state.newPostTitle.trim(),
      text: state.newPostText.trim(),
    },
    newPostTitle: '',
    newPostText: '',
    postCreating: false,
  }),
  [CANCEL_SAVE_POST]: state => ({
    ...state,
    newPostTitle: '',
    newPostText: '',
    postCreating: null,
  }),
  [CHANGE_PAGE]: (state, action) => ({
    ...state,
    activePage: action.payload,
  }),
};

export const reducer = (state = initialState, action) => {

  const handler = actionHandlers[action.type];
  return handler
    ? handler(state, action)
    : state;
};
