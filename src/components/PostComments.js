import React from 'react';
import { CommentList } from "./CommentList";

export function PostComments(props) {
    const { posts, comments, currentPostId, hidePost } = props;
    const post = posts.filter(postItem => postItem.id === currentPostId);

    return (
        <>
            <h1>{post[0].title}</h1>
            <p>{post[0].body}</p>
            <CommentList currentPostId={currentPostId} comments={comments}/>
            <button type="button" onClick={hidePost}>Back to posts</button>
        </>
    );
}