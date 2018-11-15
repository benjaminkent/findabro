Rails.application.routes.draw do
  namespace :api do
    resources :users, only: [:index, :show]
  end

  get 'admin', to: 'admin#index'
  
  scope :admin do
    resources :users
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
