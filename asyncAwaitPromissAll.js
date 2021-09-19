async function one () {
  return new Promise(resolve => {
    console.log('one');
    resolve()
  });
}

async function two () {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('two');
      resolve()
    }, 1000)
  });
}

async function run () {
  await Promise.all([
    one(),
    two()
  ]);
}

console.log('start');
run().then(result => console.log('finish'));
