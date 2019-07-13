import React, { Component } from 'react';
import { ModalComments } from "./ModalComments";
import { PostComments } from "./PostComments";
import { PostHandler } from './PostHandler';
import { ModalAuthor } from "./ModalAuthor";
import { Pagination } from "./Pagination";
import { Form } from "./Form";
import { getActivePosts } from "../utils";


export class PostList extends Component {
    componentDidMount() {
        this.props.loadData();
    }

    render() {
        const {
            isModalCommentsVisible,
            isModalAuthorVisible,
            hideModalComments,
            hideModalAuthor,
            changeNewPostTitle,
            changeNewPostText,
            cancelSavePost,
            currentPostId,
            currentUserId,
            postCreating,
            dataLoaded,
            activePage,
            newPostTitle,
            newPostText,
            changePage,
            createPost,
            savePost,
            hidePost,
            usersMap,
            comments,
            posts,
        } = this.props;

        if (postCreating) {
            return (
                <Form
                    changeNewPostTitle={changeNewPostTitle}
                    changeNewPostText={changeNewPostText}
                    cancelSavePost={cancelSavePost}
                    newPostTitle={newPostTitle}
                    newPostText={newPostText}
                    savePost={savePost}
                />
            )
        }

        if (currentPostId && !isModalCommentsVisible) {
            return (
                <PostComments
                    currentPostId={currentPostId}
                    comments={comments}
                    hidePost={hidePost}
                    posts={posts}
                />
            )
        }

        if (dataLoaded) {
            const activePosts = getActivePosts(posts, 10, activePage);
            const postItems = activePosts.map((post, index) => (
                <PostHandler
                    userId={post.userId}
                    title={post.title}
                    body={post.body}
                    index={index}
                    key={post.id}
                    id={post.id}
                />
            ));

            return (
                <div>
                    <ModalAuthor
                        isModalAuthorVisible={isModalAuthorVisible}
                        hideModalAuthor={hideModalAuthor}
                        user={usersMap[currentUserId]}
                        currentUserId={currentUserId}
                    />
                    <ModalComments
                        isModalCommentsVisible={isModalCommentsVisible}
                        hideModalComments={hideModalComments}
                        currentPostId={currentPostId}
                        comments={comments}
                    />
                    <button
                        type="button"
                        className="button"
                        onClick={createPost}
                    >
                        Create Post
                    </button>
                    <table className="table">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Comments</th>
                            <th>User</th>
                        </tr>
                        </thead>
                        <tbody>
                            {postItems}
                        </tbody>
                    </table>
                    <section className="pagination">
                        <Pagination
                            posts={posts}
                            activePage={activePage}
                            changePage={changePage}
                        />
                    </section>
                </div>
            );
        }
        return (
            <h1 className="loading">Loading...</h1>
        );
    }
}
