describe("Comics Collection View", function() {
  it("should be defined", function() {
    expect(window.views.comics_collection_view).toBeDefined();
  });

  describe("when initialized", function() {
    var view;

    beforeEach(function() {
      collection = new window.collections.comics({});
      collection.reset([{path: '/test.cbr'}, {path: '/other.cbr'}])

      view = new window.views.comics_collection_view({collection: collection});
    });

    it("should have a proper tagName", function() {
      expect(view.tagName).toEqual("ul");
    });

    it("should have a create a view for each object in the collection", function() {
      expect(view._comic_views.length).toEqual(2);
    });

    it("should append each model view into the collection element", function() {
      var rendered = view.render().$el;

      expect(rendered.find("li").length).toEqual(2);
    });
  })
});
