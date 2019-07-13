import React from 'react';

export function Pagination(props) {
    const {posts, activePage, changePage} = props;
    const numberPages = Math.ceil(posts.length / 10);
    const displayPages = new Array(numberPages).fill(1);

    return (
        displayPages.map((displayPage, index) => {
                const numberPage = index + 1;
                return activePage !== numberPage
                    ? <button
                        className="button"
                        onClick={() => changePage(numberPage)}
                        key={index}
                    >
                        {numberPage}
                    </button>
                    : <button
                        className="button active"
                        onClick={() => changePage(numberPage)}
                        key={index}
                    >
                        {numberPage}
                    </button>
            }
        )
    );
}