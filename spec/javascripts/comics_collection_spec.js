describe("Comics Collection", function() {
  it("should be defined", function() {
    expect(window.collections.comics).toBeDefined();
  });

  it("should have a proper URL", function() {
    expect(new window.collections.comics().url).toEqual("/");
  });
});
