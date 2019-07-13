import React from 'react';

export function Post(props) {
    const {
        showModalComments,
        showModalAuthor,
        showPost,
        userId,
        title,
        id,
    } = props;

    return (
        <tr>
            <td>
                <span>{id}</span>
            </td>
            <td>
                <p className="title" onClick={() => showPost(id)}>{title}</p>
            </td>
            <td>
                <p className="title" onClick={() => showModalComments(id)}>Comments</p>
            </td>
            <td>
                <p className="title" onClick={() => showModalAuthor(userId)}>Author {props.userId}</p>
            </td>
        </tr>
    );
}
