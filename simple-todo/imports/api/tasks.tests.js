import {
    Meteor
} from 'meteor/meteor'

import {
    Random
} from 'meteor/random'

import {
    Tasks
} from './tasks.js'

import {
    assert
} from 'meteor/practicalmeteor:chai';

if (Meteor.isServer) {
    describe('Tasks', () => {
        describe('Success Calls', () => {

            const userId = Random.id();
            let taskId;
            beforeEach(() => {
                Tasks.remove({});
                taskId = Tasks.insert({
                    text: 'Test task',
                    createdAt: new Date(),
                    owner: userId,
                    username: "test_User_1"
                });

            });

            it('can create a new Task', () => {
                const insertTask = Meteor.server.method_handlers['tasks.insert'];
                const newTask = 'Task 2';

                const invocation = {
                    userId
                };
                insertTask.apply(invocation, [newTask]);

                assert.equal(Tasks.find().count(), 2);
            });


            it('can delete own task', () => {

                const deleteTask = Meteor.server.method_handlers['tasks.remove'];

                const invocation = {
                    userId
                };
                deleteTask.apply(invocation, [taskId]);
                assert.equal(Tasks.find().count(), 0);
            });


            it('can update its own task', () => {
                const updateTask = Meteor.server.method_handlers['tasks.update'];

                const newTaskName = "Test task updated";
                const invocation = {
                    userId
                };
                const vals = updateTask.apply(invocation, [taskId, newTaskName]);
                assert.equal(vals, 1);
            });

            it('can set checked', () => {
                const updateChecked = Meteor.server.method_handlers['tasks.setChecked'];
                const value = true;
                const vals = updateChecked.apply({}, [taskId, value]);
                assert(vals, 1);


            });

            it('can set Private', () => {
                const updatePrivate = Meteor.server.method_handlers['tasks.setPrivate'];
                const value = true;
                const invocation = {
                    userId
                }
                const vals = updatePrivate.apply(invocation, [taskId, value]);
                assert(vals, 1);

            });


        });
        describe('Faliure Calls', () => {

            let taskId;
            let userId = Random.id();
            beforeEach(() => {
                Tasks.remove({});
                taskId = Tasks.insert({
                    owner: userId,
                    text: 'Original Test Text',
                    createdAt: new Date(),
                    username: "Original Username"
                });

            });

            it('Cannot insert without login', () => {
                const insertTask = Meteor.server.method_handlers['tasks.insert'];
                const text = "new Original ";
                insertTask.apply({}, [text]);
                assert(Tasks.find().count(), 1);

            });
            it('Cannnot Remove other\'s Private Task', () => {
                const removeTask = Meteor.server.method_handlers['tasks.remove'];
                userId = Random.id();
                const newText = "New Task";
                Tasks.update(taskId, {
                    $set: {
                        private: true
                    },
                });
                const invocation = {
                    userId
                };
                removeTask.apply(invocation, [taskId]);
                assert.equal(Tasks.find().count(), 1);
            });

            it('Cannot set private others\'s private Tasks', () => {
                const makePrivateTask = Meteor.server.method_handlers['tasks.setPrivate'];
                userId = Random.id();
                const invocation = {
                    userId
                };
                const vals = makePrivateTask.apply(invocation, [taskId, true]);
                assert.equal(vals, 0);
            });

            it('Cannot Update others\'s private Tasks', () => {
                const updateTask = Meteor.server.method_handlers['tasks.update'];
                userId = Random.id();
                const invocation = {
                    userId
                };
                const newTask = "New Task Name";
                const vals = updateTask.apply(invocation, [taskId, newTask]);
                assert.equal(vals, 0);
            });


        });
    });
}