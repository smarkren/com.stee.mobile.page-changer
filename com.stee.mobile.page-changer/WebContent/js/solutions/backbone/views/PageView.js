// Category View
// =============

// Includes file dependencies
define([ "jquery", "backbone", "../models/PageModel",
		"../collections/PagesCollection" ], function($, Backbone, PageModel,
		PagesCollection) {

	// Extends Backbone.View
	var PageView = Backbone.View.extend({
		
		initialize: function(options){
			this.$page = this.$el;
			this.controller = options.controller;
			this.$header = this.$el.children(":jqmData(role=header)");
			this.$content = this.$el.children(":jqmData(role=content)");
			this.$footer = this.$el.children(":jqmData(role=footer)");
			this.rendered = false;
			this.visible = true; //safe default.
			
			var self = this;
			this.$page.on("pageshow pagehide", function(event){
				if (event.type === "pageshow"){
					self.visible = true;
				}else{
					self.visible = false;
				}
			});
		},



		// Renders all of the Category models on the UI
		render : function() {

			if (!this.rendered){
				// Sets the view's template property
				var template = this.controller.getTemplate("buttons_template");
				
				this.$content.append(template());
				$("a.pageButtons", this.$content).button();
				this.initButtons();
				this.rendered = true;
			}
	
			return this;
		},
		
		initButtons: function(){
			var self = this;
			$('#page1_btn', self.$content).on("click", function(){
				self.controller.changePage(PAGE1_URL);
			});
			$('#page2_btn', self.$content).on("click", function(){
				self.controller.changePage(PAGE2_URL);
			});
			$('#page3_btn', self.$content).on("click", function(){
				self.controller.changePage(PAGE3_URL);
			});
		},
		
		dispose: function(){
			if (this.visible){
				var self = this;
				this.$page.on("pagehide", function(){
					self.$page.remove();
				});
			}else{
				this.$page.remove();
			}
		}

	});

	// Returns the View class
	return PageView;

});