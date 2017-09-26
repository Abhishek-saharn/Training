import {
    Meteor
} from 'meteor/meteor';
import {
    Template
} from 'meteor/templating';
import {
    Tasks
} from '../api/tasks.js';

import './header.html'
import {
    hideCompleted
} from '../../utils/globals.js'
Template.header.onCreated(function () {
    this.addStatus = new ReactiveVar('add');
});

Template.header.helpers({
    addcontend() {
        return Template.instance().addStatus.get();
    },
    inccompleteCount() {
        return Tasks.find({
            checked: {
                $ne: true
            }
        }).count();
    }

});

Template.header.events({

    'change .hide-completed input' (event, instance) {
        console.log(instance, "<<<<<>>>>>>>>>", event.target.checked);
        hideCompleted = event.target.checked;
        // instance.kuchBhi.set('hideCompleted', event.target.checked);
    },
    'click .adding' (event, template) {
        template.addStatus.set('add');
    },
    'click .add' (event, template) {
        template.addStatus.set('adding');
    },
    'submit .new-task' (event) {
        event.preventDefault();

        const target = event.target;
        const text = target.text.value;

        Meteor.call("tasks.insert", text);

        target.text.value = '';
    }
});