define([
		'backbone'
	], function(Backbone){
		Task = Backbone.Model.extend({
			default: {
				complete: false
			}
		});
	})