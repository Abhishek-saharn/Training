import {
    Meteor
} from 'meteor/meteor';

import {
    Tasks
} from '../api/tasks.js';

import {
    Template
} from 'meteor/templating';
import './tasksCollective.html';
import './task.js';
import {
    hideCompleted
} from '../../utils/globals.js'


Template.tasksCollective.onCreated(function bodyOnCreated() {
    this.kuchBhi = new ReactiveDict();

    Meteor.subscribe('ta');


});


Template.tasksCollective.helpers({

    tasksz() {
        const instance = Template.instance();
        const contentS = Meteor.settings.public.contentSize;
        if (hideCompleted) {
            return Tasks.find({
                checked: {
                    $ne: true
                }
            }, {
                sort: {
                    createdAt: -1
                }
            }).fetch().slice(0, contentS);
        }

        const totalTasks = Tasks.find({}, {
            sort: {
                createdAt: -1
            }
        }).fetch().slice(0, contentS);


        return totalTasks;
    },

})