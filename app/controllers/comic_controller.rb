class ComicController < ApplicationController
  def index
    client = Dropbox::API::Client.new(:token  => 'q8fshvjni893ql0', :secret => 'x7kmkjhi8caki5t')

    @files = client.ls

    respond_to do |format|
      format.html { render }
      format.js   { render :json => @files }
    end
  end
end
