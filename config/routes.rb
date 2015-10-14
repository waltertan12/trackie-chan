Rails.application.routes.draw do
 root to: "static_pages#index"
 get "sign" => "static_pages#sign_in_sign_up"
 delete "logout" => "sessions#destroy"
 resource :sessions, only: [:new, :create, :destroy]
 resources :users, only: [:new, :create]

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:show, :edit, :update, :destroy]
  resource :followings, only: [:create, :destroy]
 end
end
