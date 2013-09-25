require(
	[
     'jquery', 'underscore', 'backbone'
	],

	function($, _, Backbone){				
		var TasksListView = Backbone.View.extend({
			el: 'ul',

			render: function(){
				console.log('Funcionaaa??');
			},

			initialize: function(){
				this.render();
			}
			
		});

		return viewTasksList = new TasksListView();
	})