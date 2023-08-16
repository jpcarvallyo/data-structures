function wordToBinary(word) {
  let binaryResult = "";

  for (let i = 0; i < word.length; i++) {
    const charCode = word.charCodeAt(i);
    console.log(charCode);
    const binaryChar = charCode.toString(2); // Convert to binary
    console.log(binaryChar);
    console.log(binaryChar.padStart(8, "0"));
    binaryResult += binaryChar.padStart(8, "0"); // Pad to 8 bits
  }

  return binaryResult;
}

const inputWord = "he";
const binaryRepresentation = wordToBinary(inputWord);

console.log(`Binary representation of "${inputWord}": ${binaryRepresentation}`);
