// Accepts a url and a callback function to run.
function requestCrossDomain( site, callback ) {
    
    // If no url was passed, exit.
    if ( !site ) {
        alert('No site was passed.');
        return false;
    }
    
    // Take the provided url, and add it to a YQL query. Make sure you encode it!
    var yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from html where url="' + site + '"') + '&format=json&callback=?';
    
    // Request that YSQL string, and run a callback function.
    // Pass a defined function to prevent cache-busting.
    $.getJSON( yql, cbFunc );
    
    function cbFunc(data) {   
        console.log(data.query.results.body.h1.content);
        console.log(data.image_wrap2);

        http://img.zonaprop.com.ar/images/post/l/1/368/1/3682011.jpg
        //data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        //console.log( $(data)[1].innerHTML );
    // If we have something to work with...
    /*if ( data.results[0] ) {
        // Strip out all script tags, for security reasons.
        // BE VERY CAREFUL. This helps, but we should do more. 
        data = data.results[0].replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
        
        
        // If the user passed a callback, and it
        // is a function, call it, and send through the data var.
        /*if ( typeof callback === 'function') {
            callback(data);
        }
    }
    // Else, Maybe we requested a site that doesn't exist, and nothing returned.
    else throw new Error('Nothing returned from getJSON.');*/
    }
}