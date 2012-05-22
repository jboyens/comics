(function() {
  window.router = Backbone.Router.extend({
    routes: {
      "comic/:path": "show"
    },

    show: function(path) {
      console.log("SHOW "+path);
    }
  });

  window.app = new window.router;
})();
