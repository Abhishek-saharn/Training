import Task from './Task';
import React, { PropTypes } from 'react';

import { Tasks } from '../api/tasks.js';

class App extends React.Component {
  getTasks() {
    return ([
      { _id: 1, "text": "This is task 1" },
      { _id: 2, "text": "This is task 2" },
      { _id: 3, "text": "This is task 3" }
    ]);
  }

  renderTasks() {
    return this.props.tasks.map((taskData) =>

      <Task key={taskData._id} task_name={taskData.text} />

    );
  }

  render() {
    return (
      <div className="container" >
        <header>
          TODO Tasks
            </header>
        <ul>
          {this.renderTasks()}

        </ul>
      </div >

    );
  }
}

App.propTypes = {
  tasks: PropTypes.array.isRequired,
}

export default createContainer(() => {
  return { tasks: Task.find({}).fetch() }
}, App);

