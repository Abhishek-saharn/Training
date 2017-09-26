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
import './header.js';
import './tasksCollective.js';
// import './addTask.js';
import './update.js';
import './body.html';

Template.body.onCreated(() => {
});

Template.body.helpers({
    name() {
        
    },
});


