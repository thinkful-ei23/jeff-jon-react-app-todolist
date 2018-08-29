import React from 'react';

export default function ItemList(props) {
    const tasks = props.tasks.map((item, index) => (
        <li className="todo-item" key={index}>{item}</li>
            ));
    console.log(props);

  return (
            <ul className="todo-list">
                {tasks}
            </ul>
  );
}
