import React from 'react';
import { Comment } from "./Comment";

export function CommentList(props) {
    const {comments, currentPostId} = props;

    return (
        comments.map(
            comment => comment.postId === currentPostId
                ? <Comment key={comment.id} body={comment.body} title={comment.title}/>
                : null
        )
    );
}
