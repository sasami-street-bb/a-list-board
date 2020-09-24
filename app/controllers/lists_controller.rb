class ListsController < ApplicationController

  def index
    @lists = List.includes(:user)
  end

  def new
  end

  def create
  end

end
