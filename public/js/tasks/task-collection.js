define([
		'backbone'
	], function(Backbone){
		TasksList = Backbone.Collection.extend({
			url: '/tasks'
			
		});

		return TasksList;
	});