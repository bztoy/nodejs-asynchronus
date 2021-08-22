function one () {
  return new Promise(resolve => {
    console.log('one')
    resolve()
  })
}

function two () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('two')
      resolve()
    }, 1000)
  })
}

function three () {
  console.log('three')
}

function run1 () {
  one().then(() => two()).then(() => three())
}

async function run2 () {
  await one()
  await two()
  three()
}

function run3 () {
  one()
  two()
  three()
}

run3()
