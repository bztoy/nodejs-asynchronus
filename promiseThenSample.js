function one () {
  return new Promise(resolve => {
    console.log('one');
    resolve();
  })
}

function two () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('two');
      resolve();
    }, 1000);
  })
}

function three () {
  console.log('three');
}

// the sequence will be one, two, tree
function run1 () {
  one().then(() => two()).then(() => three());
}

// the sequence will be one, two, tree
async function run2 () {
  await one();
  await two();
  three();
}

// the sequence will be one, three, two
function run3 () {
  one()
  two()
  three()
}

run2();
