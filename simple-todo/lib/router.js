FlowRouter.route('/', {
    action: (params, queryParams) => {
        BlazeLayout.render('main', {
            content: "tasksCollective"
        })
    }
})

FlowRouter.route('/addTasks', {
    action: (params, queryParams) => {
        BlazeLayout.render('main', {
            content: "addTask"
        })

        console.log("want to add..?", params);
    }
})