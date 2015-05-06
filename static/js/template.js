// Now we've configured RequireJS, we can load our dependencies and start
define([ 'ractive', 'rv!../ractive/template', 'jquery','pixl'], function ( Ractive, html, $, pixl) {



    var sampleRactive = new Ractive({
      el: 'ractiveDiv',
      template: html,
      data: {
        greeting: "Hello, World"
      }
    });

    $( document ).ready( function(){
    	createPixlGrid();
    });

    $( window ).resize( function(){
    	createPixlGrid();
    });

    function createPixlGrid() {
    	$( "#pixl-grid" ).pixl("100%","100%", 4);
    }


    return sampleRactive;

});
