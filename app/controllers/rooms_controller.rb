class RoomsController < ApplicationController
  def index
    ActionCable.server.broadcast('notification_channel', 'hello form index')
  end
end
