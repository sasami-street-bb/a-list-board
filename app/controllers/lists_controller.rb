class ListsController < ApplicationController

  def index
    @lists = List.includes(:user)
  end

  def new
    @list = List.new
  end

  def create
    # binding.pry
    @list = List.new(list_params)
    if @list.save
      redirect_to lists_path
    else
      render :new
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :email, :password, :fee, :memo).merge(user_id: current_user.id)
  end

end
