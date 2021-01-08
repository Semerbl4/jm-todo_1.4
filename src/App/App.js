import React from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import "./App.css";

import NewTaskForm from "../NewTaskForm/NewTaskForm";
import TaskList from "../TaskList/TaskList";
import Footer from "../Footer/Footer";

class App extends React.Component {
  state = {
    serverInfo: [],
    currentFilter: "All",
  };

  uncompletedTasks = () => {
    let tasksRemain = 0;

    this.state.serverInfo.forEach((el) => {
      if (el.completed === false) {
        tasksRemain++;
      }
    });
    return tasksRemain;
  };

  clearCompleted = () => {
    let newServerInfo = this.state.serverInfo.filter((el) => {
      return el.completed === false;
    });

    this.setState({ serverInfo: newServerInfo });
  };

  changeFilter = (filterName) => {
    // console.log(filterName);

    this.setState({ currentFilter: filterName });
    // console.log(this.state);
  };

  addTask = (taskText) => {
    const newServerInfo = [...this.state.serverInfo];

    newServerInfo.push({
      id: Math.random(),
      completed: false,
      taskText: taskText,
      taskCreateTime: new Date(),
    });

    this.setState({ serverInfo: newServerInfo });
  };

  completeChanged = (id) => {
    let { serverInfo } = this.state;
    serverInfo = [...serverInfo];

    let newServerInfo = serverInfo.map((el) => {
      if (el.id === id) {
        el.completed = !el.completed;
      }
      return el;
    });
    // console.log("меняем на completed");
    // console.log(newServerInfo);

    this.setState({ serverInfo: newServerInfo });
  };

  taskDestroyed = (id) => {
    let { serverInfo } = this.state;
    serverInfo = [...serverInfo];

    let newServerInfo = serverInfo.filter((el) => {
      return el.id !== id;
    });

    this.setState({ serverInfo: newServerInfo });
  };

  render() {
    return (
      <section className="todoapp">
        <NewTaskForm addTask={this.addTask} />
        <TaskList
          todoData={this.state.serverInfo}
          completeChanged={this.completeChanged}
          taskDestroyed={this.taskDestroyed}
          currentFilter={this.state.currentFilter}
        />
        <Footer
          changeFilter={this.changeFilter}
          clearCompleted={this.clearCompleted}
          uncompletedTasks={this.uncompletedTasks}
        />
      </section>
    );
  }
}

export default App;
