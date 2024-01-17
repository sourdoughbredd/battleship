export { pubsub };

class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // Subscribe to an event
  subscribe(event, callback) {
    if (!this.subscribers[event]) {
      this.subscribers[event] = [];
    }
    this.subscribers[event].push(callback);
  }

  // Publish an event
  publish(event, data) {
    if (this.subscribers[event]) {
      this.subscribers[event].forEach((callback) => {
        callback(data);
      });
    }
  }

  // Unsubscribe from an event
  unsubscribe(event, callback) {
    if (this.subscribers[event]) {
      this.subscribers[event] = this.subscribers[event].filter(
        (cb) => cb !== callback
      );
    }
  }
}

// Create an instance to export to other modules
const pubsub = new PubSub();
