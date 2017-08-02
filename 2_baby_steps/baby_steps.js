const sum = process.argv
              .slice(2)
              .map(i => Number(i))
              .reduce((a, b) => a + b, 0);
console.log(sum);