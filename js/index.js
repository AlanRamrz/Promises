
const alanPromise = new Promise((resolve, reject) => {
  var salary = 10

  if (salary > 500) {
    resolve('Alan is happy')
  } else {
    reject('Alan is angry')
  }
})

const alanPromise2 = (salary) => {
  return new Promise ((resolve, reject) => {
    if (salary > 500) {
      resolve('Alan is happy')
    } else {
      reject('Alan is angry')
    }
  })
}


const suma10 = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num + 10)
  })
}

const suma5 = (num) => {
  return new Promise((resolve, reject) => {
    resolve(num + 5)
  })
}


alanPromise
.then(text => {
  console.log(text);
})
.catch(error => {
  console.log(error);
})
.finally(() => {
  console.log('Anyway he works');
})

alanPromise2(1000)
.then(out => {
  console.log(out)
  return out + '!!!!!'
})
.then(out2 => {
  console.log(out2)
})
.catch(error => {
  console.log(error)
})


suma10(30)
.then(res => {
  suma5(res)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
})
.catch(error => {
  console.log(error);
})

suma10(50)
.then(res => {
  return suma5(res)
})
.then(res => {
  console.log(res);
})
.catch(error => {
  console.log(error);
})

suma10(50)
.then(res => suma5(res))
.then(res => {
  console.log('perrito: ' + res);
})
.catch(error => {
  console.log(error);
})
