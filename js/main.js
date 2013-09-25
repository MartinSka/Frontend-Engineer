require.config({
    paths: {
        jquery: 'vendor/jquery-2.0.3',
        underscore: 'vendor/underscore',
        backbone: 'vendor/backbone',
        localStorage: 'vendor/backbone.localStorage',        
    }
});

require(['backbone'], function(Backbone){ 


var Router = Backbone.Router.extend({
            routes:{
                '': 'home'
            }
        });

        var router = new Router();
        router.on('route:home', function(){
            console.log('CACA!!');
        })

        Backbone.history.start();    
    
});