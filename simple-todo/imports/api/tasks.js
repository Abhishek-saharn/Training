import {
    Meteor
} from 'meteor/meteor';
import {
    check
} from 'meteor/check';
import {
    Mongo
} from 'meteor/mongo';

export const Tasks = new Mongo.Collection('tasks');

if (Meteor.isServer) {
    Meteor.publish('ta', function tasksPublication() {
        return Tasks.find({
            $or: [{
                    private: {
                        $ne: true
                    }
                },
                {
                    owner: this.userId
                },
            ],
        });
    });

    Meteor.publish('getUpdatedTask', (id) => {
        return Tasks.find({
            _id: id
        })
    });
}




Meteor.methods({
    'tasks.insert' (text) {
        check(text, String);
        if (!Meteor.userId()) {
            throw new Meteor.Error("Not authorize");

        }
        Tasks.insert({
            text: text,
            createdAt: new Date(),
            owner: Meteor.userId(),
            username: Meteor.user().username,
        });
    },
    'tasks.remove' (taskId) {
        check(taskId, String);

        const task = Tasks.findOne({
            _id: taskId
        });

        if (task.private && task.owner != Meteor.userId()) {
            throw new Meteor.Error('not-Auth');
        }
        Tasks.remove(taskId);
    },
    'tasks.setChecked' (taskId, setChecked) {
        check(taskId, String);
        check(setChecked, Boolean);
        Tasks.update(taskId, {
            $set: {
                checked: setChecked
            },
        });
    },
    'tasks.setPrivate' (taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);
        const task = Tasks.findOne(taskId);
        if (task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not-authorized');
        }
        Tasks.update(taskId, {
            $set: {
                private: setToPrivate,
            }
        });
    },
    'tasks.update' (newText, taskId) {
        check(newText, String);
        check(taskId, String);

        const task = Tasks.findOne(taskId);
        if (task.owner !== Meteor.userId()) {
            throw new Meteor.Error('not Authorized');
        }
        (Tasks.update(taskId, {
            $set: {
                text: newText,
            }
        }));


    },
});