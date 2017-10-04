import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { Tasks } from "../api/tasks";
import ReactDOM from "react-dom";

import { withTracker } from "meteor/react-meteor-data";

export class UpdateTask extends React.Component {
  constructor(props) {
    super(props);
  }

  saveNewName(event) {
    event.preventDefault();
    const newTaskName = ReactDOM.findDOMNode(
      this.refs.newTaskName
    ).value.trim();
    Meteor.call("tasks.update", this.props.taskName._id, newTaskName);
    console.log(newTaskName);
    ReactDOM.findDOMNode(this.refs.newTaskName).value = "";
  }

  render() {
    console.log("-----", this);
    return (
      <div>
        {this.props.taskName ? (
          <div>
            <h1>{this.props.taskName.text}</h1>
            <form onSubmit={this.saveNewName.bind(this)}>
              <input
                ref="newTaskName"
                type="text"
                placeholder={this.props.taskName.text}
              />
            </form>
            <Link to="/home">Back</Link>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

const UpadateTaskTracker = withTracker(props => {
  Meteor.subscribe("publicTasks");
  return {
    taskName: Tasks.findOne({ _id: props.match.params.taskId })
  };
})(UpdateTask);

// const UpadateTaskTracker = withTracker((props) => {
//     Meteor.subscribe('publicTasks');

//     const id = props.match.params.task_id;
//     console.log("????", id);
//     return { taskName: Tasks.find(id) };
// })(UpdateTask);

export default withRouter(UpadateTaskTracker);
