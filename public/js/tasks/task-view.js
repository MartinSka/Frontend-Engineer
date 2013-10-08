define(
	[
     'jquery', 'underscore', 'backbone', 'tasks/task-collection'
	],

	function($, _, Backbone, TasksList){

		var TaskInfoView = Backbone.View.extend({
			el: '#sidebar',

			template: _.template( $('#taskInfo-template').html() ),

			initialize: function(){
				this.render();
				this.listenTo(this.model, 'change', this.render);
			},

			render: function(){
				console.log('render');
				this.$el.html('');
				var template = this.template( this.model.toJSON() );
				this.$el.html( template );
				return this;
			}
		});
		
		var TaskView = Backbone.View.extend({
			tagName: 'li',
			className: 'panel',

			events:{
				'click [data-icon="trash"]': 'delete',
				'blur [contenteditable]': 'update',
				'keypress [contenteditable]': 'updateEnter',
				'click': 'taskInfo'
			},

			template: _.template( $('#task-template').html() ),

			render: function(){
				var template = this.template( this.model.toJSON() );
				this.$el.html(template);
				return this;
			},

			delete: function(){
				that = this;
				this.model.destroy({
					success: function(){
						console.log('success');
						that.remove();
					}
				});
				this.remove();
			},

			update: function(){				
				title = this.model.toJSON();
				newTitle = this.$el.find('label').html();
				
				if(title.title != newTitle){
					this.model.set( { title: newTitle } );
					this.model.save();
				};
			},

			updateEnter: function(e){
				if (e.keyCode === 13){
					this.$el.find('label').blur();
					this.update();
				};

				//Ver tema del keypress, keyup, keydown
				newTitle = this.$el.find('label').html();
				$('#sidebar').find('h3').html(newTitle);
			},

			taskInfo: function(){
				var taskInfo = new TaskInfoView({model: this.model});
			}
		});				

		var TasksListView = Backbone.View.extend({
			el: $('#tasks'),			

			render: function(){
				var that = this;

				tasksList.fetch({
					success: function(){
						tasksList.each(function(task) {							
							that.addOne(task);
						});
					}
				});
			},

			addOne: function(task){
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