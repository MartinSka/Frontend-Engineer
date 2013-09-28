define(
	[
     'jquery', 'underscore', 'backbone', 'tasks/task-collection'
	],

	function($, _, Backbone, TasksList){				
		var TasksListView = Backbone.View.extend({
			el: $('#bla'),

			render: function(){
				var tasksList = new TasksList(),
					that = this;

				tasksList.fetch({
					success: function(tasksList){						
						var template = _.template($('#task-template').html(), {title: 'tasksList.models'});
						that.$el.append(template);		
					}
				});
			},

			initialize: function(){
				this.render();
			}
			
		});

		return TasksListView;
	})