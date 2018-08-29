import React from 'react';
import Header from './header';
import AddForm from './addform';
import ItemList from './itemlist';
import SearchForm from './searchform';


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            tasks: [
                "Complete this todolist app!",
                "Eat lunch"
            ],
            searchTerm: ''
        };
    }

  addItem() {
        this.setState({
          tasks: [...this.state.tasks, this.state.inputValue], 
          inputValue: ''
      });
  }

  render() {
    return (
      <div className="App">
        <Header />
          <AddForm
              onItemAdd={() => this.addItem()}
              onInputChanged={value => this.setState({ inputValue: value })
          }/>
        <SearchForm onChange={searchTerm => this.setState({ searchTerm })}/>
        <ItemList tasks={this.state.tasks} />

      </div>
    );
  }
}

