import React from 'react';

export function User(props) {
  const { user } = props;
  return (
    <>
      <h2>{user.name}</h2>
      <h5>{user.email}</h5>
    </>
  );
}
