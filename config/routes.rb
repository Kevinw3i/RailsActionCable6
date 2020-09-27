Rails.application.routes.draw do
  get 'item/index'
  get 'rooms/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root to: "rooms#index"
end
