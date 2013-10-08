require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        dpd: '/dpd'
    }
});

require(['tasks/task-router', 'tasks/task-view', 'dpd'], function(Router, View, dpd){ 

    Router.initialize();

    $('#new-task').submit(function(e) {
    	e.preventDefault();
    	value = $(this).find('input');
    	
    	task = new Task({title: value.val()});

    	task.save({
    		success: function(){
                console.log('sucess');
                viewtasksList.addOne(task);
    			value.val('');
    		}
    	});
        
        viewtasksList.addOne(task);
        value.val('');
	
    });    

});