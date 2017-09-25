import './update.html';


import {
    Meteor
} from 'meteor/meteor';

import {
    Tasks
} from '../api/tasks.js';

Template.update.onCreated(() => {
    Meteor.subscribe('updatedName',FlowRouter.getParam('id'));
})

Template.update.helpers({
    taskName() {
        console.log((Tasks))
        return Tasks.text;
    }
})

Template.update.events({
    'submit .new-task' (event) {
        const target = event.target;
        const text = target.text.value;

        Meteor.call("tasks.update", text, FlowRouter.getParam('id'), function () {});

    }
})