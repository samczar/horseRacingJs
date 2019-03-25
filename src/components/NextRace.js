import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData, nextRace } from "../redux/action";
import {
  time2TimeAgo,
  convertTimestamp,
  numberWithCommas
} from "../../Utils/helpers";

class NextRace extends Component {
  componentDidMount() {
    this.props.loadData();
    this.props.nextRace(this.props.appState.data.map(el => el.post_time));
  }

  renderList() {
    const {
      appState: { filter, getRace, data }
    } = this.props;
    var holder = [];
    return data
      .filter(el => {
        if (filter.length < 1) {
          return getRace.includes(el.post_time);
        } else {
          return filter.includes(el.race_type.toUpperCase());
        }
      })
      .sort((a, b) => {
        var raceA = a.race_type.toUpperCase(); // ignore upper and lowercase
        var raceB = b.race_type.toUpperCase(); // ignore upper and lowercase

        if (raceA < raceB) {
          return -1;
        }
        if (raceA > raceB) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .sort((a, b) => {
        var date1 = a.post_time;
        var date2 = b.post_time;

        if (date1 > date2) {
          return -1;
        }
        if (date2 < date1) {
          return 1;
        }

        // names must be equal
        return 0;
      })
      .sort((a, b) => {
        var purse1 = a.purse.amount;
        var purse2 = a.purse.amount;

        if (purse1 < purse2) {
          return -1;
        }
        if (purse2 > purse1) {
          return 1;
        }
      })
      .map(data => {
        return (
          <div className="next_race" key={data.id_race}>
            <div className="next_container">
              <div className="next_top">
                <div className="first_layer">
                  <div className="first">
                    <span className="inner_space">{data.event.country}</span>
                    <span>{data.event.title}</span>
                  </div>
                  <div className="second">
                    {convertTimestamp(data.post_time)}
                  </div>
                </div>
                <div className="second_layer">
                  <div className="third">
                    <span className="grayline">
                      {data.num_runners} Runners |{" "}
                      {numberWithCommas(data.purse.amount)}{" "}
                      {data.purse.currency}
                    </span>
                  </div>
                  <div className="fourth">{data.race_type}</div>
                </div>
              </div>
              <div className="next_body">
                <ul>
                  {data.runners.map(runner => (
                    <li key={runner.id_runner}>
                      <span className="runners">{runner.name}</span>
                      <span className="odds">{runner.odds}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      });
  }

  render() {
    //Call the renderList function to render the View
    return (
      <div>
        <div className="show">{this.renderList()}</div>
      </div>
    );
  }
}
//Anything returned from this function will end up as props
//on the RaceType container
// function mapDispatchToProps(dispatch) {
//   //whenever select Race is called the result should be passed to all of our reducers
//   return bindActionCreators({ nextRace: nextRace }, dispatch);
// }

function mapStateToProps(state) {
  // console.log("state", state);
  return { ...state };
}
export default connect(
  mapStateToProps,
  // mapDispatchToProps,
  { loadData, nextRace }
)(NextRace);

/**
 * Doing a prop-type test
 */
