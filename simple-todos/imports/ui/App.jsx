import Task from './Task';
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';
import { createContainer } from 'meteor/react-meteor-data';

import { Meteor } from 'meteor/meteor';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      hideCompleted: false,
    }
  }

  toggleHideCompleted() {
    this.setState((prevState) => ({
      hideCompleted: !prevState.hideCompleted
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
    Meteor.call('tasks.insert', text);

    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }



  renderTasks() {
    let filteredTasks = this.props.tasks;
    if (this.state.hideCompleted) {
      filteredTasks = filteredTasks.filter(task => !task.checked);

    }
    return filteredTasks.map((task) => {
      const currentUser = this.props.currentUser && this.props.currentUser._id;
      const showPrivateButton = currentUser === task.owner;

      return <Task key={task._id} task={task} showPrivateButton={showPrivateButton} />
    }
    );
  }

  render() {
    return (
      <div className="container" >
        <header>
          <h1>  TODO Tasks({this.props.incompleteTasks}) </h1>

          <label className="hide-completed">
            <input
              type="checkbox" checked={this.state.hideCompleted} onClick={this.toggleHideCompleted.bind(this)}
            />
            Hide Completed Tasks
        </label>
          <AccountsUIWrapper />
          {this.props.currentUser &&
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                type="text" ref="textInput" placeholder="Type to add new tasks" />
            </form>
          }
        </header>

        <ul>
          {this.renderTasks()}

        </ul>
      </div >

    );
  }
}

// App.propTypes = {
//   tasks: PropTypes.array.isRequired,
//   incompleteTasks: PropTypes.number.isRequired,
//   currentUser: PropTypes.object,
// }

export default createContainer(() => {
  Meteor.subscribe('tasks')
  return {

    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
    incompleteTasks: Tasks.find({
      checked: { $ne: true }
    }).count(),
    currentUser: Meteor.user(),
  };
}, App);

