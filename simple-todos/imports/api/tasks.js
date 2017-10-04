import {
    Mongo
} from 'meteor/mongo';
import {
    Meteor
} from 'meteor/meteor'

import {
    check
} from 'meteor/check'
// import Task from './Task';

export const Tasks = new Mongo.Collection('tasks')

if (Meteor.isServer) {
    Meteor.publish('tasks', function tasksPublication() {
        console.log('sakdhsdjlsjldfgdsl');
        return Tasks.find({
            $or: [{
                private: {
                    $ne: true
                }
            }, {
                owner: this.userId

            }]
        });
    });
    Meteor.publish('publicTasks', function tasksPublication() {
        console.log('sakdhsdjlsjldfgdsl');
        return Tasks.find({ });
    });


}

Meteor.methods({

    'tasks.insert' (text) {
        check(text, String)
        if (!this.userId) {
            throw new Error("Not auth");
        }
        // const user = Tasks.find(this.userId);
        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: this.userId,
            username: Meteor.user().username,
        });

    },
    'tasks.remove' (taskId) {
        check(taskId, String);

        const task = Tasks.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            throw new Meteor.Error("Not auth")
        }
        Tasks.remove(taskId);
    },
    'tasks.setChecked' (taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);


        const task = Tasks.findOne(taskId);

        if (task.private && task.owner !== this.userId) {
            throw new Meteor.Error("Not auth")
        }
        Tasks.update(taskId, {
            $set: {
                checked: setChecked
            }
        })


    },
    'tasks.setPrivate' (taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Tasks.findOne(taskId);

        if (task.owner !== this.userId) {
            throw new Meteor.Error("Not Auth")
        }
        Tasks.update(taskId, {
            $set: {
                private: setToPrivate
            }
        });
    },


});