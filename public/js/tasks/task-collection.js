define([
		'backbone', 'tasks/task-model'
	], function(Backbone){
		TasksList = Backbone.Collection.extend({
			url: '/tasks',
			model: Task
		});

		return TasksList;
	});