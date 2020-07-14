import React, { Component } from 'react';
import Header from './component/Header';
import FbButton from './actions/FbButton';
import './App.css';

class App extends Component {
  sampleFunction = () => {
    console.log('Event Click 1')
  }

  state = { like: 0, dislike: 0, data: null, name: '' }

  onLike = () => {
    this.setState((prevState) => {
      return {
        like: prevState.like + 1
      }
    })
    this.setState(prevState => {
      return {
        like: prevState.like + 1
      }
    })
  }
  onDisLike = () => {
    this.setState({ dislike: this.state.dislike + 1 })
  }

  componentWillMount() {
    console.log('App: willMount')
  }
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts?userId=1')
      .then(result => result.json())
      .then(result => this.setState({ data: result }))
      .catch(err => {
        console.error(err)
      })
  }

  handleClick = e => {
    this.setState({ name: "I am React" })
  }
  handleChange = e => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { data } = this.state
    console.log('App: render')
    return (
      <div>
        <form>
          <label>
            Name:
            <input type="text"
              name="name"
              placeholder="enter Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
        </form>
        <button onClick={this.handleClick}>Change Text</button>
      </div >
    );
  }

}
export default App;
