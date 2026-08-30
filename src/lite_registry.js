class HybridGateway {
  constructor(seed = 33) {
    this.state = seed;
  }

  fetch_factory(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 33) % 997;
    }
    return acc;
  }
}

const obj = new HybridGateway();
console.log(obj.fetch_factory(33));

module.exports = HybridGateway;
