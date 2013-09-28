require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        dpd: '/dpd'
    }
});

require(['tasks/task-router', 'dpd'], function(Router, dpd){ 

    Router.initialize()
    
});