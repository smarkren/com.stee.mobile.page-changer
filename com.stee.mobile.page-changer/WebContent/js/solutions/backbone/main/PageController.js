// Page Controller
// ==============

// Includes file dependencies
define([ "jquery", 
         "backbone", 
         "../views/FooterNavbarView", 
         "../collections/PagesCollection", 
         "../models/PageModel", 
         "../views/PageView",
         "text!../templates/templates.html!strip",
         "jquerymobile"], function( 
        		 $, 
        		 Backbone, 
        		 FooterNavbarView, 
        		 PagesCollection, 
        		 PageModel,
        		 PageView,
        		 templates) {

    // The Model constructor
    var PageController = Backbone.Router.extend( {
    	
    	initialize: function() {
    		this.pageStack = [];
    		
    		var self = this;
    		this.templates = {};
    		
    		var $templatesBlob = $.parseHTML(templates);
    		_.each($templatesBlob, function(element){
    			if (element.tagName == "SCRIPT"){
    				self.templates[element.className] = _.template($(element).html());
    			}
    		});
    		
			var initialPage = new PageView({
    			el: $.mobile.activePage[0],
    			controller: this,
    		});
    	
			initialPage.render();
    		self.pageStack = [initialPage];

    	},
    	
    	getTemplate: function(templateId){
    		return this.templates[templateId];
    	},
    	
    	changePage: function(url, changeType){
    		var self = this;

    		$(document).one("pagebeforecreate", function(event, data){

    			var page = new PageView({
        			el: $(event.target)[0],
        			controller: self
        		});
    			page.render();
    			_.each(self.pageStack, function(pageView){
    				pageView.dispose();
    			});
    			self.pageStack = [page];
    		});
    		

    		
    		$.mobile.changePage( url );
    		
    	},
    	
    	openDialog: function(url){
    		
    	},
    	
    	openTab: function(url){
    		
    	},
    	
    	routes: {
    		"/":		"all"
    	},
    	
    	all: function(args){
    		console.info("Routing... " + args);
    	}
    
    
    } );

    
    
    
    // Returns the PageController class
    return PageController;
} );