// Promise function
// Its arguments resolve and reject are callbacks provided by JavaScript itself.
// Our code is only inside the executor.

const promise = new Promise(function (resolve, reject) {
  // executor (the producing code, "singer")

  // after 1 second signal that the job is done with the result "done"
  setTimeout(() => resolve('done'), 1000)

  // Error: Whoops!" after 1 second
  // setTimeout(() => reject(new Error("Whoops!")), 1000);
})

// When the executor obtains the result, be it soon or late, doesn’t matter,
// it should call one of these callbacks:
// - resolve(value) — if the job finished successfully, with result value.
// - reject(error) — if an error occurred, error is the error object.

promise.then(
  result => console.log('Success :' + result),
  error => console.log('Error : ' + error)
)

// f we’re interested only in successful completions,
// then we can provide only one function argument to .then:

promise.then() // shows "done!" after 1 second
