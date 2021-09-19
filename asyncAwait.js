// The word “async” before a function means one simple thing:
// a function always returns a promise. Other values are wrapped in a resolved promise automatically.

async function f () {
  return Promise.resolve(1);
}

f().then(result => console.log(result))

// Await
// works only inside async functions
// Can’t use await in regular functions

async function foo () {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  })

  const result = await promise; // wait until the promise resolves (*)

  console.log(result); // "done!"
}

foo();
