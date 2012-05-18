class ComicController < ApplicationController
  def index
    files = {}

    respond_to do |format|
      format.js { render :json => files }
    end
  end
end
