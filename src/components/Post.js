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
                {id}
            </td>
            <td>
                <button onClick={() => showPost(id)}>{title}</button>
            </td>
            <td>
                <button onClick={() => showModalComments(id)}>Comments</button>
            </td>
            <td>
                <button onClick={() => showModalAuthor(userId)}>Author {props.userId}</button>
            </td>
        </tr>
    );
}
