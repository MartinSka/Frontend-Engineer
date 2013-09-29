define(
	[
     'jquery', 'underscore', 'backbone', 'tasks/task-collection'
	],

	function($, _, Backbone, TasksList){
		
		var TaskView = Backbone.View.extend({
			tagName: 'li',

			template: _.template( $('#task-template').html() ),

			render: function(){
				var template = this.template( this.model.toJSON() );
				this.$el.html(template);
				return this;
			}
		});				

		var TasksListView = Backbone.View.extend({
			el: $('#bla'),

			render: function(){
				var that = this;

				tasksList.fetch({
					success: function(){
						that.$el.html('');
						tasksList.each(function(task) {
							 that.addOne(task);
						});
					}
				});
			},

			addOne: function(task){
				console.log('addOne');
				taskView = new TaskView({model: task});
				this.$el.append( taskView.render().el );
			},

			initialize: function(){
				tasksList = new TasksList()
				this.render();
			}
			
		});

		return { TasksList:TasksListView, Task: TaskView }
	})