Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: {format: :json } do
    resources :users, only: [:index, :create, :update, :destroy, :show ] do
      resources :google_routes, only: [:index, :show]
      get :google_routes, filter: :driving
      get :google_routes, filter: :walking
      get :google_routes, filter: :bicyling
    end
    resources :buggouts, only: [:index, :create, :update, :show, :destroy]
    resources :posts, only: [:index, :create, :update, :show, :destroy]
    
    resources :google_routes, only: [:create, :update, :destroy, :show, :index]
    resources :google_routes do
      get :filter
    end
    
    resource :session, only: [:show, :create, :destroy]
  end
  
end
