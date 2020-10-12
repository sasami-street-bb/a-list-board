class ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    @lists = List.includes(:user)
  end

  def new
    @list = List.new
  end

  def create
    @list = List.new(list_params)
    if @list.save
      redirect_to lists_path
    else
      render :new
    end
  end

  def destroy
    list = List.find(params[:id])
    if list.destroy
      redirect_to lists_path
    end
  end

  def edit
    @list = List.find(params[:id])
  end

  def update
    list = List.find(params[:id])
    if list.update(list_params)
      redirect_to lists_path
    else
      render :edit
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :url, :email, :password, :fee, :memo).merge(user_id: current_user.id)
  end

end
