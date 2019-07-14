import connect from 'react-redux/es/connect/connect';
import { Post } from './Post';
import {
  showModalComments,
  showModalAuthor,
  hidePost,
  showPost,
} from '../redux/actions';

function mapStateToProps(state) {
  return {
    isModalCommentsVisible: state.isModalCommentsVisible,
    isModalAuthorVisible: state.isModalAuthorVisible,
    comments: state.comments,
    usersMap: state.usersMap,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showModalAuthor: userId => dispatch(showModalAuthor(userId)),
    showModalComments: id => dispatch(showModalComments(id)),
    showPost: postId => dispatch(showPost(postId)),
    hidePost: () => dispatch(hidePost()),
  };
}

export const PostHandler = connect(mapStateToProps, mapDispatchToProps)(Post);
