function asyncExample(x) {
  return new Promise((resolve) => {
    const res = x + 10;
    resolve(res);
  });
}

async function mainAsync() {
  const res = await asyncExample(10);
  console.log(res);
}

mainAsync();
