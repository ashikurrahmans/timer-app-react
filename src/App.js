import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };
  interverId = null;

  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreament = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  startTimer = () => {
    if (this.state.count > 0 && !this.interverId) {
      this.interverId = setInterval(() => {
        this.setState({ count: this.state.count - 1 }, () => {
          if (this.state.count === 0) {
            alert("Timer is finished");
            clearInterval(this.interverId);
            this.interverId = null;
          }
        });
      }, 1000);
    }
  };

  pauseTimer = () => {
    if (this.interverId) {
      clearInterval(this.interverId);
      this.interverId = null;
    }
  };

  resetTimer = () => {
    this.setState({ count: 0 });
    clearInterval(this.interverId);
    this.interverId = null;
  };
  style = {
    marginLeft: "20px",
  };

  render() {
    return (
      <div className="App">
        <h2>Timer Application</h2>
        <div>
          <h2>Count : {this.state.count}</h2>
          <button onClick={this.increament}>Increase + 1</button>
          <button onClick={this.decreament}>Decrease - 1</button>
        </div>
        <div className={{ marginTop: "20px" }}>
          <button onClick={this.startTimer}>Start</button>
          <button onClick={this.pauseTimer}>Pause</button>
          <button onClick={this.resetTimer}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
