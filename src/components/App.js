import React, { Component } from "react";
import NextRace from "./NextRace";
import RaceTypeFilter from "./RaceTypeFilter";
import "../styles/App.scss";

class App extends Component {
  render() {
    return (
      <div data-className="ui_container">
        <div className="ui_nav_filter">
          <RaceTypeFilter />
        </div>
        <div className="ui_body content">
          <NextRace />
        </div>
      </div>
    );
  }
}
export default App;
