// Category View
// =============

// Includes file dependencies
define([ "jquery", "backbone", "../models/PageModel",
		"../collections/PagesCollection" ], function($, Backbone, PageModel,
		PagesCollection) {

	// Extends Backbone.View
	var FooterNavbarView = Backbone.View.extend({

		events : {
			"click .navpanel-item" : "open"
		},

		open : function(event) {
			var pageId = $(event.currentTarget).attr('data-pageId');
			var pageModel = this.collection.get(pageId);
			window.controller.changePage(pageModel.get("url"));
		},

		// Renders all of the Category models on the UI
		render : function() {
			if (this.$navbar){
				throw new error("footer already added numb nuts!");
			}

			// Sets the view's template property
			var $templateScript = $("script.footer-navbar");
			this.template = _.template($templateScript.html(), {
				"collection" : this.collection
			});

			var $footer = this.$el.children(":jqmData(role=footer)");
			$footer.append(this.template);
			this.$navbar = $footer.children(":jqmData(role=navbar)");
			this.$navbar.navbar();
			this.$navbar.one("pagebeforeshow", function(){
				this.$navbar.navbar('refresh');
				console.info("refreshed.");
			});

			// Maintains chainability
			return this;

		}

	});

	// Returns the View class
	return FooterNavbarView;

});