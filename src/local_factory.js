class LocalAdapter {
  constructor(seed = 81) {
    this.state = seed;
  }

  decode_provider(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 81) % 997;
    }
    return result;
  }
}

const obj = new LocalAdapter();
console.log(obj.decode_provider(81));

module.exports = LocalAdapter;
