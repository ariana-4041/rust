class SimpleHandler {
  constructor(seed = 45) {
    this.state = seed;
  }

  fetch_gateway(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 45) % 997;
    }
    return total;
  }
}

const obj = new SimpleHandler();
console.log(obj.fetch_gateway(45));

module.exports = SimpleHandler;
