const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject('Numbers must be non-negative');
      }
      resolve(a + b)
    }, 2000)
  })
};

const doWork = () => {
  const sum = add(1, 99);
  const sum2 = add(sum, 50);
  return sum2;
};

doWork().then(result => {
  console.log({ result });
}).catch(e => {
  console.log(e)
});