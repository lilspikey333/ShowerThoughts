import React, { Component } from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";
import Header from "./components/Header";
import Post from "./components/Post";
import ThoughtDetails from "./components/ThoughtDetails";
// import "./bootstrap/dist/css/bootstrap.min.css";

const url = "http://localhost:4000/";
class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      details: false,
      detailThought: {}
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
      .then(() => this.setState({details: false}))
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

  update = (obj) => {
    console.log("update called")
    console.log(obj)
    const putUrl = "http://localhost:4000/update/" + obj._id
    fetch(putUrl,  {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: obj.name,
        thought: obj.thought,
        comments: obj.comments
      })
    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }

  comment = (id,str) => {
    console.log("comment called")
    const commentUrl="http://localhost:4000/comment/" + id
    console.log(commentUrl)
    fetch(commentUrl,  {
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
    const deleteUrl="http://localhost:4000/" + id
    fetch(deleteUrl,  {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res => this.fetchData())
    .catch(err => console.log(err))
  }

  callDetails = (thought,e) => {
    console.log(thought)
    this.setState({
      details: true,
      detailThought: thought
    })
  }

  render() {
    console.log(this.comment)
    return (
      <div className="App">
        <Header post={this.post}/>
        <Thoughts thoughts={this.state.data} callDetails={this.callDetails} />
        <Post post={this.post}/>
        {this.state.details ? <ThoughtDetails thought={this.state.detailThought} update={this.update} delete={this.delete} comment={this.comment}/> : ''}
      </div>
    );
  }
}

export default App;
