import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../redux/action";

class NextRace extends Component {
  componentDidMount() {
    this.props.loadData();
  }
  /**
   * This function adds one to its input.
   * @param {number} timestamp any number
   * @returns {string} that date.
   */
  convertTimestamp(timestamp) {
    var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
      yyyy = d.getFullYear(),
      mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
      dd = ("0" + d.getDate()).slice(-2), // Add leading 0.
      hh = d.getHours(),
      h = hh,
      min = ("0" + d.getMinutes()).slice(-2), // Add leading 0.
      ampm = "AM",
      time;

    if (hh > 12) {
      h = hh - 12;
      ampm = "PM";
    } else if (hh === 12) {
      h = 12;
      ampm = "PM";
    } else if (hh == 0) {
      h = 12;
    }

    // ie: 2013-02-18, 8:35 AM
    time = dd + "-" + mm + "-" + yyyy + ", " + h + ":" + min + " " + ampm;

    return time;
  }

  //Add commas to the purse amount
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  renderList() {
    const {
      appState: { filter }
    } = this.props;
    return this.props.appState.data
      .filter(el => {
        if (filter.length === 0) return true;
        return filter.includes(el.race_type.toUpperCase());
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

        if (date1 < date2) {
          return -1;
        }
        if (date2 > date1) {
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
                    {this.convertTimestamp(data.post_time)}
                  </div>
                </div>
                <div className="second_layer">
                  <div className="third">
                    <span className="grayline">
                      {data.num_runners} Runners |{" "}
                      {this.numberWithCommas(data.purse.amount)}{" "}
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
    const {
      appState: {
        data: {}
      }
    } = this.props;
    //Call the renderList function to render the View
    return <div data-test="show">{this.renderList()}</div>;
  }
}
function mapStateToProps(state) {
  // console.log("state", state);
  return { ...state };
}
export default connect(
  mapStateToProps,
  { loadData }
)(NextRace);

/**
 * Doing a prop-type test
 */
