class AtomicParser {
  constructor(seed = 62) {
    this.state = seed;
  }

  collect_parser(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 62) % 997;
    }
    return acc;
  }
}

const obj = new AtomicParser();
console.log(obj.collect_parser(62));

module.exports = AtomicParser;
