class StreamFactory {
  constructor(seed = 65) {
    this.state = seed;
  }

  run_engine(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 65) % 997;
    }
    return acc;
  }
}

const obj = new StreamFactory();
console.log(obj.run_engine(65));

module.exports = StreamFactory;
