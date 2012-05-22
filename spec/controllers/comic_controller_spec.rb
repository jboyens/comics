require 'spec_helper'

describe ComicController do
  describe "GET index" do
    before do
      mock(client = Object.new).ls {
        [{revision:2,rev:"207610731",thumb_exists:false,
          bytes:811596, modified:"Tue, 15 May 2012 05:10:42 +0000",
          client_mtime:"Tue, 15 May 2012 05:10:00 +0000",
          path:"/test.cbr",is_dir:false,icon:"page_white",
          root:"dropbox",mime_type:"application/x-cbr", size:"792.6 KB"},
         {revision:1,rev:"107610731",thumb_exists:false,
          bytes:18022863, modified:"Fri, 27 Apr 2012 07:40:22 +0000",
          client_mtime:"Tue, 03 Apr 2012 07:19:03 +0000",
          path:"/The_Walking-Dead_92.cbr",is_dir:false,
          icon:"page_white",root:"dropbox",
          mime_type:"application/x-cbr",size:"17.2 MB"}]
      }

      mock(Dropbox::API::Client).new(anything) { client }
    end

    it "should return a list of comics" do
      xhr :get, :index

      json = JSON.parse(response.body)
      json.should have(2).comics
    end
  end
end
