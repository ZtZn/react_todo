Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :tasks, only: [:index, :create,  :update]
    end
  end
  root to: 'site#index'
end
