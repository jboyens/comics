(function() {
  window.views.comics_collection_view = Backbone.View.extend({
    tagName: 'ul',
    className: 'nav nav-pills nav-stacked',

    initialize: function() {
      this._comic_views = [];

      this.collection.each(_.bind(function(model) {
        this._comic_views.push(new window.views.comic({model: model}));
      }, this));
    },

    render: function() {
      _.each(this._comic_views, _.bind(function(view) {
        this.$el.append(view.render().$el);
      }, this));

      return this;
    }
  });
})();
