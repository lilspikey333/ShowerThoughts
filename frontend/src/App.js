import React from "react";
import "./App.css";
import Thoughts from "./components/Thoughts";



function App() {
  const url = "http://localhost:4000/"
  fetch(url).then(res => res.json()).then( res => console.log(res)).catch(err => console.log(err))

  return (
    <div className="App">
      <Header />
      <Thoughts />
    </div>
  );
}

export default App;
