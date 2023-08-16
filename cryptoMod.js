// Implement your hashing functions here
const crypto = require("crypto");
const hashSHA256 = (secret) => {
  const hash = crypto.createHash("sha256");
  hash.update(secret);
  return hash.digest("hex");
};

const hashMD5 = (secret) => {
  const hash = crypto.createHash("md5");
  hash.update(secret);
  return hash.digest("hex");
};
const hashSHA1 = (secret) => {
  const hash = crypto.createHash("sha1");
  hash.update(secret);
  return hash.digest("hex");
};

const sha256HASH = hashSHA256("1234567ajb");
console.log(sha256HASH);
console.log();
