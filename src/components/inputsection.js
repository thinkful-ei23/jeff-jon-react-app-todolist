import React from 'react';

export default function InputSection(props) {

  return (
    <form>
      <label>Add a task: </label>
      <input type="text" id="text" placeholder="Add a task!"/>
      <input type="button" value="Add"/>
    </form>
  );
}