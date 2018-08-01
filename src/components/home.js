import React, { Component } from 'react';
import Schedule from "./Schedule/schedule";
import Library from "./Library/library";

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