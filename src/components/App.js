import React from 'react';
import Header from './header';
import AddForm from './addform';
import ItemList from './itemlist';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tasks: [
                "Complete this todolist app!",
                "Eat lunch"
            ]
        };
    }

  addItem() {
        this.setState({

          tasks: [...this.state.tasks, this.state.inputValue]

      });
  }

  render() {
    return (
      <div className="App">
        <Header />

          <ItemList tasks={this.state.tasks} />
          <AddForm
              onItemAdd={() => this.addItem()}
              onInputChanged={value => this.setState({ inputValue: value })
          }/>

      </div>
    );
  }
}

