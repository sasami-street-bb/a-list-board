Rails.application.routes.draw do
  devise_for :users
  root to: "home#index"
  resources :lists, only: [:index, :new, :create, :destroy]
end
