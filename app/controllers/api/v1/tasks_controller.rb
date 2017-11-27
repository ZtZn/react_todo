class Api::V1::TasksController < Api::V1::BaseController
  def index
    respond_with Task.all
  end

  def create
    respond_with :api, :v1, Tasks.create(item_params)
  end

  private

  def item_params
    params.require(:item).permit(:title)
  end
end
