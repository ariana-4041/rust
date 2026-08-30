class RemoteCollector {
  constructor(seed = 93) {
    this.state = seed;
  }

  handle_engine(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 93) % 997;
    }
    return count;
  }
}

const obj = new RemoteCollector();
console.log(obj.handle_engine(93));

module.exports = RemoteCollector;
