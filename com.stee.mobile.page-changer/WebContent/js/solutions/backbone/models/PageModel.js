// Page Model
// ==============

// Includes file dependencies
define([ "jquery", "backbone"], function( $, Backbone) {

    // The Model constructor
    var PageModel = Backbone.Model.extend( {

        
        initPage: function(){
        	this.footerView.render();
        },
        


    } );

    // Returns the Model class
    return PageModel;

} );