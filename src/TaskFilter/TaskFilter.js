import React from "react";
import PropTypes from "prop-types";

import "./TaskFilter.css";

class TaskFilter extends React.Component {
  state = {
    activeButton: "All",
  };

  static defaultProps = {
    changeFilter: () => {},
  };

  static propTypes = {
    changeFilter: PropTypes.func,
  };

  render() {
    let { changeFilter } = this.props;
    let { activeButton } = this.state;
    return (
      <ul
        className="filters"
        onClick={(e) => {
          changeFilter(e.target.textContent);
          this.setState({
            activeButton: e.target.textContent,
          });
        }}
      >
        <li>
          <button className={activeButton === "All" ? "selected" : null}>
            All
          </button>
        </li>
        <li>
          <button className={activeButton === "Active" ? "selected" : null}>
            Active
          </button>
        </li>
        <li>
          <button className={activeButton === "Completed" ? "selected" : null}>
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

export default TaskFilter;
