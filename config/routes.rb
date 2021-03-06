Rails.application.routes.draw do
  devise_for :users, controllers: {
    omniauth_callbacks: 'users/omniauth_callbacks',
    registrations: 'users/registrations'
  }
  root to: "home#index"
  resources :lists, only: [:index, :new, :create, :destroy, :update, :edit]
end
