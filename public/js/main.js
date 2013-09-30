require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        dpd: '/dpd'
    }
});

require(['tasks/task-router', 'tasks/task-model', 'dpd'], function(Router, dpd){ 

    Router.initialize();

    $('#new-task').submit(function(e) {
    	e.preventDefault();
    	value = $(this).find('input').val();
    	//Crear view, despues model y salvar
    	//task = new Task({title: value});
    	//task.save();
    });    
});