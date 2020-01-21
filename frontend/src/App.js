import React, { Component } from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";
<<<<<<< HEAD
import Header from "./components/Header";

const url = "http://localhost:4000/";
=======
import Header from "./components/Header"
>>>>>>> cd2a5f6da69823586ad1e904fd21b943c3739a6a

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount = () => {
    this.fetchData();
  };

  fetchData = () => {
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res
        });
      })
      .then(res => console.log(this.state))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Thoughts thoughts={this.state.data} />
      </div>
    );
  }
}

export default App;
