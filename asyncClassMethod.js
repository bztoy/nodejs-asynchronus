class Waiter {
  async wait (min = 1) {
    // a statment await before Promise have been remove
    return Promise.resolve(1 + min);
  }
}

new Waiter()
  .wait(5)
  .then((result) => console.log(result)); // 1
