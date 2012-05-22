describe("Comic View", function() {
  it("should be defined", function() {
    expect(window.views.comic).toBeDefined();
  });

  describe("when initialized", function() {
    var view;

    beforeEach(function() {
      comic = new window.models.comic({path: '/test.cbr'});
      view = new window.views.comic({model: comic});
    });

    it("should show the path in the rendered output", function() {
      var rendered = view.render().$el;

      expect(rendered.html()).toMatch("test.cbr");
    });
  });
});
