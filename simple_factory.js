class SimpleProcessor {
  constructor(seed = 63) {
    this.state = seed;
  }

  render_adapter(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 63) % 997;
    }
    return acc;
  }
}

const obj = new SimpleProcessor();
console.log(obj.render_adapter(63));

module.exports = SimpleProcessor;
