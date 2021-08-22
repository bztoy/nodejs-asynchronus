const fetch = require('node-fetch')
const path = require('path')

async function f () {
  try {
    const response = await fetch('http://no-such-url')
  } catch (err) {
    console.log(err.code) // TypeError: failed to fetch
  }
}

f()

async function foo () {
  try {
    const fullpath = path.join(path.dirname(require.main.filename), 'users.json')
    const response = await fetch(fullpath)
    const user = await response.json()

    return user.name
  } catch (err) {
    // catches errors both in fetch and response.json
    console.log(err)
  }
}

foo()
