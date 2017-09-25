FlowRouter.route('/', {
    triggersEnter: [(context, redirect) => {
        redirect('/tasks/list')
    }]
})

var taskRoutes = FlowRouter.group({
    prefix: '/tasks',
    name: 'tasks',
    triggersEnter: [(context, redirect) => {
        console.log("Entered Tasks group");
    }]
});
taskRoutes.route('/', {
    triggersEnter: [(context, redirect) => {
        redirect('/tasks/list')
    }]
})
taskRoutes.route('/list', {
    action: (params, queryParams) => {
        BlazeLayout.render('main', {
            content: 'tasksCollective'
        })
    }
});

taskRoutes.route('/add', {
    action: (params, queryParams) => {
        BlazeLayout.render('main', {
            content: "addTask"
        })

        console.log("want to add..?", params);
    }
})
taskRoutes.route('/list/:id', {
    action: (params, queryParams) => {

        BlazeLayout.render('main', {
            content: "update"
        })


    }
})