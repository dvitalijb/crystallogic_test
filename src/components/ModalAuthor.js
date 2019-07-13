import React from 'react';
import Modal from 'react-awesome-modal';
import { User } from "./User";

export function ModalAuthor(props) {
    const {
        isModalAuthorVisible,
        hideModalAuthor,
        currentUserId,
        user
    } = props;

    return (
        <Modal
            visible={isModalAuthorVisible}
            width="40%" height="40%" effect="fadeInRight"
            onClickAway={() => hideModalAuthor()}
        >
            <div>
                <h1>UserId {currentUserId}</h1>
                {currentUserId ? <User user={user}/> : null}
                <button onClick={() => hideModalAuthor()}>
                    Close
                </button>
            </div>
        </Modal>
    )

}
