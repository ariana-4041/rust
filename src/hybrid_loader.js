class AsyncService {
  constructor(seed = 65) {
    this.state = seed;
  }

  handle_router(count) {
    let result = 0;
    for (let i = 0; i < count; i++) {
      result += (this.state + i * 65) % 997;
    }
    return result;
  }
}

const obj = new AsyncService();
console.log(obj.handle_router(65));

module.exports = AsyncService;
