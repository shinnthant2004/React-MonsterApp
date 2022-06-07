import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        { id: "abcd2134", name: "andrew" },
        { id: "abcd21312", name: "thomas" },
        { id: "abcd211233", name: "jade" },
        { id: "abcd2a213", name: "lucus" },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
