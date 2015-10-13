Rails.application.routes.draw do
 root to: "static_pages#index"
 resource :sessions, only: [:new, :create, :destroy]
 resources :users, only: [:new, :show, :create, :update, :destroy]
end
