define([
		'backbone'
	], function(Backbone){
		Task = Backbone.Model.extend({
			urlRoot: '/tasks',

			default: {
				complete: false
			}
		});
	})