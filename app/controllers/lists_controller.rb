class ListsController < ApplicationController
  before_action :authenticate_user!

  def index
    @lists = List.includes(:user)

    @wd = ["日", "月", "火", "水", "木", "金", "土"]
    @time = Time.now
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

  def destroy
    list = List.find(params[:id])
    if list.destroy
      redirect_to lists_path
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :url, :email, :password, :fee, :memo).merge(user_id: current_user.id)
  end

end
