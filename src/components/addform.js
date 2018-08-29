import React from 'react';

export default function AddForm(props) {

  return (
    <form className={"input-section"} onSubmit={e => {
        e.preventDefault();
        props.onItemAdd();
    }}>
      <label>Add a task: </label>
      <input
          type="text"
          id="text"
          placeholder="Add a task!"
        onChange={e => props.onInputChanged(e.target.value)}
      />
      <button>Add
      </button>
    </form>
  );
}
