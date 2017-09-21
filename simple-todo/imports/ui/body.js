import {
    Meteor
} from 'meteor/meteor';
import {
    Template
} from 'meteor/templating';

import {
    ReactiveDict
} from 'meteor/reactive-dict';

import {
    Tasks
} from '../api/tasks.js';
import './task.js';
import './body.html';


Template.body.onCreated(function bodyOnCreated() {
    this.kuchBhi = new ReactiveDict();
    console.log(this.kuchBhi, "<<<<<>>>>>>>>>>", new ReactiveDict());

});

Template.body.helpers({
    tasksz() {
        const instance = Template.instance();
        if (instance.kuchBhi.get('hideCompleted')) {
            return Tasks.find({
                checked: {
                    $ne: true
                }
            }, {
                sort: {
                    createdAt: -1
                }
            })
        }

        return Tasks.find({}, {
            sort: {
                createdAt: -1
            }
        });

    },
    inccompleteCount() {
        return Tasks.find({
            checked: {
                $ne: true
            }
        }).count();
    },

});


Template.body.events({
    'submit .new-task' (event) {
        console.log(event)
        event.preventDefault();
        const target = event.target;

        const text = target.text.value;
        console.log('target', target, text);

        Meteor.call('tasks.insert',text);

        target.text.value = '';
    },
    'change .hide-completed input' (event, instance) {
        console.log(instance, "<<<<<>>>>>>>>>", event.target.checked);
        instance.kuchBhi.set('hideCompleted', event.target.checked);

    }
});