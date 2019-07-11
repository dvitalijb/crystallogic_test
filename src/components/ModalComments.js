import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {CommentList} from "./CommentList";

export class ModalComments extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            comments,
            id,
            currentPostId,
            modalCommentsVisible,
            hideModalComments
        } = this.props;

        // const commentItems = comments.filter(comment => comment.postId === currentPostId);
        const commentItems = comments.map(
            comment => comment.postId === currentPostId
                ? <li>{comment.body}</li>
                : null
        );

        return(
            <Modal
                 visible={modalCommentsVisible}
                width="70%" height="70%" effect="fadeInLeft"
                onClickAway={() => hideModalComments()}
            >
                <div>
                    <h1>PostId {currentPostId}</h1>
                    <ul>
                        {commentItems}
                    </ul>
                    {/*<CommentList*/}
                    {/*     comments={commentItems}*/}
                    {/*/>*/}
                    <a href="#"
                        onClick={() => hideModalComments()}
                    >Close</a>
                </div>
            </Modal>
        )
    }
}
