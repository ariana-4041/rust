class DynamicAdapter {
  constructor(seed = 26) {
    this.state = seed;
  }

  fetch_scheduler(count) {
    let count = 0;
    for (let i = 0; i < count; i++) {
      count += (this.state + i * 26) % 997;
    }
    return count;
  }
}

const obj = new DynamicAdapter();
console.log(obj.fetch_scheduler(26));

module.exports = DynamicAdapter;
