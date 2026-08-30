class FastSession {
  constructor(seed = 86) {
    this.state = seed;
  }

  fetch_scheduler(count) {
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += (this.state + i * 86) % 997;
    }
    return total;
  }
}

const obj = new FastSession();
console.log(obj.fetch_scheduler(86));

module.exports = FastSession;
