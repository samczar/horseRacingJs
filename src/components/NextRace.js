import React, { Component } from "react";
import { connect } from "react-redux";
import { loadData } from "../redux/action";

class NextRace extends Component {
  componentWillMount() {
    this.props.loadData();
  }
  filterItems(arr, query) {
    return arr.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  renderList() {
    return this.props.appState.data
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
      .map(data => {
        return (
          <div className="next_race" key={data.id_race}>
            <div className="next_container">
              <div className="next_top">
                <div className="first_layer">
                  <div className="first">
                    <span>{data.event.country}</span>
                    <span>{data.event.title}</span>
                  </div>
                  <div className="second">{data.post_time}</div>
                </div>
                <div className="second_layer">
                  <div className="third">
                    <span>{data.num_runners}</span>
                    <span>
                      {data.purse.amount}
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
    if (this.props.selected_race.length === 0) {
      return <div>{this.renderList()}</div>;
    } else if (this.props.selected_race.length !== 0) {
      // return <div>{this.props.selected_race}</div>;
      return this.props.appState.data
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
        .filter(val => val.race_type === this.props.selected_race)
        .map(data => {
          return (
            <div className="next_race" key={data.id_race}>
              <div className="next_container">
                <div className="next_top">
                  <div className="first_layer">
                    <div className="first">
                      <span>{data.event.country}</span>
                      <span>{data.event.title}</span>
                    </div>
                    <div className="second">{data.post_time}</div>
                  </div>
                  <div className="second_layer">
                    <div className="third">
                      <span>{data.num_runners}</span>
                      <span>
                        {data.purse.amount}
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
  }
}
function mapStateToProps(state) {
  console.log("state", state);
  return { ...state };
}
export default connect(
  mapStateToProps,
  { loadData }
)(NextRace);
