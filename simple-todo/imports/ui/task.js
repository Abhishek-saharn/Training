import {
    Meteor
} from 'meteor/meteor';

import {
    Template
} from 'meteor/templating';

import {
    ReactiveVar
} from 'meteor/reactive-var'

import './task.html';

Template.taskq.helpers({
    isOwner() {
        return this.owner === Meteor.userId();
    },
});

Template.taskq.events({
    'click .toggle-checked' () {
        Meteor.call('tasks.setChecked', this._id, !this.checked);
    },
    'click .delete' () {
        Meteor.call('tasks.remove', this._id);
    },
    'click .toggle-private' () {
        Meteor.call('tasks.setPrivate', this._id, !this.private)
    },
    'click .text-span' () {

        FlowRouter.go(`/${this._id}`);
        
    }
});