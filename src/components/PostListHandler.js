import connect from 'react-redux/es/connect/connect';
import { PostList } from './PostList';
import {
  cancelSavePost,
  changeNewPostText,
  changeNewPostTitle,
  createPost,
  hideModalAuthor,
  hideModalComments, hidePost,
  loadTodos, savePost,
  showModalAuthor,
  showModalComments,
  showPost
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    requested: state.requested,
    usersLoaded: state.usersLoaded,
    postsLoaded: state.postsLoaded,
    commentsLoaded: state.commentsLoaded,

    posts: state.posts,
    comments: state.comments,
    modalCommentsVisible : state.modalCommentsVisible,
    modalAuthorVisible: state.modalAuthorVisible,
    currentPostId: state.currentPostId,
    currentUserId: state.currentUserId,
    usersMap: state.usersMap,
    chosenPostId: state.chosenPostId,
    postCreating: state.postCreating,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(loadTodos()),
    showModalComments: id => dispatch(showModalComments(id)),
    hideModalComments: () => dispatch(hideModalComments()),
    showModalAuthor: userId => dispatch(showModalAuthor(userId)),
    hideModalAuthor: () => dispatch(hideModalAuthor()),
    showPost: id => dispatch(showPost(id)),
    hidePost: id => dispatch(hidePost(id)),
    createPost: () => dispatch(createPost()),
    changeNewPostTitle: (event) => dispatch(changeNewPostTitle(event.target.value)),
    changeNewPostText: (event) => dispatch(changeNewPostText(event.target.value)),
    savePost: () => dispatch(savePost()),
    cancelSavePost: () => cancelSavePost(savePost()),
  };
}

export const PostListHandler = connect(mapStateToProps, mapDispatchToProps)(PostList);
