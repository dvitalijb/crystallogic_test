import connect from 'react-redux/es/connect/connect';
import { Post } from './Post';
 import {showModalAuthor, showModalComments} from '../redux/actions';

function mapStateToProps(state) {
  return {
    comments: state.comments,
    usersMap: state.usersMap,
    modalCommentsVisible : state.modalCommentsVisible,
    modalAuthorVisible: state.modalAuthorVisible,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    showModalComments: (id) => dispatch(showModalComments(id)),
    showModalAuthor: (userId) => dispatch(showModalAuthor(userId))
    // postItemRemove: index => dispatch(removePost(index)),
  };
}

export const PostHandler = connect(mapStateToProps, mapDispatchToProps)(Post);
