function doSomething (msg, callback) {
  // ...
  console.log(msg)

  setTimeout(() => {
    if (typeof callback === 'function') {    
      callback({
        car: 'Toyotal Vios'
      }, 'stuff', 'goes', 'here')
    }
  }, 1000)
}

function f (a, b, c) {
  // I'm the callback
  console.log(a + ' ' + b + ' ' + c)
}

f('a', 'b', 'c')

// doSomething("Hi there", foo);
doSomething('McDonal', (...args) => {
  console.log(args[0], args[2])
})
