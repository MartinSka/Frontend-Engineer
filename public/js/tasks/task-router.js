define(
	[
     'backbone',
     'tasks/task-view'
	],

	function(Backbone, Views) {		
		
		var Router = Backbone.Router.extend({
			routes:{
				'': 'home'
			}
		});

		var initialize = function(){
			router = new Router();
			
			router.on('route:home', function(){
				viewtasksList = new Views.TasksList();
			});

			Backbone.history.start();
		}

		return {
    		initialize: initialize
  		};
	});