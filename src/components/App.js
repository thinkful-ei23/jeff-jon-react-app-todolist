import React from 'react';
import Header from './header';
import InputSection from './inputsection';
import ToDoList from './todolist';

export default class App extends React.Component {
  Constructor(props) {
    super(props);
    this.state = {
      task: "Complete this todolist app!"
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <InputSection />
        <ToDoList text={this.state.task}/>
      </div>
    );
  }
}

