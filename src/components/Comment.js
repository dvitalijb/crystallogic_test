import React from 'react';

export function Comment(props) {
  const { body } = props;
  return (
    <li>
      <span>{body}</span>
    </li>
  );
}
