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
Template.header.onCreated(() => {});

Template.header.helpers({

    inccompleteCount() {
        return Tasks.find({
            checked: {
                $ne: true
            }
        }).count();
    }

});

Template.body.events({
    // 'submit .new-task' (event) {
    //     console.log(event)
    //     event.preventDefault();
    //     const target = event.target;

    //     const text = target.text.value;
    //     console.log('target', target, text);
    //     this.xz = "hello";
    //     Meteor.call('tasks.insert', text);
    //     console.log('>>>>>', this);
    //     target.text.value = '';
    // },
    'change .hide-completed input' (event, instance) {
        console.log(instance, "<<<<<>>>>>>>>>", event.target.checked);
        hideCompleted = event.target.checked;
        // instance.kuchBhi.set('hideCompleted', event.target.checked);
    }
});