import React from 'react';

export function Form(props) {
    const {
        changeNewPostTitle,
        changeNewPostText,
        cancelSavePost,
        newPostTitle,
        newPostText,
        savePost,
    } = props;
    return (
        <form>
            <input
                type="text"
                placeholder="title"
                onChange={(event) => changeNewPostTitle(event)}
            />
            <input
                type="text"
                placeholder="text"
                onChange={(event) => changeNewPostText(event)}
            />
            <button
                type="button"
                onClick={() => {
                    if (newPostTitle.trim() !== '' && newPostText.trim() !== '') {
                        return savePost();
                    }
                    alert('please fill the empty fields')
                }
                }
            >
                Save
            </button>
            <button type="button" onClick={cancelSavePost}>
                Cancel
            </button>
        </form>
    );
}
