import React from 'react';
import Modal from 'react-awesome-modal';
import { CommentList } from "./CommentList";

export function ModalComments(props) {
    const {
        isModalCommentsVisible,
        hideModalComments,
        currentPostId,
        comments,
    } = props;

    return (
        <Modal
            visible={isModalCommentsVisible}
            width="70%" height="70%" effect="fadeInLeft"
            onClickAway={() => hideModalComments()}
        >
            <div>
                <h1>PostId {currentPostId}</h1>
                <CommentList
                    comments={comments}
                    currentPostId={currentPostId}
                />
                <button onClick={() => hideModalComments()}>
                    Close
                </button>
            </div>
        </Modal>
    )
}
