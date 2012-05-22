(function() {
  window.views.comic = Backbone.View.extend({
    tagName: 'li',

    events: {
      "click .comic_link": "open"
    },

    open: function() {
      window.app.navigate("comic/"+this.model.get('path'));
    },

    render: function() {
      this.$el.append("<a href=\"#\" class=\"comic_link\">"+this.model.get('path')+"</a>");

      return this;
    }
  });
})();
