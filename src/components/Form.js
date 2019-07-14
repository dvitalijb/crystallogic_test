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
      <section>
        <input
          type="text"
          placeholder="title"
          className="input"
          onChange={event => changeNewPostTitle(event)}
        />
        <input
          type="text"
          placeholder="text"
          className="input"
          onChange={event => changeNewPostText(event)}
        />
      </section>
      <section className="form_button">
        <button
          type="button"
          className="button"
          onClick={() => {
            if (newPostTitle.trim() !== '' && newPostText.trim() !== '') {
              return savePost();
            }
            alert('please fill the empty fields');
          }
          }
        >
                   Save
        </button>
        <button type="button" className="button" onClick={cancelSavePost}>
                   Cancel
        </button>
      </section>
    </form>
  );
}
