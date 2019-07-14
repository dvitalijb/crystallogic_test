import React from 'react';

export function Pagination(props) {
  const { posts, activePage, changePage } = props;
  const numberPages = Math.ceil(posts.length / 10);
  const displayPages = new Array(numberPages).fill(1);

  return (
    displayPages.map((displayPage, index) => {
      const numberPage = index + 1;
      return (
        <button
          type="button"
          className={activePage !== numberPage ? 'button' : 'button active'}
          onClick={() => changePage(numberPage)}
          key={Math.random()}
        >
          {numberPage}
        </button>
      );
    })
  );
}
