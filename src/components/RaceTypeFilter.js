import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRace } from "../redux/action";
import { bindActionCreators } from "redux";

/**
 * Start Component That calls a List of data from Reducer
 * It acts as the Header of the Application
 *
 */
class RaceTypeFilter extends Component {
  renderList() {
    const {
      appState: { filter }
    } = this.props;
    this.props.appState.data;

    return this.props.activerace.map(racetype => {
      return (
        <li key={this.props.activerace.indexOf(racetype) + 1}>
          <a
            className={filter.includes(racetype.race_type) ? "active" : ""}
            onClick={() => this.props.selectRace(racetype.race_type)}
          >
            {racetype.discription} "{racetype.race_type}"
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <div id="race_filter">
        <div className="filter_container">
          <ul>{this.renderList()}</ul>
        </div>
      </div>
    );
  }
}

//Anything returned from this function will end up as props
//on the RaceType container
function mapDispatchToProps(dispatch) {
  //whenever select Race is called the result should be passed to all of our reducers
  return bindActionCreators({ selectRace: selectRace }, dispatch);
}
function mapStateToProps(state) {
  //Whatever is returned will show up as props
  //inside of RaceType
  console.log("active", state);
  return { ...state };
}
//promote ActiveType from a component to a container - it needs to know about
//this new dispatch method, selectRace. Make it available as a props.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RaceTypeFilter);
