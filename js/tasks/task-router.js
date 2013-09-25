require(
	[
     'backbone'
	],

	function(Backbone){				
		var Router = Backbone.Router.extend({
			routes:{
				'': 'home'
			}
		});

		var router = new Router();
		router.on('route:caca', function(){
			console.lo('CACA!!');
		})

		Backbone.history.start();
	});