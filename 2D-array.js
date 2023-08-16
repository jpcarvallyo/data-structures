const array = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

// Helper function to count the sum of the hourglass;
function countSumFn(
  counter,
  topLeft,
  topMiddle,
  topRight,
  centerOfHG,
  bottomLeft,
  bottomMiddle,
  bottomRight
) {
  counter += topLeft;
  counter += topMiddle;
  counter += topRight;
  counter += centerOfHG;
  counter += bottomLeft;
  counter += bottomMiddle;
  counter += bottomRight;
  return counter;
}

// flag determines whether to output just the largestSum or an array with the highest sum and an array of the entire counts
function hourglassSum(arr, flag = false) {
  let counter = 0;
  const arrBasket = []; // Array to house the hourGlass sums;
  // Traverse the entire 2D array;

  let mainRightBoundary = arr[0].length;
  let mainBottomBoundary = arr.length;
  let highestNumber = 0;

  // Traverse left to right;
  const sweepRight = (mainTopBoundary, leftBoundary, rightBoundary) => {
    while (rightBoundary < mainRightBoundary) {
      // Capture the hourglass shape;
      let topLeft = arr[mainTopBoundary][leftBoundary];
      let topMiddle = arr[mainTopBoundary][leftBoundary + 1];
      let topRight = arr[mainTopBoundary][leftBoundary + 2];
      let centerOfHG = arr[mainTopBoundary + 1][leftBoundary + 1];
      let bottomLeft = arr[mainTopBoundary + 2][leftBoundary];
      let bottomMiddle = arr[mainTopBoundary + 2][leftBoundary + 1];
      let bottomRight = arr[mainTopBoundary + 2][leftBoundary + 2];

      // push to arrBasket
      const currentNumber = countSumFn(
        counter,
        topLeft,
        topMiddle,
        topRight,
        centerOfHG,
        bottomLeft,
        bottomMiddle,
        bottomRight
      );
      if (currentNumber > highestNumber) {
        highestNumber = currentNumber;
      }
      if (flag) {
        arrBasket.push(
          countSumFn(
            counter,
            topLeft,
            topMiddle,
            topRight,
            centerOfHG,
            bottomLeft,
            bottomMiddle,
            bottomRight
          )
        );
      }

      // Establish next hourglass position and reset the count;
      leftBoundary++;
      rightBoundary++;
      counter = 0;
    }

    // Reset the boundaries for the next sweep
    rightBoundary = 2;
    leftBoundary = 0;
  };

  // Go top to bottom of main boundaries
  for (
    let top = 0, leftBoundary = 0, rightBoundary = leftBoundary + 2;
    top < mainBottomBoundary;
    top++
  ) {
    if (top + 2 === mainBottomBoundary) {
      break;
    } else {
      sweepRight(top, leftBoundary, rightBoundary);
    }
  }
  const result = {
    highestNumber,
    counts: arrBasket,
  };
  return flag ? result : result.highestNumber;
}
function main() {
  const largestSum = hourglassSum(array, true);

  console.log(largestSum);
  return largestSum;
}

main();
