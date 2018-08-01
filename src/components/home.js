import React, { Component } from 'react';
import Schedule from "./schedule/schedule";
import Library from "./library/library";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Library/>
        <Schedule/>
      </div>
    );
  }
}
export default Home;