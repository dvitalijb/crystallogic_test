import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import {CommentList} from "./CommentList";
import {User} from "./User";

export class ModalAuthor extends Component  {

    constructor(props) {
        super(props);
    }

    render() {
        const {
            currentUserId,
            modalAuthorVisible,
            hideModalAuthor,
            usersMap,
        } = this.props;

         const user = usersMap[currentUserId];



        return(
            <Modal
                visible={modalAuthorVisible}
                width="40%" height="40%" effect="fadeInLeft"
                onClickAway={() => hideModalAuthor()}
            >
                <div>
                    <h1>UserId {currentUserId}</h1>

                    {currentUserId ? <User user={user} /> : null}
                    {/*<CommentList*/}
                    {/*     comments={commentItems}*/}
                    {/*/>*/}
                    <a href="javascript:void(0);"
                        onClick={() => hideModalAuthor()}
                    >Close</a>
                </div>
            </Modal>
        )
    }
}
