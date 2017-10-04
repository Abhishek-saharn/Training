import React from 'react'
import { withRouter, Route } from 'react-router-dom'
import { Tasks } from '../api/tasks';

import { withTracker } from 'meteor/react-meteor-data'


export class UpdateTask extends React.Component {
    constructor(props) {
        super(props);
        // task_Id = this.props.match.params.task_id;
        console.log('-----12-----', this);
    }


    render() {
        console.log('-----', this);
        return (
            <div>
                {this.props.taskName ?
                    <div >
                        <h1>{this.props.taskName.text}</h1>
                    </div > : ''
                }
            </div>

        );
    }

}

const UpadateTaskTracker = withTracker((props) => {
    Meteor.subscribe('publicTasks');
    return {

        taskName: Tasks.findOne({ _id: props.match.params.taskId }),


    };
})(UpdateTask);


// const UpadateTaskTracker = withTracker((props) => {
//     Meteor.subscribe('publicTasks');

//     const id = props.match.params.task_id;
//     console.log("????", id);
//     return { taskName: Tasks.find(id) };
// })(UpdateTask);

export default withRouter(UpadateTaskTracker);