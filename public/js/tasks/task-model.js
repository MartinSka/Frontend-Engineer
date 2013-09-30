define([
		'backbone'
	], function(Backbone){
		Task = Backbone.Model.extend({
			url: '/tasks',

			default: {
				complete: false
			}
		});
	})