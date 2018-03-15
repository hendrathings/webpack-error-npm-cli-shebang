import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    pathname: 'blah'
  }

  handleClick() {
    this.setState({ pathname: 'hendra' })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>test click</button>
      </div>
    );
  }
}

export default App;
