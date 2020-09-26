import consumer from "./consumer"

consumer.subscriptions.create("RoomChannel", {
  connected() {
    console.log('Room connect !!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('Room disconnect !!')
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    console.log(data)
    // Called when there's incoming data on the websocket for this channel
  }
});