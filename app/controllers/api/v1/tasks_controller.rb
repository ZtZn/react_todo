class Api::V1::TasksController < Api::V1::BaseController
  def index
    respond_with Task.all
  end

  def create
    respond_with :api, :v1, Task.create(item_params)
  end

  def update
    task = Task.find(params["id"])
    task.done = true
    task.save
    respond_with task, json: task
  end

  private

  def item_params
    params.require(:task).permit(:title)
  end
end
