"ffaadd";
var rgb = parseInt(hex, 16); // rgb value is 16755421 in decimal = 111111111010101011011101 in binary = total 24 bits

var red = (rgb >> 16) & 0xff; // returns 255
var green = (rgb >> 8) & 0xff; // returns 170
var blue = rgb & 0xff; // returns 221

// How is it working:

// There are two bitwise operations as named SHIFTING and AND operations.
// SHIFTING is an operation where the bits are shifted toward a given direction by adding 0 (zero) bit for vacated bit fields.
// AND is an operation that is the same as multiplying in Math. For instance, if the 9th bit of the given first bit-set is 0
// and 9th bit of the given second bit-set is 1, the new value will be 0 because of 0 x 1 = 0 in math.

// 0xFF (000000000000000011111111 in binary) - used for to evaluate only last 8 bits of a given another bit-set by performing bitwise AND (&) operation.
// The count of bits is 24 and the first 16 bits of 0xFF value consist of zero (0) value. Rest of bit-set consists of one (1) value.
console.log("0xFF \t\t\t\t: ", 0xff);

// 111111111010101011011101 -> bits of rgb variable
// 000000000000000011111111 -> 255 after (rgb >> 16) shifting operation
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000011111111 -> result bits after performing bitwise & operation
console.log("Red - (rgb >> 16) & 0xFF \t: ", (rgb >> 16) & 0xff); // used for to evaluate the first 8 bits

// 111111111010101011011101 -> bits of rgb variable
// 000000001111111110101010 -> 65450 -> 'ffaa'
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000010101010 -> result bits after performing bitwise & operation
// calculation -> 000000001111111110101010 & 000000000000000011111111 = 000000000000000010101010 = 170 in decimal = 'aa' in hex-decimal
console.log("Green - (rgb >> 8) & 0xFF \t: ", (rgb >> 8) & 0xff); // used for to evaluate the middle 8 bits

// 111111111010101011011101 -> 'ffaadd'
// 000000000000000011111111 -> 255 complement (changes the first 16 bits and does nothing for the last 8 bits)
// 000000000000000011011101 -> result bits after performing bitwise & operation
// calculation -> 111111111010101011011101 & 000000000000000011111111 = 221 in decimal = 'dd' in hex-decimal
console.log("Blue - rgb & 0xFF \t\t: ", rgb & 0xff); // // used for to evaluate the last 8 bits.

console.log(
  "It means that `FFAADD` hex-decimal value specifies the same color with rgb(255, 170, 221)"
);

// https://stackoverflow.com/a/22061240/7453363
function toggle(evt) {
  evt.target.IO ^= 1; // Bitwise XOR as 1/0 toggler
  evt.target.textContent = evt.target.IO ? "ON" : "OFF"; // Unleash your ideas
}

function isOdd(number) {
  return !!(number & 1);
}

isOdd(1); // true, 1 is odd

var foo = "abc";
!~foo.indexOf("bar"); // true

var foo = 1;
var bar = 0;

foo ^= 1; // 0
bar ^= 1; // 1
