require 'spec_helper'

describe ComicController do
  describe "GET index" do
    it "should return a list of comics" do
      xhr :get, :index

      json = JSON.parse(response.body)
      json.should have(2).comics
    end
  end
end
