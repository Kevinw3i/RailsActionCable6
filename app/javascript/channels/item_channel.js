import consumer from "./consumer"

consumer.subscriptions.create("ItemChannel", {
  connected() {
    console.log('Item connect !!')
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    console.log('Item disconnect !!')
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});
