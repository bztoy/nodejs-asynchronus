class Waiter {
  async wait (min = 1) {
    return await Promise.resolve(1 + min)
  }
}

new Waiter()
  .wait(5)
  .then((result) => console.log(result)) // 1
