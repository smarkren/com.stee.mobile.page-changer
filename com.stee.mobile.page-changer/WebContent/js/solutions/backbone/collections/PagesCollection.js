// Pages Collection
// ===================

// Includes file dependencies
define([ "jquery", "backbone", "../models/PageModel" ], function( $, Backbone, PageModel ) {

    // Extends Backbone.Router
    var PagesCollection = Backbone.Collection.extend( {

    	// Sets the Collection model property to be a Category Model
        model: PageModel,
        
        // The Collection constructor
        initialize: function( models, options ) {
        	//I expect we should intialize with the details of the initial page
        	this.on("add", function(data){
        		console.info("Page being added: " + data);
//        		page.init();
        	});
        },
        
        /**
         * Flushes all pages from the stack, adding the passed in page as the only page on the stack.
         * @param page
         */
        flush: function(page){
        	this.each(function(page){
        		page.remove();
        	});
        	this.reset(page);
        }

    } );

    // Returns the Model class
    return PagesCollection;

} );