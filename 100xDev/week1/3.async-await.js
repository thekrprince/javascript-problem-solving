function add(arrr) {
  return new Promise((resolve) => {
    let sum = 0;
    for (let i = 0; i < arrr.length; i++) {
      sum += arrr[i];
    }
    resolve(sum);
  });
}

async function main(arr) {
  const sumRes = await add(arr);
  console.log(`The sum of ${arr} is ${sumRes}`);
  console.log("End");
}

console.log("start");
main([2, 8, 12, 4]);
