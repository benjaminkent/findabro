Rails.application.routes.draw do
  
  namespace :api do
    resources :answers, only: [:index, :show] do
      collection do
        get :match
      end
    end
    resources :thumbs, only: [:index, :show]
    resources :users, only: [:index, :show]
    resources :questions, only: [:index, :show]
  end

  get 'admin', to: 'admin#index'
  
  scope :admin do
    resources :thumbs
    resources :answers
    resources :users
    resources :questions
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
