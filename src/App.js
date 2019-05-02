import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

  handleAdd(){
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }

  handleSubtract() {
    // Wrong: setState is async
    // this.setState({count: this.state.count - 1 });
    this.setState(
      {
        count: this.state.count - 1
      }
    )
  }

  render(){
    return (
      <div className="App">
        <h1>Hello, World!</h1>
        <h1>Hello,nick, I am a Teacher</h1>
        <h2>Hello, Songtao, I am a student</h2>
        <span>count is : {this.state.count} {this.state.multiple}</span>
        <button onClick={this.handleSubtract.bind(this)}>-</button>
        <button onClick={this.handleAdd.bind(this)}>+</button>
      </div>
    )
  }
}
export default App;

