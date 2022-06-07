import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: { firstName: "Shinn", lastName: "Thant" },
      company: "Home",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello Im {this.state.name.firstName} {this.state.name.lastName},
            work at {this.state.company}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return { name: { firstName: "Sayar", lastName: "Shinn" } };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
