import connect from 'react-redux/es/connect/connect';
import { PostList } from './PostList';
import {hideModalAuthor, hideModalComments, loadTodos, showModalAuthor, showModalComments} from '../redux/actions';

function mapStateToProps(state) {
  return {
    requested: state.requested,
    usersLoaded: state.usersLoaded,
    postsLoaded: state.postsLoaded,
    commentsLoaded: state.commentsLoaded,
    posts: state.posts,
    filteredPosts: state.filteredPosts,
    comments: state.comments,
    modalCommentsVisible : state.modalCommentsVisible,
    modalAuthorVisible: state.modalAuthorVisible,
    currentPostId: state.currentPostId,
    currentUserId: state.currentUserId,
    usersMap: state.usersMap,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleClick: () => dispatch(loadTodos()),
    showModalComments: id => dispatch(showModalComments(id)),
    hideModalComments: () => dispatch(hideModalComments()),
    showModalAuthor: userId => dispatch(showModalAuthor(userId)),
    hideModalAuthor: () => dispatch(hideModalAuthor()),
    // filterChanged: event => dispatch(filterChanged(event.target.value)),
  };
}

export const PostListHandler = connect(mapStateToProps, mapDispatchToProps)(PostList);
