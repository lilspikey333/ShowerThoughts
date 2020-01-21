import React, { Component } from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";
import Header from "./components/Header";
import Post from "./components/Post";

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


  post = (obj) => {
    fetch(url,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        thought: obj.thought
      })

    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }

<<<<<<< HEAD
  update = (obj) => {
    let putUrl = "http://localhost:4000/update/" + obj._id
    fetch(putUrl,  {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        thought: obj.thought,
        comments: [...obj.comments]
      })
    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }

  comment = (id,str) => {
    commentUrl="http://localhost:4000/comment/" + id
    fetch(url,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        comment: str
      })
    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }

  delete = (id) => {
    deleteUrl="http://localhost:4000/" + id
    fetch(url,  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }
=======
>>>>>>> c172c03df2adeb2cce7882c83620cdc0db52943a

  render() {
    return (
      <div className="App">
        <Header post={this.post} />
        <Thoughts thoughts={this.state.data} />
        <Post post={this.post} />
      </div>
    );
  }
}

export default App;
