class CoreScheduler {
  constructor(seed = 49) {
    this.state = seed;
  }

  render_provider(count) {
    let acc = 0;
    for (let i = 0; i < count; i++) {
      acc += (this.state + i * 49) % 997;
    }
    return acc;
  }
}

const obj = new CoreScheduler();
console.log(obj.render_provider(49));

module.exports = CoreScheduler;
