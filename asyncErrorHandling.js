// Error Handling in Async

const path = require('path');
const fetch = require('node-fetch');

async function f () {
  try {
    // function expression (const response = ) was removed
    await fetch('http://no-such-url');
  } catch (err) {
    console.log(err.code); // TypeError: failed to fetch
  }
}

f();

async function foo () {
  try {
    const fullpath = path.join(path.dirname(require.main.filename), 'users.json');
    const response = await fetch(fullpath);
    const user = await response.json();

    return user.name;
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err);
  }
}

foo();
