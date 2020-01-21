import React, { Component } from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";
import Header from "./components/Header";
import Post from "./components/Post"

const url = "http://localhost:4000/";
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
      .catch(err => console.log(err));
  };

<<<<<<< HEAD
  post = (obj) => {
    console.log("post called")
    fetch(url,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        thought: obj.thought
      })
    }).catch(err => console.log(err))
  }
=======
  post = obj => {};
>>>>>>> fe98aa6e3a611187caf580c955750747f63ddef2

  render() {
    return (
      <div className="App">
        <Header post={this.post}/>
        <Thoughts thoughts={this.state.data} />
        <Post post={this.post}/>
      </div>
    );
  }
}

export default App;
