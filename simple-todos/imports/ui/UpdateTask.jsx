import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { Tasks } from "../api/tasks";
import ReactDOM from "react-dom";

import { withTracker } from "meteor/react-meteor-data";

export class UpdateTask extends React.Component {
    constructor(props) {
        super(props);
        this.saveNewName = this.saveNewName.bind(this);
    }

    saveNewName(event) {
        event.preventDefault();
        const newTaskName = ReactDOM.findDOMNode(
            this.refs.newTaskName
        ).value.trim();
        Meteor.call("tasks.update", this.props.taskName._id, newTaskName);
        ReactDOM.findDOMNode(this.refs.newTaskName).value = "";
    }

    render() {
        return (
            <div>
                {this.props.taskName && (
                    <div>
                        <h1>{this.props.taskName.text}</h1>
                        <form onSubmit={this.saveNewName}>
                            <input
                                ref="newTaskName"
                                type="text"
                                placeholder={this.props.taskName.text}
                            />
                        </form><br />
                        <Link className="backButton" to="/home">Back</Link>
                    </div>
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

export default withRouter(UpadateTaskTracker);
