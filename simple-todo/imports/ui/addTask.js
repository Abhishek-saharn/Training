import './addTask.html';
import {
    Meteor
} from 'meteor/meteor';
import {
    Tasks
} from '../api/tasks';

Template.addTask.events({
    'submit .new-task' (event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Meteor.call("tasks.insert",text);
        
        target.text.value = '';
    },
});