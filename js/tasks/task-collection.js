require([
		'backbone'
	], function(Backbone){
		TasksList = Backbone.Collection.extend(){
			model: 'app.Task'
			
		}
	})