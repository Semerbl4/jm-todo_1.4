import React from "react";
// import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./Task.css";

class Task extends React.Component {
  static defaultProps = {
    completed: false,
    taskText: "",
    taskCreateTime: new Date(),
  };

  static propTypes = {
    completed: PropTypes.bool,
    taskText: PropTypes.string,
    taskCreateTime: PropTypes.object,
  };

  completeToogler = () => {
    this.props.completeChanged(this.props.id);
  };

  currentTaskDestroyed = () => {
    let { id } = this.props;

    this.props.taskDestroyed(id);
  };

  render() {
    const { completed } = this.props;
    const { taskText } = this.props;
    const { taskCreateTime } = this.props;

    // console.log(completed);
    // console.log(this.props);
    return (
      <li className={completed ? "completed" : ""}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            onClick={this.completeToogler}
            defaultChecked={completed}
          />
          <label>
            <span className="description">{taskText}</span>
            <span className="created">
              created{" "}
              {formatDistanceToNow(taskCreateTime, { includeSeconds: true })}{" "}
              ago
            </span>
          </label>
          <button className="icon icon-edit"></button>
          <button
            className="icon icon-destroy"
            onClick={this.currentTaskDestroyed}
          ></button>
        </div>
        {this.props.className === "editing" ? (
          <input
            type="text"
            className="edit"
            defaultValue="Editing task"
          ></input>
        ) : null}
      </li>
    );
  }
}

export default Task;
