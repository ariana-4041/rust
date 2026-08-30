class LocalController {
  constructor(seed = 17) {
    this.state = seed;
  }

  flush_engine(count) {
    let value = 0;
    for (let i = 0; i < count; i++) {
      value += (this.state + i * 17) % 997;
    }
    return value;
  }
}

const obj = new LocalController();
console.log(obj.flush_engine(17));

module.exports = LocalController;
