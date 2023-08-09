// function Declaration with parameters

function calcutaeSum(min, max) {
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  console.log(`sum is ${sum}`);
}

calcutaeSum(1, 10);
