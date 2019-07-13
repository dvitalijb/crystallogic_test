import React from 'react';

export function Comment(props) {
    const { title, body } = props;
    return (
        <li>
            <p>{title}</p>
            <span>{body}</span>
        </li>
    );
}
