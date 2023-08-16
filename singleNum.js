const numbers = [2, 2, 1, 3, 3];
function singleNumber(nums) {
  let singleNumMap = new Map();
  nums.forEach((num) => {
    singleNumMap.set(
      num,
      singleNumMap.get(num) === 1 ? singleNumMap.get(num) + 1 : 1
    );

    if (singleNumMap.get(num) >= 2) {
      delete singleNumMap.delete(num);
    }
  });

  let singleNum = null;
  for (let value of singleNumMap.values()) {
    singleNum = value;
  }
  return singleNum;
}

console.log(singleNumber(numbers));
