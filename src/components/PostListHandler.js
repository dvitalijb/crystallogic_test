import connect from 'react-redux/es/connect/connect';
import {PostList} from './PostList';
import {
    hideModalComments,
    hideModalAuthor,
    showModalComments,
    showModalAuthor,
    changeNewPostText,
    changeNewPostTitle,
    cancelSavePost,
    changePage,
    createPost,
    hidePost,
    loadData,
    savePost,
    showPost,
} from '../redux/actions';

function mapStateToProps(state) {
    return {
        isModalCommentsVisible: state.isModalCommentsVisible,
        isModalAuthorVisible: state.isModalAuthorVisible,
        currentPostId: state.currentPostId,
        currentUserId: state.currentUserId,
        postCreating: state.postCreating,
        newPostTitle: state.newPostTitle,
        newPostText: state.newPostText,
        activePage: state.activePage,
        dataLoaded: state.dataLoaded,
        comments: state.comments,
        usersMap: state.usersMap,
        posts: state.posts,

    };
}

function mapDispatchToProps(dispatch) {
    return {
        changeNewPostTitle: event => dispatch(changeNewPostTitle(event.target.value)),
        changeNewPostText: event => dispatch(changeNewPostText(event.target.value)),
        showModalComments: postId => dispatch(showModalComments(postId)),
        hideModalComments: () => dispatch(hideModalComments()),
        showModalAuthor: userId => dispatch(showModalAuthor(userId)),
        hideModalAuthor: () => dispatch(hideModalAuthor()),
        cancelSavePost: () => dispatch(cancelSavePost()),
        changePage: index => dispatch(changePage(index)),
        createPost: () => dispatch(createPost()),
        showPost: id => dispatch(showPost(id)),
        hidePost: () => dispatch(hidePost()),
        savePost: () => dispatch(savePost()),
        loadData: () => dispatch(loadData()),
    };
}

export const PostListHandler = connect(mapStateToProps, mapDispatchToProps)(PostList);
