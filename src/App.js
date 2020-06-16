import React, { Component } from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import TaskForm from "./components/taskForm";

class App extends Component {
  state = { show: false };

  handleOpen = () => {
    let { show } = this.state;
    show = true;
    this.setState({ show });
    console.log("after", this.state);
  };

  render() {
    return (
      <div className="App">
        <main className="container">
          <Button onClick={this.handleOpen}>Open Modal</Button>
          <TaskForm show={this.state.show} />
        </main>
      </div>
    );
  }
}

export default App;
