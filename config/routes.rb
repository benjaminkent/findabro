Rails.application.routes.draw do
  
  namespace :api do
    resources :answers, only: [:index, :show, :create] do
      collection do
        get :match
      end
    end
    
    resources :users, only: [:index, :show] do
      collection do
        get :profile
        get :matches
      end
    end

    post '/messages', to: 'messages#index'
    
    # Make there be a /api/thumbs URL
    # and within that, make POST /api/thumbs/up go to api/thumbs_controller.rb and call "up" method
    # and within that, make POST /api/thumbs/down go to api/thumbs_controller.rb and call "down" method
    # resources :thumbs, only: [] do
    #   collection do
    #     post :up
    #     post :down
    #   end
    # end
    post '/thumbs/up', to: 'thumbs#up'
    post '/thumbs/down', to: 'thumbs#down'

    resources :questions, only: [:index, :show]
  end

  get 'admin222033712', to: 'admin#index'
  
  scope :admin222033712 do
    resources :thumbs
    resources :answers
    resources :users
    resources :questions
  end

  get "*path", to: "application#fallback_index_html"
end
