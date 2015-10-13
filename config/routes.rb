Rails.application.routes.draw do
 root to: "static_pages#index"
 resource :sessions, only: [:new, :create, :destroy]
 resources :users, only: [:new, :create]

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:show, :edit, :update, :destroy]
 end
end
