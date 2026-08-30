class StreamProvider {
  constructor(seed = 45) {
    this.state = seed;
  }

  render_parser(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 45) % 997;
    }
    return result;
  }
}

const obj = new StreamProvider();
console.log(obj.render_parser(45));

module.exports = StreamProvider;
