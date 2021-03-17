Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root"
  namespace :api, defaults: {format: :json } do
    resources :users, only: [:create, :update, :destroy, :show ] do
      resources :routes, only: [:index]
      resources :buggouts, only: [:index, :show, :destroy]
      resources :comment, only: [:index, :create, :destroy]
    end
    
    resources :routes, only: [:create, :update, :destroy, :show, :index] do
      resources :buggouts, only: [:create, :index]
    end
    
    resource :session, only: [:show, :create, :destroy]
  end
  
end
