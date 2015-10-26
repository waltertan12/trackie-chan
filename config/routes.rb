Rails.application.routes.draw do
 root to: "static_pages#index"

 get "sign_in" => "static_pages#sign_in"
 get "sign_up" => "static_pages#sign_up"
 get "guest" => "sessions#guest"

 resource :sessions, only: [:new, :create, :destroy]

 resources :users, only: [:new, :create]

 namespace :api, defaults: {format: :json} do
  resources :users, only: [:show, :edit, :update, :destroy]

  resource :followings, only: [:create, :destroy]

  resources :tracks, only: [:index, :show, :create, :edit, :update, :destroy]
  get "tracks/track_url/:id" => "tracks#track_url"

  resources :comments, only: [:index, :create, :edit, :update, :destroy]

  resources :likes, only: [:create, :destroy]
  get "user_likes" => "likes#user_index"

  resources :playlists, only: [:create, :show, :update, :destroy]
  get "user_playlists" => "playlists#user_playlists"
  post "playlists/add_track" => "playlists#add_track_to_playlist"
  delete "playlists/remove_track" =>
         "playlists#remove_track_from_playlist"

  get "feeds/user" => "feeds#dashboard_feed"
  get "feeds/explore" => "feeds#explore_feed"

  get "search" => "searches#search"
 end
end
