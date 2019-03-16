import React, { Component } from "react";
import { connect } from "react-redux";

class RaceTypeFilter extends Component {
  renderList() {
    this.props.activerace;
  }
  render() {
    console.log(this.props.activerace);
    return (
      <div id="race_filter">
        <div className="filter_container">
          <ul>
            <li>
              <a className="active"> Filter button: Gallop ("G")</a>
            </li>
            <li>
              <a>Filter button: Jump (“J”)</a>
            </li>
            <li>
              <a>Filter button: Trot (“T”)</a>
            </li>
            <li>
              <a>Filter button: Dogs (“D”)</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { activerace: state.activerace };
}
export default connect(mapStateToProps)(RaceTypeFilter);
