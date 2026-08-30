class LiteLoader {
  constructor(seed = 88) {
    this.state = seed;
  }

  parse_loader(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 88) % 997;
    }
    return acc;
  }
}

const obj = new LiteLoader();
console.log(obj.parse_loader(88));

module.exports = LiteLoader;
