var pageChanger = pageChanger || {};

// Sets the require.js configuration for your application.
require.config( {

      // 3rd party script alias names (Easier to type "jquery" than "libs/jquery-1.8.2.min")
      paths: {

            // Core Libraries
    	    "text": "../../../libs/text",
            "jquery": "../../../libs/jquery",
            "jquerymobile": "../../../libs/jquery.mobile",
            "underscore": "../../../libs/lodash",
            "backbone": "../../../libs/backbone"
      },

      // Sets the configuration for your third party scripts that are not AMD compatible
      shim: {

            "backbone": {
                  "deps": [ "text", "underscore", "jquery" ],
                  "exports": "Backbone"  //attaches "Backbone" to the window object
            }

      } // end Shim Configuration

} );

// Includes File Dependencies
require([ "jquery", "backbone", "jquerymobile", "../main/PageController", ], function( $, Backbone, jqm, PageController) {

	$( document ).on( "mobileinit",
		// Set up the "mobileinit" handler before requiring jQuery Mobile's module
		function() {
			// Prevents all anchor click handling including the addition of active button state and alternate link bluring.
			$.mobile.linkBindingEnabled = false;

			// Disabling this will prevent jQuery Mobile from handling hash changes
			$.mobile.hashListeningEnabled = false;
		}
	);
	

	
	pageChanger.controller = new PageController();


} );




/**
 * ####################################### Initialization Functions #############################################
 */

var PAGE1_URL = "page1.html";
var PAGE2_URL = "page2.html";
var PAGE3_URL = "page3.html";

var DIALOG1_URL = "dialog1.html";
var DIALOG2_URL = "dialog2.html";
var DIALOG3_URL = "dialog3.html";

var TABPAGE1_URL = "tab1.html";
var TABPAGE2_URL = "tab2.html";
var TABPAGE3_URL = "tab3.html";
	

	
	



