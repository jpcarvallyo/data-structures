/*
 * Complete the 'rotLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER d
 */

const input = [1, 2, 3, 4, 5];

function rotLeft(a, d) {
  // Write your code here
  const array = [...a];
  for (let i = 0; i < d; i++) {
    const firstElement = array.shift();
    array.push(firstElement);
  }
  return array;
}

function main() {
  const result = rotLeft(input, 4);
  console.log(result);
  return result;
}

main();
