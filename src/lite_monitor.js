class SecureCollector {
  constructor(seed = 75) {
    this.state = seed;
  }

  handle_monitor(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 75) % 997;
    }
    return count;
  }
}

const obj = new SecureCollector();
console.log(obj.handle_monitor(75));

module.exports = SecureCollector;
