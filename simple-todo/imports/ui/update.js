import './update.html';


import {
    Meteor
} from 'meteor/meteor';

import {
    Tasks
} from '../api/tasks.js';

Template.update.onCreated(() => {
    Meteor.subscribe('getUpdatedTask', FlowRouter.getParam('id'));
})

Template.update.helpers({
    taskName() {
        const newText = Tasks.find({_id: FlowRouter.getParam('id')})
        // console.log((Tasks.find({_id: FlowRouter.getParam('id')}).fetch()[0].text))
        return newText;
    }
})

Template.update.events({
    'submit .new-task' (event) {
        event.preventDefault();
        const target = event.target;
        const text = target.text.value;
        console.log("<<<<<<<<<>>>>>>>>>>", FlowRouter.getParam('id'));
        Meteor.call("tasks.update", FlowRouter.getParam('id'),text);

    }
})